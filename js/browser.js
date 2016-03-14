//interface
var wordCount = require('./journal.js').wordCount;

$(document).ready(function() {
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var entryCount = wordCount(entry);
    $('#wordCounts').append("<li>'Count': " + entryCount + "</li>");

  });
});
