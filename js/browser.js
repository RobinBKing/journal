//interface
var Journal = require('./journal.js').Journal;
var Entry = require('./journal.js').Entry;



$(document).ready(function() {
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var newEntry = new Entry(entry);
    var newWordCount = newEntry.wordCount();
    console.log(newWordCount);
    // $('#wordCounts').append("<li>'Count': " + entryCount + "</li>");

  });
});
