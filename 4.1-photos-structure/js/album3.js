var $ = require("jquery");

$(function (){
  var $body = $("body");
  var $albumPageElementAlbum3 = $body.find("[data-js='albumPageAlbum3']");
  var $modalArticle1Album3 = $body.find("[data-js='modal1Album3']");
  var $modalArticle2Album3 = $body.find("[data-js='modal2Album3']");
  var $modalArticle3Album3 = $body.find("[data-js='modal3Album3']");
  var $modalArticle4Album3 = $body.find("[data-js='modal4Album3']");
  var $modalArticle5Album3 = $body.find("[data-js='modal5Album3']");
  var $modalArticle6Album3 = $body.find("[data-js='modal6Album3']");
  var $photoClick1Album3 = $body.find("[data-js='thumbnailPhoto1Album3']");
  var $photoClick2Album3 = $body.find("[data-js='thumbnailPhoto2Album3']");
  var $photoClick3Album3 = $body.find("[data-js='thumbnailPhoto3Album3']");
  var $photoClick4Album3 = $body.find("[data-js='thumbnailPhoto4Album3']");
  var $photoClick5Album3 = $body.find("[data-js='thumbnailPhoto5Album3']");
  var $photoClick6Album3 = $body.find("[data-js='thumbnailPhoto6Album3']");
  var $buttonBack1Album3 = $body.find("[data-js='buttonBack1Album3']");
  var $buttonBack2Album3 = $body.find("[data-js='buttonBack2Album3']");
  var $buttonBack3Album3 = $body.find("[data-js='buttonBack3Album3']");
  var $buttonBack4Album3 = $body.find("[data-js='buttonBack4Album3']");
  var $buttonBack5Album3 = $body.find("[data-js='buttonBack5Album3']");
  var $buttonBack6Album3 = $body.find("[data-js='buttonBack6Album3']");
  var $buttonForward1Album3 = $body.find("[data-js='buttonForward1Album3']");
  var $buttonForward2Album3 = $body.find("[data-js='buttonForward2Album3']");
  var $buttonForward3Album3 = $body.find("[data-js='buttonForward3Album3']");
  var $buttonForward4Album3 = $body.find("[data-js='buttonForward4Album3']");
  var $buttonForward5Album3 = $body.find("[data-js='buttonForward5Album3']");
  var $buttonForward6Album3 = $body.find("[data-js='buttonForward6Album3']");
  var $modalCloseAlbum3 = $body.find("[data-js='modalCloseAlbum3']");
  var $modalContent = $body.find("[data-js='modal__content']");
// NEED A LOOP HERE BUT I WAS TOO TIRED TO MAKE IT
// Actually two loops, one for the $photoClick and one for the $albumPageElement
  $photoClick1Album3.on("click", function(e){
    $modalArticle1Album3.removeClass("hide");
    $albumPageElementAlbum3.addClass("hide");
  });
  $modalCloseAlbum3.on("click", function(e){
    $modalArticle1Album3.addClass("hide");
    $albumPageElementAlbum3.removeClass("hide");
  });
  $photoClick2Album3.on("click", function(e){
    $modalArticle2Album3.removeClass("hide");
    $albumPageElementAlbum3.addClass("hide");
  });
  $modalCloseAlbum3.on("click", function(e){
    $modalArticle2Album3.addClass("hide");
    $albumPageElementAlbum3.removeClass("hide");
  });
  $photoClick3Album3.on("click", function(e){
    $modalArticle3Album3.removeClass("hide");
    $albumPageElementAlbum3.addClass("hide");
  });
  $modalCloseAlbum3.on("click", function(e){
    $modalArticle3Album3.addClass("hide");
    $albumPageElementAlbum3.removeClass("hide");
  });
  $photoClick4Album3.on("click", function(e){
    $modalArticle4Album3.removeClass("hide");
    $albumPageElementAlbum3.addClass("hide");
  });
  $modalCloseAlbum3.on("click", function(e){
    $modalArticle4Album3.addClass("hide");
    $albumPageElementAlbum3.removeClass("hide");
  });
  $photoClick5Album3.on("click", function(e){
    $modalArticle5Album3.removeClass("hide");
    $albumPageElementAlbum3.addClass("hide");
  });
  $modalCloseAlbum3.on("click", function(e){
    $modalArticle5Album3.addClass("hide");
    $albumPageElementAlbum3.removeClass("hide");
  });
  $photoClick6Album3.on("click", function(e){
    $modalArticle6Album3.removeClass("hide");
    $albumPageElementAlbum3.addClass("hide");
  });
  $modalCloseAlbum3.on("click", function(e){
    $modalArticle6Album3.addClass("hide");
    $albumPageElementAlbum3.removeClass("hide");
  });
  // Making button js functions below
  // need loops for the buttons, forward and back
  $buttonForward1Album3.on("click", function(){
    $modalArticle1Album3.addClass("hide");
    $modalArticle2Album3.removeClass("hide");
  })
  $buttonForward2Album3.on("click", function(){
    $modalArticle2Album3.addClass("hide");
    $modalArticle3Album3.removeClass("hide");
  })
  $buttonForward3Album3.on("click", function(){
    $modalArticle3Album3.addClass("hide");
    $modalArticle4Album3.removeClass("hide");
  })
  $buttonForward4Album3.on("click", function(){
    $modalArticle4Album3.addClass("hide");
    $modalArticle5Album3.removeClass("hide");
  })
  $buttonForward5Album3.on("click", function(){
    $modalArticle5Album3.addClass("hide");
    $modalArticle6Album3.removeClass("hide");
  })
  $buttonBack2Album3.on("click", function(){
    $modalArticle2Album3.addClass("hide");
    $modalArticle1Album3.removeClass("hide");
  })
  $buttonBack3Album3.on("click", function(){
    $modalArticle3Album3.addClass("hide");
    $modalArticle2Album3.removeClass("hide");
  })
  $buttonBack4Album3.on("click", function(){
    $modalArticle4Album3.addClass("hide");
    $modalArticle3Album3.removeClass("hide");
  })
  $buttonBack5Album3.on("click", function(){
    $modalArticle5Album3.addClass("hide");
    $modalArticle4Album3.removeClass("hide");
  })
  $buttonBack6Album3.on("click", function(){
    $modalArticle6Album3.addClass("hide");
    $modalArticle5Album3.removeClass("hide");
  })
});
