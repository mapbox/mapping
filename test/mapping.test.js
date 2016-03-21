var test = require('tape');
var fs = require('fs');
var path =  require('path');
var jsyaml = require('js-yaml');

var paths = [];
// crawl the root and create an array of all the folders that
// contain a _posts folder
var root = getDir('./');
root.forEach(function(folder){
  var path = getDir(folder)
  if (path == '_posts'){
    paths.push(folder);
  }
});
// get all spanish dirs
// refactor this
var getES = getDir('es');
var es = [];
getES.forEach(function(e) {
  es.push('es/' + e);
});
// combine paths + spanish paths
var paths = paths.concat(es);

var categories = [];
var posts = [];

paths.forEach(function(dir) {
  file = fs.readdirSync(dir).filter(function(file) {
    var isFile = fs.statSync(path.join(dir, file)).isFile();
    if (file[0] != '.' && isFile) {
      categories.push(dir +'/' + file);
    } else if (file == '_posts') { // get _posts/
      var post_path = dir + '/' + file;
      
      // get any subdirs and then files
      var foundSubDirs = getDir(post_path);
      if (foundSubDirs) {
        foundSubDirs.forEach(function(dir){
          this_path = post_path + '/' + dir;
          this_path = fs.readdirSync(this_path).filter(function(file) {
            var isFile = fs.statSync(path.join(this_path, file)).isFile();
            if (file[0] != '.' && isFile) {
              posts.push(this_path +'/' + file);
            }
          });
        });  
      }
      
      // get the files
      post_path = fs.readdirSync(post_path).filter(function(file) {
        var isFile = fs.statSync(path.join(post_path, file)).isFile();
        if (file[0] != '.' && isFile) {
          posts.push(post_path +'/' + file);
        }
      });
      
    } else if (file[0] != '.' && !isFile) { // get folder/_posts/
      var post_path = dir + '/' + file + '/_posts';
      post_path = fs.readdirSync(post_path).filter(function(file) {
        var isFile = fs.statSync(path.join(post_path, file)).isFile();
        if (file[0] != '.' && isFile) {
          posts.push(post_path +'/' + file);
        }
      });
    }
  });
});


function getDir(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function readPost(filename) {
  var buffer = fs.readFileSync(filename),
  file = buffer.toString('utf8');
  
  try {
    var parts = file.split(/---\s*[\n^]/),
    frontmatter = parts[1];
    
    return {
      name: filename,
      file: file,
      metadata: jsyaml.load(frontmatter),
      content: parts[2]
    };
  } catch(err) {
    console.log("\nCould not read metadata, check the syntax of the metadata and front matter:" + filename);
  }
}

function readData(dir, filename) {
  var buffer = fs.readFileSync(dir + filename),
  file = buffer.toString('utf8');
  
  try {
    
    return {
      name: filename,
      file: file,
      metadata: jsyaml.load(file)
    };
  } catch(err) {}
  
}

////////////////////////////////////////////////
////////////////////////////////////////////////
// CATEGORIES
////////////////////////////////////////////////
////////////////////////////////////////////////

categories.forEach(function(post){
  var file = readPost(post);
  
  var metadata = file.metadata;
  var content = file.content;
  
  test(post, function(t) {
    
    t.ok(metadata.title,'must have a title');
    t.equal(metadata.layout,'category','layout must equal "category"');
    t.ok(metadata.color,'must have a color');
    t.ok(metadata.order,'must have an order');
    t.equal(typeof metadata.order,'number','order must be a number');
    t.ok(metadata.description,'must have a description');
    
    t.equal(post.indexOf(' '),-1,'file name must not contain spaces');
    t.equal(post.toLowerCase(),post,'file name must be lowercase');
    if (!post.match('index.md')) {
      t.fail('file name must be index.md');
    }
    
    if (metadata.section) {
      t.equal(typeof metadata, 'array', 'section must be formatted as a list');
    }
    
    t.end();
  });
});


////////////////////////////////////////////////
////////////////////////////////////////////////
// POSTS
////////////////////////////////////////////////
////////////////////////////////////////////////

posts.forEach(function(post){
  var file = readPost(post);
  
  var metadata = file.metadata;
  var content = file.content;
  
  test(post, function(t) {
    
    t.ok(metadata.title,'must have a title');
    t.equal(post.indexOf(' '),-1,'file name must not contain spaces');
    t.equal(post.toLowerCase(),post,'file name must be lowercase');
    if (!post.match('0000-01-')) {
      t.fail('file name must start with 0000-01-');
    }
    
    t.end();
  });
});
