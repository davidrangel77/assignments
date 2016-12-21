var $ = require("jquery");

$(function (){
  var $body = $("body");
  var $albumPageElementAlbum4 = $body.find("[data-js='albumPageAlbum4']");
  var $modalArticle1Album4 = $body.find("[data-js='modal1Album4']");
  var $modalArticle2Album4 = $body.find("[data-js='modal2Album4']");
  var $modalArticle3Album4 = $body.find("[data-js='modal3Album4']");
  var $modalArticle4Album4 = $body.find("[data-js='modal4Album4']");
  var $modalArticle5Album4 = $body.find("[data-js='modal5Album4']");
  var $modalArticle6Album4 = $body.find("[data-js='modal6Album4']");
  var $photoClick1Album4 = $body.find("[data-js='thumbnailPhoto1Album4']");
  var $photoClick2Album4 = $body.find("[data-js='thumbnailPhoto2Album4']");
  var $photoClick3Album4 = $body.find("[data-js='thumbnailPhoto3Album4']");
  var $photoClick4Album4 = $body.find("[data-js='thumbnailPhoto4Album4']");
  var $photoClick5Album4 = $body.find("[data-js='thumbnailPhoto5Album4']");
  var $photoClick6Album4 = $body.find("[data-js='thumbnailPhoto6Album4']");
  var $buttonBack1Album4 = $body.find("[data-js='buttonBack1Album4']");
  var $buttonBack2Album4 = $body.find("[data-js='buttonBack2Album4']");
  var $buttonBack3Album4 = $body.find("[data-js='buttonBack3Album4']");
  var $buttonBack4Album4 = $body.find("[data-js='buttonBack4Album4']");
  var $buttonBack5Album4 = $body.find("[data-js='buttonBack5Album4']");
  var $buttonBack6Album4 = $body.find("[data-js='buttonBack6Album4']");
  var $buttonForward1Album4 = $body.find("[data-js='buttonForward1Album4']");
  var $buttonForward2Album4 = $body.find("[data-js='buttonForward2Album4']");
  var $buttonForward3Album4 = $body.find("[data-js='buttonForward3Album4']");
  var $buttonForward4Album4 = $body.find("[data-js='buttonForward4Album4']");
  var $buttonForward5Album4 = $body.find("[data-js='buttonForward5Album4']");
  var $buttonForward6Album4 = $body.find("[data-js='buttonForward6Album4']");
  var $modalCloseAlbum4 = $body.find("[data-js='modalCloseAlbum4']");
  var $modalContent = $body.find("[data-js='modal__content']");
// NEED A LOOP HERE BUT I WAS TOO TIRED TO MAKE IT
// Actually two loops, one for the $photoClick and one for the $albumPageElement
  $photoClick1Album4.on("click", function(e){
    $modalArticle1Album4.removeClass("hide");
    $albumPageElementAlbum4.addClass("hide");
  });
  $modalCloseAlbum4.on("click", function(e){
    $modalArticle1Album4.addClass("hide");
    $albumPageElementAlbum4.removeClass("hide");
  });
  $photoClick2Album4.on("click", function(e){
    $modalArticle2Album4.removeClass("hide");
    $albumPageElementAlbum4.addClass("hide");
  });
  $modalCloseAlbum4.on("click", function(e){
    $modalArticle2Album4.addClass("hide");
    $albumPageElementAlbum4.removeClass("hide");
  });
  $photoClick3Album4.on("click", function(e){
    $modalArticle3Album4.removeClass("hide");
    $albumPageElementAlbum4.addClass("hide");
  });
  $modalCloseAlbum4.on("click", function(e){
    $modalArticle3Album4.addClass("hide");
    $albumPageElementAlbum4.removeClass("hide");
  });
  $photoClick4Album4.on("click", function(e){
    $modalArticle4Album4.removeClass("hide");
    $albumPageElementAlbum4.addClass("hide");
  });
  $modalCloseAlbum4.on("click", function(e){
    $modalArticle4Album4.addClass("hide");
    $albumPageElementAlbum4.removeClass("hide");
  });
  $photoClick5Album4.on("click", function(e){
    $modalArticle5Album4.removeClass("hide");
    $albumPageElementAlbum4.addClass("hide");
  });
  $modalCloseAlbum4.on("click", function(e){
    $modalArticle5Album4.addClass("hide");
    $albumPageElementAlbum4.removeClass("hide");
  });
  $photoClick6Album4.on("click", function(e){
    $modalArticle6Album4.removeClass("hide");
    $albumPageElementAlbum4.addClass("hide");
  });
  $modalCloseAlbum4.on("click", function(e){
    $modalArticle6Album4.addClass("hide");
    $albumPageElementAlbum4.removeClass("hide");
  });
  // Making button js functions below
  // need loops for the buttons, forward and back
  $buttonForward1Album4.on("click", function(){
    $modalArticle1Album4.addClass("hide");
    $modalArticle2Album4.removeClass("hide");
  })
  $buttonForward2Album4.on("click", function(){
    $modalArticle2Album4.addClass("hide");
    $modalArticle3Album4.removeClass("hide");
  })
  $buttonForward3Album4.on("click", function(){
    $modalArticle3Album4.addClass("hide");
    $modalArticle4Album4.removeClass("hide");
  })
  $buttonForward4Album4.on("click", function(){
    $modalArticle4Album4.addClass("hide");
    $modalArticle5Album4.removeClass("hide");
  })
  $buttonForward5Album4.on("click", function(){
    $modalArticle5Album4.addClass("hide");
    $modalArticle6Album4.removeClass("hide");
  })
  $buttonBack2Album4.on("click", function(){
    $modalArticle2Album4.addClass("hide");
    $modalArticle1Album4.removeClass("hide");
  })
  $buttonBack3Album4.on("click", function(){
    $modalArticle3Album4.addClass("hide");
    $modalArticle2Album4.removeClass("hide");
  })
  $buttonBack4Album4.on("click", function(){
    $modalArticle4Album4.addClass("hide");
    $modalArticle3Album4.removeClass("hide");
  })
  $buttonBack5Album4.on("click", function(){
    $modalArticle5Album4.addClass("hide");
    $modalArticle4Album4.removeClass("hide");
  })
  $buttonBack6Album4.on("click", function(){
    $modalArticle6Album4.addClass("hide");
    $modalArticle5Album4.removeClass("hide");
  })
});
