(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./journal.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
