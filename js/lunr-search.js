---

---
// This adds data to lunr so it can build out all the search weights and ouptput `index`
// http://matthewdaly.co.uk/blog/2015/04/18/how-i-added-search-to-my-site-with-lunr-dot-js/
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('tags', {boost: 10})
  this.field('lang', {boost: 10})
  this.ref('id')
});
{% assign count = 0 %}{% for post in site.posts %}{% if post.title != null and post.title != empty %}
index.add({
  title: {{post.title | escape | jsonify}},
  content: {{post.content | markdownify | strip_html | escape | jsonify}},
  tags: {{post.tags | jsonify}},
  lang: {{post.lang | jsonify}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endif %}{% endfor %}{% for page in site.pages %}{% if page.title != null and page.title != empty and page.content != '' and page.noSearch != true %}
index.add({
  title: {{page.title | jsonify}},
  content: {{page.content | markdownify | strip_html | escape | jsonify}},
  tags: {{page.tags | jsonify}},
  lang: {{post.lang | jsonify}},
  id: {{count}}
});{% assign first = false %}{% assign count = count | plus: 1 %}{% endif %}{% endfor %}
// This lines up with `index` and provides extra data about the pages and outputs this data in the search. The order of the logic MUST be the same as found in `search-feed.js`
{% assign first = true %}
var store = [{% for post in site.posts %}{% if post.title != null and post.title != empty %}{% assign categories = site.pages | where: 'layout', 'category' %}{% for category in categories %}{% assign thisCategory = post.categories | join: '' %}{% assign stripCategory = category.dir | downcase | replace:'/','' %}{% if stripCategory == thisCategory %}{% assign currentCategory = category.title %}{% assign currentCategoryLink = category.dir %}{% assign currentCategoryColor = category.color %}{% endif %}{% endfor %}{% unless first %},{% endunless %}{
    "title": {{post.title | escape | jsonify}},
    "link": "{{ site.baseurl }}{{ post.url }}",
    "tags": {{post.tags | jsonify}},
    "lang": {{post.lang | jsonify}},
    "color": {{ currentCategoryColor | jsonify }},
    "category": {{ currentCategory | jsonify }},
    "excerpt": {{ post.content  | strip_html | escape |truncatewords: 30 | jsonify }}
  },{% endif %}{% endfor %}{% for page in site.pages %}{% if page.title != null and page.title != empty and page.content != '' and page.noSearch != true %}{
      "title": {{page.title | escape | jsonify}},
      "link": "{{ site.baseurl }}{{ page.url | replace:'index.html','' }}",
      "tags": {{page.tags | jsonify}},
      "lang": {{page.lang | jsonify}},
      "color": {{ page.color | jsonify }},
      "excerpt": {{ page.description | strip_html | escape | truncatewords: 30 | jsonify }}
    }{% unless forloop.last %},{% endunless %}{% endif %}{% endfor %}
];