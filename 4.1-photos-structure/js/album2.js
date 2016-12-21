var $ = require("jquery");

$(function (){
  var $body = $("body");
  var $albumPageElementAlbum2 = $body.find("[data-js='albumPageAlbum2']");
  var $modalArticle1Album2 = $body.find("[data-js='modal1Album2']");
  var $modalArticle2Album2 = $body.find("[data-js='modal2Album2']");
  var $modalArticle3Album2 = $body.find("[data-js='modal3Album2']");
  var $modalArticle4Album2 = $body.find("[data-js='modal4Album2']");
  var $modalArticle5Album2 = $body.find("[data-js='modal5Album2']");
  var $modalArticle6Album2 = $body.find("[data-js='modal6Album2']");
  var $photoClick1Album2 = $body.find("[data-js='thumbnailPhoto1Album2']");
  var $photoClick2Album2 = $body.find("[data-js='thumbnailPhoto2Album2']");
  var $photoClick3Album2 = $body.find("[data-js='thumbnailPhoto3Album2']");
  var $photoClick4Album2 = $body.find("[data-js='thumbnailPhoto4Album2']");
  var $photoClick5Album2 = $body.find("[data-js='thumbnailPhoto5Album2']");
  var $photoClick6Album2 = $body.find("[data-js='thumbnailPhoto6Album2']");
  var $buttonBack1Album2 = $body.find("[data-js='buttonBack1Album2']");
  var $buttonBack2Album2 = $body.find("[data-js='buttonBack2Album2']");
  var $buttonBack3Album2 = $body.find("[data-js='buttonBack3Album2']");
  var $buttonBack4Album2 = $body.find("[data-js='buttonBack4Album2']");
  var $buttonBack5Album2 = $body.find("[data-js='buttonBack5Album2']");
  var $buttonBack6Album2 = $body.find("[data-js='buttonBack6Album2']");
  var $buttonForward1Album2 = $body.find("[data-js='buttonForward1Album2']");
  var $buttonForward2Album2 = $body.find("[data-js='buttonForward2Album2']");
  var $buttonForward3Album2 = $body.find("[data-js='buttonForward3Album2']");
  var $buttonForward4Album2 = $body.find("[data-js='buttonForward4Album2']");
  var $buttonForward5Album2 = $body.find("[data-js='buttonForward5Album2']");
  var $buttonForward6Album2 = $body.find("[data-js='buttonForward6Album2']");
  var $modalCloseAlbum2 = $body.find("[data-js='modalCloseAlbum2']");
  var $modalContent = $body.find("[data-js='modal__content']");
// NEED A LOOP HERE BUT I WAS TOO TIRED TO MAKE IT
// Actually two loops, one for the $photoClick and one for the $albumPageElement
  $photoClick1Album2.on("click", function(e){
    $modalArticle1Album2.removeClass("hide");
    $albumPageElementAlbum2.addClass("hide");
  });
  $modalCloseAlbum2.on("click", function(e){
    $modalArticle1Album2.addClass("hide");
    $albumPageElementAlbum2.removeClass("hide");
  });
  $photoClick2Album2.on("click", function(e){
    $modalArticle2Album2.removeClass("hide");
    $albumPageElementAlbum2.addClass("hide");
    console.log("working?");
  });
  $modalCloseAlbum2.on("click", function(e){
    $modalArticle2Album2.addClass("hide");
    $albumPageElementAlbum2.removeClass("hide");
  });
  $photoClick3Album2.on("click", function(e){
    $modalArticle3Album2.removeClass("hide");
    $albumPageElementAlbum2.addClass("hide");
  });
  $modalCloseAlbum2.on("click", function(e){
    $modalArticle3Album2.addClass("hide");
    $albumPageElementAlbum2.removeClass("hide");
  });
  $photoClick4Album2.on("click", function(e){
    $modalArticle4Album2.removeClass("hide");
    $albumPageElementAlbum2.addClass("hide");
  });
  $modalCloseAlbum2.on("click", function(e){
    $modalArticle4Album2.addClass("hide");
    $albumPageElementAlbum2.removeClass("hide");
  });
  $photoClick5Album2.on("click", function(e){
    $modalArticle5Album2.removeClass("hide");
    $albumPageElementAlbum2.addClass("hide");
  });
  $modalCloseAlbum2.on("click", function(e){
    $modalArticle5Album2.addClass("hide");
    $albumPageElementAlbum2.removeClass("hide");
  });
  $photoClick6Album2.on("click", function(e){
    $modalArticle6Album2.removeClass("hide");
    $albumPageElementAlbum2.addClass("hide");
  });
  $modalCloseAlbum2.on("click", function(e){
    $modalArticle6Album2.addClass("hide");
    $albumPageElementAlbum2.removeClass("hide");
  });
  // Making button js functions below
  // need loops for the buttons, forward and back
  $buttonForward1Album2.on("click", function(){
    $modalArticle1Album2.addClass("hide");
    $modalArticle2Album2.removeClass("hide");
  })
  $buttonForward2Album2.on("click", function(){
    $modalArticle2Album2.addClass("hide");
    $modalArticle3Album2.removeClass("hide");
  })
  $buttonForward3Album2.on("click", function(){
    $modalArticle3Album2.addClass("hide");
    $modalArticle4Album2.removeClass("hide");
  })
  $buttonForward4Album2.on("click", function(){
    $modalArticle4Album2.addClass("hide");
    $modalArticle5Album2.removeClass("hide");
  })
  $buttonForward5Album2.on("click", function(){
    $modalArticle5Album2.addClass("hide");
    $modalArticle6Album2.removeClass("hide");
  })
  $buttonBack2Album2.on("click", function(){
    $modalArticle2Album2.addClass("hide");
    $modalArticle1Album2.removeClass("hide");
  })
  $buttonBack3Album2.on("click", function(){
    $modalArticle3Album2.addClass("hide");
    $modalArticle2Album2.removeClass("hide");
  })
  $buttonBack4Album2.on("click", function(){
    $modalArticle4Album2.addClass("hide");
    $modalArticle3Album2.removeClass("hide");
  })
  $buttonBack5Album2.on("click", function(){
    $modalArticle5Album2.addClass("hide");
    $modalArticle4Album2.removeClass("hide");
  })
  $buttonBack6Album2.on("click", function(){
    $modalArticle6Album2.addClass("hide");
    $modalArticle5Album2.removeClass("hide");
  })
});
