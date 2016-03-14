var wordCount = require(./journal.js).wordCount;
var prompt = require('prompt');
prompt.start();

prompt.get('wordString', function(err, result){
  var result = wordCount(wordString);
  result.forEach(function(element) {
    console.log(element);
  });
});
