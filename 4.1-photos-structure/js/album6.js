var $ = require("jquery");

$(function (){
  var $body = $("body");
  var $albumPageElementAlbum6 = $body.find("[data-js='albumPageAlbum6']");
  var $modalArticle1Album6 = $body.find("[data-js='modal1Album6']");
  var $modalArticle2Album6 = $body.find("[data-js='modal2Album6']");
  var $modalArticle3Album6 = $body.find("[data-js='modal3Album6']");
  var $modalArticle4Album6 = $body.find("[data-js='modal4Album6']");
  var $modalArticle5Album6 = $body.find("[data-js='modal5Album6']");
  var $modalArticle6Album6 = $body.find("[data-js='modal6Album6']");
  var $photoClick1Album6 = $body.find("[data-js='thumbnailPhoto1Album6']");
  var $photoClick2Album6 = $body.find("[data-js='thumbnailPhoto2Album6']");
  var $photoClick3Album6 = $body.find("[data-js='thumbnailPhoto3Album6']");
  var $photoClick4Album6 = $body.find("[data-js='thumbnailPhoto4Album6']");
  var $photoClick5Album6 = $body.find("[data-js='thumbnailPhoto5Album6']");
  var $photoClick6Album6 = $body.find("[data-js='thumbnailPhoto6Album6']");
  var $buttonBack1Album6 = $body.find("[data-js='buttonBack1Album6']");
  var $buttonBack2Album6 = $body.find("[data-js='buttonBack2Album6']");
  var $buttonBack3Album6 = $body.find("[data-js='buttonBack3Album6']");
  var $buttonBack4Album6 = $body.find("[data-js='buttonBack4Album6']");
  var $buttonBack5Album6 = $body.find("[data-js='buttonBack5Album6']");
  var $buttonBack6Album6 = $body.find("[data-js='buttonBack6Album6']");
  var $buttonForward1Album6 = $body.find("[data-js='buttonForward1Album6']");
  var $buttonForward2Album6 = $body.find("[data-js='buttonForward2Album6']");
  var $buttonForward3Album6 = $body.find("[data-js='buttonForward3Album6']");
  var $buttonForward4Album6 = $body.find("[data-js='buttonForward4Album6']");
  var $buttonForward5Album6 = $body.find("[data-js='buttonForward5Album6']");
  var $buttonForward6Album6 = $body.find("[data-js='buttonForward6Album6']");
  var $modalCloseAlbum6 = $body.find("[data-js='modalCloseAlbum6']");
  var $modalContent = $body.find("[data-js='modal__content']");
// NEED A LOOP HERE BUT I WAS TOO TIRED TO MAKE IT
// Actually two loops, one for the $photoClick and one for the $albumPageElement
  $photoClick1Album6.on("click", function(e){
    $modalArticle1Album6.removeClass("hide");
    $albumPageElementAlbum6.addClass("hide");
  });
  $modalCloseAlbum6.on("click", function(e){
    $modalArticle1Album6.addClass("hide");
    $albumPageElementAlbum6.removeClass("hide");
  });
  $photoClick2Album6.on("click", function(e){
    $modalArticle2Album6.removeClass("hide");
    $albumPageElementAlbum6.addClass("hide");
  });
  $modalCloseAlbum6.on("click", function(e){
    $modalArticle2Album6.addClass("hide");
    $albumPageElementAlbum6.removeClass("hide");
  });
  $photoClick3Album6.on("click", function(e){
    $modalArticle3Album6.removeClass("hide");
    $albumPageElementAlbum6.addClass("hide");
  });
  $modalCloseAlbum6.on("click", function(e){
    $modalArticle3Album6.addClass("hide");
    $albumPageElementAlbum6.removeClass("hide");
  });
  $photoClick4Album6.on("click", function(e){
    $modalArticle4Album6.removeClass("hide");
    $albumPageElementAlbum6.addClass("hide");
  });
  $modalCloseAlbum6.on("click", function(e){
    $modalArticle4Album6.addClass("hide");
    $albumPageElementAlbum6.removeClass("hide");
  });
  $photoClick5Album6.on("click", function(e){
    $modalArticle5Album6.removeClass("hide");
    $albumPageElementAlbum6.addClass("hide");
  });
  $modalCloseAlbum6.on("click", function(e){
    $modalArticle5Album6.addClass("hide");
    $albumPageElementAlbum6.removeClass("hide");
  });
  $photoClick6Album6.on("click", function(e){
    $modalArticle6Album6.removeClass("hide");
    $albumPageElementAlbum6.addClass("hide");
  });
  $modalCloseAlbum6.on("click", function(e){
    $modalArticle6Album6.addClass("hide");
    $albumPageElementAlbum6.removeClass("hide");
  });
  // Making button js functions below
  // need loops for the buttons, forward and back
  $buttonForward1Album6.on("click", function(){
    $modalArticle1Album6.addClass("hide");
    $modalArticle2Album6.removeClass("hide");
  })
  $buttonForward2Album6.on("click", function(){
    $modalArticle2Album6.addClass("hide");
    $modalArticle3Album6.removeClass("hide");
  })
  $buttonForward3Album6.on("click", function(){
    $modalArticle3Album6.addClass("hide");
    $modalArticle4Album6.removeClass("hide");
  })
  $buttonForward4Album6.on("click", function(){
    $modalArticle4Album6.addClass("hide");
    $modalArticle5Album6.removeClass("hide");
  })
  $buttonForward5Album6.on("click", function(){
    $modalArticle5Album6.addClass("hide");
    $modalArticle6Album6.removeClass("hide");
  })
  $buttonBack2Album6.on("click", function(){
    $modalArticle2Album6.addClass("hide");
    $modalArticle1Album6.removeClass("hide");
  })
  $buttonBack3Album6.on("click", function(){
    $modalArticle3Album6.addClass("hide");
    $modalArticle2Album6.removeClass("hide");
  })
  $buttonBack4Album6.on("click", function(){
    $modalArticle4Album6.addClass("hide");
    $modalArticle3Album6.removeClass("hide");
  })
  $buttonBack5Album6.on("click", function(){
    $modalArticle5Album6.addClass("hide");
    $modalArticle4Album6.removeClass("hide");
  })
  $buttonBack6Album6.on("click", function(){
    $modalArticle6Album6.addClass("hide");
    $modalArticle5Album6.removeClass("hide");
  })
});
