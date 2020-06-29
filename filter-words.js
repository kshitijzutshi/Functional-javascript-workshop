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