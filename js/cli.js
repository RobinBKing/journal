var wordCount = require(./journal.js).wordCount;

console.log('Journaling automatically!');
var result = wordCount('This is my journal entery');
result.forEach(function(element) {
  console.log(element);
});
