var $ = require("jquery");

$(function (){
  var $body = $("body");
  var $modalArticle = $body.find("[data-js='modal']")
  var $photoClick = $body.find("[data-js='thumbnailPhoto']");
  var $modalClose = $body.find("[data-js='modalClose']")
  var $modalContent = $body.find("[data-js='modal__content']")
  $photoClick.on("click", function(e){
    $modalArticle.style.display = "block";
  });
  $modalClose.on("click", function(e){
    $modalArticle.style.display = "none";
  });
});
