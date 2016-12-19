// checlist for js for gift form:
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
// [x] - insert that in the total field each time an item is added
// [x] - activate button for line-through
// THINGS I WANT TO FIX =
// - I want the text input box to clear when I hit ADD or push return
// - If I keep pushing the "checkButton" it keeps reducing the total by that amount into the negative.
// - Want to make a forEach loop or .each event for the dblclick events to edit input fields.
// - Want the totalElement to reflect the editing pricing data in real time

$(function(){
  var $body = $("body");
  var $text = $body.find("[data-js='text_input']");
  var $addButton = $body.find("[data-js='submit']");
  var $articleElement = $body.find("[data-js='articles']")
  var $divElement = $body.find("[data-js='divElement']")
  var $totalElement = $body.find("[data-js='total']")
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
        "data-js": "itemName"
      })
      .text(listTextElement);
    var $priceElement = $("<p>")
      .attr({
        class: "priceElement",
        "data-js": "price",
        value: priceElement
      })
      .text("$"+(priceElement))
    var $articleHTML = $("<article>")
        .attr({
          class: "listItem"
        })
      .append($circleButton)
      .append($listTextElement)
      .append($priceElement)
    $articleElement.prepend($articleHTML);
    var totalString = "";
    var totalPrice = "";
    $priceElement.each(function(priceElement) {
      var priceElement = $(".priceElement");
      totalString += priceElement.text();
      var input = totalString;
      var numbers = input.split("$");
      var numberString = numbers.join("+");
      var totalOfEval = eval(numberString)
      totalPrice = totalOfEval;
    });
    $totalElement.text(totalPrice);
});
  $body.on("click", "[data-js='circle']", function(){
    var $this = $(this);
    $this.siblings().addClass("lineThrough");
    $this.html("&#10003");
    var siblingsArray = $this.siblings();
    var pPriceElement = siblingsArray[1];
    var $pPriceElement = $(pPriceElement);
    var currentPriceElement = $(pPriceElement).attr("value");
    var currentPriceToSubtract = currentPriceElement;
    var newSubtractedTotal = $totalElement.text() - currentPriceToSubtract;
    $totalElement.text(newSubtractedTotal);
  });
  $body.on("dblclick", "[data-js='itemName']", function(){
    var $this = $(this);
    $this.get(0).contentEditable = "true";
  });
  $body.on("dblclick", "[data-js='price']", function(){
    var $this = $(this);
    $this.get(0).contentEditable = "true";
  });
  $body.on("dblclick", "[data-js='total']", function(){
    var $this = $(this);
    $this.get(0).contentEditable = "true";
  });
});
