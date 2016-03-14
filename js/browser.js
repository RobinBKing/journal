//interface
var Journal = require('./journal.js').Journal;
var Entry = require('./journal.js').Entry;
// var moment = require('moment');



$(document).ready(function() {
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var newEntry = new Entry(title, entry);
    // newEntry.date = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#wordCounts').append("<li>Journal entry: '" + newEntry.title + "' made on " + newEntry.date + " has " + newEntry.wordCount() + " words.</li>");
  });
});
