// checlist for js fir gift form:
// [x] - factory call the doc to start
// [x] - factory call to $body to $ through body element
// [x] - write vars for things to ref in html elements
// [x] - add data-js in html to connect js
// [] - make on click for ADD button
// [] - add prevent.default to
// [] - make a var to capture the text input
// [] - create a new list item article with jQuery
        // - var for button
        // - var for article
// [] - prepend the new article to add to the top of list
// [] - find the cost of items
// [] - add those items up
// [] - insert that in the total field each time an item is added

$(function(){
  var $body = $("body");
  var $text = $body.find("[data-js='text_input']");
  var $addButton = $body.find("[data-js='submit']");
  var $articleElement = $body.find("[data-js='articles']")
  var $divElement = $body.find("[data-js='divElement']")
  $addButton.on("click", function(e){
    e.preventDefault();
    var textInputValue = $text.val();
    var $circleButton = $("<button>")
      .attr({
        class: "circleButton",
      });
    var $listTextElement = $("<p>")
      .attr({
        class: "listItem__text"
      })
      .text(textInputValue);
      var $articleHTML = $("<article>")
          .attr({
            class: "listItem"
          })
      .append($circleButton)
      .append($listTextElement)
    $articleElement.prepend($articleHTML);
  });
  
});
