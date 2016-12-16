// checlist for js fir gift form:
// [x] - factory call the doc to start
// [x] - factory call to $body to $ through body element
// [x] - write vars for things to ref in html elements
// [x] - add data-js in html to connect js
// [x] - make on click for ADD button
// [x] - add prevent.default to
// [x] - make a var to capture the text input
// [x] - create a new list item article with jQuery
        // - var for button
        // - var for article
// [x] - prepend the new article to add to the top of list
// [x] - find the cost of items
// [] - add those items up
// [] - insert that in the total field each time an item is added
// [x] - activate button for line-through

$(function(){
  var $body = $("body");
  var $text = $body.find("[data-js='text_input']");
  var $addButton = $body.find("[data-js='submit']");
  var $articleElement = $body.find("[data-js='articles']")
  var $divElement = $body.find("[data-js='divElement']")
  $addButton.on("click", function(e){
    e.preventDefault();
    var textInputValue = $text.val();
    var textInputArray = textInputValue.split(",");
    var listTextElement = textInputArray[0];
    var priceElement = textInputArray[1];
    var $circleButton = $("<button>")
      .attr({
        class: "circleButton",
        type: "button",
        value: "line",
        "data-js": "circle"
      });
    var $listTextElement = $("<p>")
      .attr({
        class: "listItem__text",
      })
      .text(listTextElement);
      var $priceElement = $("<p>")
        .attr({
          class: "priceElement",
          "data-js": "price",
        })
        .text("$" + (priceElement))
      var $articleHTML = $("<article>")
          .attr({
            class: "listItem"
          })
      .append($circleButton)
      .append($listTextElement)
      .append($priceElement)
    $articleElement.prepend($articleHTML);
    // // find the prices
    var totalPrice = 0
    //
    $priceElement.forEach(function(priceEL){
      var $priceEL = $(priceEL);
      val($priceEL) = totalPrice;
    });
    console.log(totalPrice);
    // // and add to running total


  });
  $body.on("click", "[data-js='circle']", function(){
    var $this = $(this);
    // $this.next().addClass("lineThrough");
    $this.siblings().addClass("lineThrough");
    $this.html("&#10003");
  });
});
