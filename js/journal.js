//business logic
var moment = require('moment');

exports.Journal = function() {
  this.entries = [];
}
exports.Entry = function(title, entry) {
  this.title = title;
  this.entry = entry;
  this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
}
exports.Entry.prototype.wordCount = function() {
  return this.entry.match(/(\w+)/g).length;
} // \w+ between one and unlimited word characters
  // /g  greedy - don't stop after the first match
