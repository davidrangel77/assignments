var $ = require("jquery");

$(function (){
  var $body = $("body");
  var $albumPageElement = $body.find("[data-js='albumPage1']");
  var $albumPageElementAlbum2 = $body.find("[data-js='albumPageAlbum2']");
  var $albumPageElementAlbum3 = $body.find("[data-js='albumPageAlbum3']");
  var $albumPageElementAlbum4 = $body.find("[data-js='albumPageAlbum4']");
  var $albumPageElementAlbum5 = $body.find("[data-js='albumPageAlbum5']");
  var $modalArticle1Album5 = $body.find("[data-js='modal1Album5']");
  var $modalArticle2Album5 = $body.find("[data-js='modal2Album5']");
  var $modalArticle3Album5 = $body.find("[data-js='modal3Album5']");
  var $modalArticle4Album5 = $body.find("[data-js='modal4Album5']");
  var $modalArticle5Album5 = $body.find("[data-js='modal5Album5']");
  var $modalArticle6Album5 = $body.find("[data-js='modal6Album5']");
  var $photoClick1Album5 = $body.find("[data-js='thumbnailPhoto1Album5']");
  var $photoClick2Album5 = $body.find("[data-js='thumbnailPhoto2Album5']");
  var $photoClick3Album5 = $body.find("[data-js='thumbnailPhoto3Album5']");
  var $photoClick4Album5 = $body.find("[data-js='thumbnailPhoto4Album5']");
  var $photoClick5Album5 = $body.find("[data-js='thumbnailPhoto5Album5']");
  var $photoClick6Album5 = $body.find("[data-js='thumbnailPhoto6Album5']");
  var $buttonBack1Album5 = $body.find("[data-js='buttonBack1Album5']");
  var $buttonBack2Album5 = $body.find("[data-js='buttonBack2Album5']");
  var $buttonBack3Album5 = $body.find("[data-js='buttonBack3Album5']");
  var $buttonBack4Album5 = $body.find("[data-js='buttonBack4Album5']");
  var $buttonBack5Album5 = $body.find("[data-js='buttonBack5Album5']");
  var $buttonBack6Album5 = $body.find("[data-js='buttonBack6Album5']");
  var $buttonForward1Album5 = $body.find("[data-js='buttonForward1Album5']");
  var $buttonForward2Album5 = $body.find("[data-js='buttonForward2Album5']");
  var $buttonForward3Album5 = $body.find("[data-js='buttonForward3Album5']");
  var $buttonForward4Album5 = $body.find("[data-js='buttonForward4Album5']");
  var $buttonForward5Album5 = $body.find("[data-js='buttonForward5Album5']");
  var $buttonForward6Album5 = $body.find("[data-js='buttonForward6Album5']");
  var $modalCloseAlbum5 = $body.find("[data-js='modalCloseAlbum5']");
  var $modalContent = $body.find("[data-js='modal__content']");
// NEED A LOOP HERE BUT I WAS TOO TIRED TO MAKE IT
// Actually two loops, one for the $photoClick and one for the $albumPageElement
  $photoClick1Album5.on("click", function(e){
    $modalArticle1Album5.removeClass("hide");
    $albumPageElementAlbum5.addClass("hide");
  });
  $modalCloseAlbum5.on("click", function(e){
    $modalArticle1Album5.addClass("hide");
    $albumPageElementAlbum5.removeClass("hide");
  });
  $photoClick2Album5.on("click", function(e){
    $modalArticle2.removeClass("hide");
    $albumPageElement.addClass("hide");
  });
  $modalCloseAlbum5.on("click", function(e){
    $modalArticle2Album5.addClass("hide");
    $albumPageElementAlbum5.removeClass("hide");
  });
  $photoClick3Album5.on("click", function(e){
    $modalArticle3Album5.removeClass("hide");
    $albumPageElementAlbum5.addClass("hide");
  });
  $modalCloseAlbum5.on("click", function(e){
    $modalArticle3Album5.addClass("hide");
    $albumPageElementAlbum5.removeClass("hide");
  });
  $photoClick4Album5.on("click", function(e){
    $modalArticle4Album5.removeClass("hide");
    $albumPageElementAlbum5.addClass("hide");
  });
  $modalCloseAlbum5.on("click", function(e){
    $modalArticle4Album5.addClass("hide");
    $albumPageElementAlbum5.removeClass("hide");
  });
  $photoClick5Album5.on("click", function(e){
    $modalArticle5Album5.removeClass("hide");
    $albumPageElementAlbum5.addClass("hide");
  });
  $modalCloseAlbum5.on("click", function(e){
    $modalArticle5Album5.addClass("hide");
    $albumPageElementAlbum5.removeClass("hide");
  });
  $photoClick6Album5.on("click", function(e){
    $modalArticle6Album5.removeClass("hide");
    $albumPageElementAlbum5.addClass("hide");
  });
  $modalCloseAlbum5.on("click", function(e){
    $modalArticle6Album5.addClass("hide");
    $albumPageElementAlbum5.removeClass("hide");
  });
  // Making button js functions below
  // need loops for the buttons, forward and back
  $buttonForward1Album5.on("click", function(){
    $modalArticle1Album5.addClass("hide");
    $modalArticle2Album5.removeClass("hide");
  })
  $buttonForward2Album5.on("click", function(){
    $modalArticle2Album5.addClass("hide");
    $modalArticle3Album5.removeClass("hide");
  })
  $buttonForward3Album5.on("click", function(){
    $modalArticle3Album5.addClass("hide");
    $modalArticle4Album5.removeClass("hide");
  })
  $buttonForward4Album5.on("click", function(){
    $modalArticle4Album5.addClass("hide");
    $modalArticle5Album5.removeClass("hide");
  })
  $buttonForward5Album5.on("click", function(){
    $modalArticle5Album5.addClass("hide");
    $modalArticle6Album5.removeClass("hide");
  })
  $buttonBack2Album5.on("click", function(){
    $modalArticle2Album5.addClass("hide");
    $modalArticle1Album5.removeClass("hide");
  })
  $buttonBack3Album5.on("click", function(){
    $modalArticle3Album5.addClass("hide");
    $modalArticle2Album5.removeClass("hide");
  })
  $buttonBack4Album5.on("click", function(){
    $modalArticle4Album5.addClass("hide");
    $modalArticle3Album5.removeClass("hide");
  })
  $buttonBack5Album5.on("click", function(){
    $modalArticle5Album5.addClass("hide");
    $modalArticle4Album5.removeClass("hide");
  })
  $buttonBack6Album5.on("click", function(){
    $modalArticle6Album5.addClass("hide");
    $modalArticle5Album5.removeClass("hide");
  })
});
