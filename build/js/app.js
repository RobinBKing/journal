(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./journal.js":2}],2:[function(require,module,exports){
//business logic
exports.wordCount = function(wordString){
// \w+ between one and unlimited word characters
// /g  greedy - don't stop after the first match
  return wordString.match(/(\w+)/g).length;
}

},{}]},{},[1]);
