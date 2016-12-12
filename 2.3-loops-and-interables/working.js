function function1 (paragraph) {
  // function1 need to take the paragraph and delete the bad words.
  var goodWordsSentence = ""
  var sentenceArray = paragraph.split(" ")
  console.log(sentenceArray);
  var badWordsArray = ["heck", "darn", "crappy", "dang"]
  console.log(badWordsArray);
  for (var i = 0; i < sentenceArray.length; i++) {
    var currentWord = sentenceArray[i]
      if (badWordsArray.indexOf(currentWord) === -1) {
        if (i === sentenceArray.length-1) {
        goodWordsSentence += currentWord;
        } else {
          goodWordsSentence += currentWord + " ";
        }
      }
      console.log(goodWordsSentence);
    return goodWordsSentence;
  }
}

var paragraph = 'dad bring your crappy self in here. i want a dang sandwich.'
console.assert(function1(paragraph) === "Dad bring your self in here. I want a sandwich.")
