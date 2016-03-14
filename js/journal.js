//business logic
exports.wordCount = function(wordString){
// \w+ between one and unlimited word characters
// /g  greedy - don't stop after the first match
  return wordString.match(/(\w+)/g).length;
}
