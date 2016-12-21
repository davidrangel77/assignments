var $ = require("jquery");

$(function (){
  var $body = $("body");
  var $albumPageElement = $body.find("[data-js='albumPage']");
  var $modalArticle1 = $body.find("[data-js='modal1']");
  var $modalArticle2 = $body.find("[data-js='modal2']");
  var $modalArticle3 = $body.find("[data-js='modal3']");
  var $modalArticle4 = $body.find("[data-js='modal4']");
  var $modalArticle5 = $body.find("[data-js='modal5']");
  var $modalArticle6 = $body.find("[data-js='modal6']");
  var $photoClick1 = $body.find("[data-js='thumbnailPhoto1']");
  var $photoClick2 = $body.find("[data-js='thumbnailPhoto2']");
  var $photoClick3 = $body.find("[data-js='thumbnailPhoto3']");
  var $photoClick4 = $body.find("[data-js='thumbnailPhoto4']");
  var $photoClick5 = $body.find("[data-js='thumbnailPhoto5']");
  var $photoClick6 = $body.find("[data-js='thumbnailPhoto6']");
  var $buttonBack1 = $body.find("[data-js='buttonBack1']");
  var $buttonBack2 = $body.find("[data-js='buttonBack2']");
  var $buttonBack3 = $body.find("[data-js='buttonBack3']");
  var $buttonBack4 = $body.find("[data-js='buttonBack4']");
  var $buttonBack5 = $body.find("[data-js='buttonBack5']");
  var $buttonBack6 = $body.find("[data-js='buttonBack6']");
  var $modalClose = $body.find("[data-js='modalClose']");
  var $modalContent = $body.find("[data-js='modal__content']");
  $photoClick1.on("click", function(e){
    $modalArticle1.removeClass("hide");
    $albumPageElement.addClass("hide");
  });
  $modalClose.on("click", function(e){
    $modalArticle1.addClass("hide");
    $albumPageElement.removeClass("hide");
  });
  $photoClick2.on("click", function(e){
    $modalArticle2.removeClass("hide");
    $albumPageElement.addClass("hide");
  });
  $modalClose.on("click", function(e){
    $modalArticle2.addClass("hide");
    $albumPageElement.removeClass("hide");
  });
  $photoClick3.on("click", function(e){
    $modalArticle3.removeClass("hide");
    $albumPageElement.addClass("hide");
  });
  $modalClose.on("click", function(e){
    $modalArticle3.addClass("hide");
    $albumPageElement.removeClass("hide");
  });
  $photoClick4.on("click", function(e){
    $modalArticle4.removeClass("hide");
    $albumPageElement.addClass("hide");
  });
  $modalClose.on("click", function(e){
    $modalArticle4.addClass("hide");
    $albumPageElement.removeClass("hide");
  });
  $photoClick5.on("click", function(e){
    $modalArticle5.removeClass("hide");
    $albumPageElement.addClass("hide");
  });
  $modalClose.on("click", function(e){
    $modalArticle5.addClass("hide");
    $albumPageElement.removeClass("hide");
  });
  $photoClick6.on("click", function(e){
    $modalArticle6.removeClass("hide");
    $albumPageElement.addClass("hide");
  });
  $modalClose.on("click", function(e){
    $modalArticle6.addClass("hide");
    $albumPageElement.removeClass("hide");
  });

});
