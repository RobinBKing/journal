//business logic
exports.Journal = function() {
  this.entries = [];
}
exports.Entry = function(entry) {
  this.entry = entry;
  this.date = "3.14.16";
}
exports.Entry.prototype.wordCount = function() {
  return this.entry.match(/(\w+)/g).length;
} // \w+ between one and unlimited word characters
  // /g  greedy - don't stop after the first match
