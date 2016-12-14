// open $ and the DOMContentLoaded with the JQuery method
$(function() {
  // TO DO:
  // need to make a var for the elements in the html to connect data-js
  var $articleElements = $("[data-js='article']");
  // need to use an $.on to loop through them to look for the click
  $articleElements.on("click", function(e){
    // make var to reference "$this"
    var $clickedArticle = $(this);
  // change the class to expand on click
  // but will do this below the .filter and .removeClass to that we don't negate the first time the articleElement is clicked
  // need to make a find class for elements with the expanded status
  // need to change the class of those elements to remove the expand class
    $articleElements.filter(".accordian").removeClass("accordian")
  // change the class to expand on click
    $clickedArticle.addClass("accordian");
  });
});
