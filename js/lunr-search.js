---

---
// This adds data to lunr so it can build out all the search weights and ouptput `index`
// http://matthewdaly.co.uk/blog/2015/04/18/how-i-added-search-to-my-site-with-lunr-dot-js/
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('tags', {boost: 10})
  this.ref('id')
});
{% assign count = 0 %}{% for post in site.posts %}{% if post.title != null and post.title != empty %}
index.add({
  title: {{post.title | jsonify}},
  content: {{post.content | markdownify | strip_html | jsonify}},
  tags: {{post.tags | jsonify}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endif %}{% endfor %}{% for page in site.pages %}{% if page.title != null and page.title != empty and page.content != '' and page.noSearch != true %}
index.add({
  title: {{page.title | jsonify}},
  content: {{page.content | markdownify | strip_html | jsonify}},
  tags: {{page.tags | jsonify}},
  id: {{count}}
});{% assign first = false %}{% assign count = count | plus: 1 %}{% endif %}{% endfor %}
// This lines up with `index` and provides extra data about the pages and outputs this data in the search. The order of the logic MUST be the same as found in `search-feed.js`
{% assign first = true %}
var store = [{% for post in site.posts %}{% if post.title != null and post.title != empty %}
  {% unless first %},{% endunless %}{
    "title": {{post.title | jsonify}},
    "link": "{{ site.url }}{{ post.url }}",
    "tags": {{post.tags | jsonify}},
    "color": {{ post.ancestors[1].color | jsonify }},
    "ancestors": "{{ post.ancestors[1].title}}{% if post.ancestors[2].title %}{{ post.ancestors[2].title | prepend:': ' }}{% endif %}",
    "category": {{ post.ancestors[1].title | jsonify }},{% if post.ancestors[2].title %}
    "topic": {{ post.ancestors[2].title | jsonify }},{% endif %}
    "excerpt": {{ post.content | strip_html | truncatewords: 30 | jsonify }}
  }{% assign first = false %}{% endif %}{% endfor %}{% for page in site.pages %}{% if page.title != null and page.title != empty and page.content != '' and page.noSearch != true %}{% unless first %},{% endunless %}{
    "title": {{page.title | jsonify}},
    "link": "{{ site.url }}{{ page.url | replace: 'index.html', '' }}",
    "tags": {{page.tags | jsonify}},
    "color": {{ page..color | jsonify }},
    "ancestors": {{ page.title | jsonify }},
    "category": {{ page.title | jsonify }},
    "excerpt": {{ page.content | strip_html | truncatewords: 30 | jsonify }}
  }{% assign first = false %}{% endif %}{% endfor %}
];
// queries and build results
$(document).ready(function () {
  // this is where you put the results
  var resultdiv = $('#search-results');
  
  // hide search on load
  $('#search-results-status').hide();
  
  // clear results when clicked/toggled
  $('.view-toggle, #btn-clear').click(function(){
    $('#search-results-status').hide();
    resultdiv.empty();
    $('input#search').val('');
    var query = null;
  });
  
  // Let's search some thangs
  $('input#search').on('keyup', function () {
    
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Update the counter
    $('#search-result-count').text(result.length);
    // Update the query placeholder
    $('#search-term').text(query);
    // Output results
    $('#search-results-status').show();
    // Show results
    resultdiv.empty();
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="fill-white pad4 pad4x space-bottom2 round post contain clearfix"><div class="post-side fill-'+store[ref].color+' clearfix"></div><div class="col8 pad4x keyline-right"><h3 class="pad0y"><a href="'+store[ref].link+'">'+store[ref].title+'</a></h3><em class="quiet small">'+store[ref].ancestors+'</em><p class="prose quiet">'+store[ref].excerpt+'</p></div><div class="col4 pad4x"><a class="round pad1y small strong pad2x fill-'+store[ref].color+' rcon next space-bottom2" href="'+store[ref].link+'">Read this guide</a><div class="col12"></div></div></div>';
      resultdiv.append(searchitem);
    }
    resultdiv.show();
  });
});
