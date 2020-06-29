 // Filter words from rawlist
 var filterWords = function(rawText,wordsToRemove){
    var rawList = rawText.split('');
    wordsToRemove = [].concat(wordsToRemove);

    wordsToRemove.forEach((word) => { 
      rawList = rawList.filter((raw) => {
        raw.toLowerCase() !== word.toLowerCase()
      });
    });
    return rawList.join('');
  }

  module.exports = filterWords;

  filterWords('hello all I am alive',['I','am']);

  // Now if we have an array of rawText instead of single string
  /*

  rawText = [
      "Hello world I am alive",
      "turbo booster works for now",
      "monster inc is the best movie ever"
  ]

var output = rawText.map(function(text) {
    return filterWords(text,wordsToRemove)
})

console.log(output);

*/