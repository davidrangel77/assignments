var $ = require("jquery");

$(function (){
  var $body = $("body");
  var $albumPageElement = $body.find("[data-js='albumPage']");
  var $albumPageElementAlbum2 = $body.find("[data-js='albumPageAlbum2']");
  var $modalArticle1 = $body.find("[data-js='modal1']");
  var $modalArticle2 = $body.find("[data-js='modal2']");
  var $modalArticle3 = $body.find("[data-js='modal3']");
  var $modalArticle4 = $body.find("[data-js='modal4']");
  var $modalArticle5 = $body.find("[data-js='modal5']");
  var $modalArticle6 = $body.find("[data-js='modal6']");
  var $modalArticle1Album2 = $body.find("[data-js='modal1Album2']");
  var $modalArticle2Album2 = $body.find("[data-js='modal2Album2']");
  var $modalArticle3Album2 = $body.find("[data-js='modal3Album2']");
  var $modalArticle4Album2 = $body.find("[data-js='modal4Album2']");
  var $modalArticle5Album2 = $body.find("[data-js='modal5Album2']");
  var $modalArticle6Album2 = $body.find("[data-js='modal6Album2']");
  var $photoClick1 = $body.find("[data-js='thumbnailPhoto1']");
  var $photoClick2 = $body.find("[data-js='thumbnailPhoto2']");
  var $photoClick3 = $body.find("[data-js='thumbnailPhoto3']");
  var $photoClick4 = $body.find("[data-js='thumbnailPhoto4']");
  var $photoClick5 = $body.find("[data-js='thumbnailPhoto5']");
  var $photoClick6 = $body.find("[data-js='thumbnailPhoto6']");
  var $photoClick1Album2 = $body.find("[data-js='thumbnailPhoto1Album2']");
  var $photoClick2Album2 = $body.find("[data-js='thumbnailPhoto2Album2']");
  var $photoClick3Album2 = $body.find("[data-js='thumbnailPhoto3Album2']");
  var $photoClick4Album2 = $body.find("[data-js='thumbnailPhoto4Album2']");
  var $photoClick5Album2 = $body.find("[data-js='thumbnailPhoto5Album2']");
  var $photoClick6Album2 = $body.find("[data-js='thumbnailPhoto6Album2']");
  var $buttonBack1 = $body.find("[data-js='buttonBack1']");
  var $buttonBack2 = $body.find("[data-js='buttonBack2']");
  var $buttonBack3 = $body.find("[data-js='buttonBack3']");
  var $buttonBack4 = $body.find("[data-js='buttonBack4']");
  var $buttonBack5 = $body.find("[data-js='buttonBack5']");
  var $buttonBack6 = $body.find("[data-js='buttonBack6']");
  var $buttonBack1Album2 = $body.find("[data-js='buttonBack1Album2']");
  var $buttonBack2Album2 = $body.find("[data-js='buttonBack2Album2']");
  var $buttonBack3Album2 = $body.find("[data-js='buttonBack3Album2']");
  var $buttonBack4Album2 = $body.find("[data-js='buttonBack4Album2']");
  var $buttonBack5Album2 = $body.find("[data-js='buttonBack5Album2']");
  var $buttonBack6Album2 = $body.find("[data-js='buttonBack6Album2']");
  var $buttonForward1 = $body.find("[data-js='buttonForward1']");
  var $buttonForward2 = $body.find("[data-js='buttonForward2']");
  var $buttonForward3 = $body.find("[data-js='buttonForward3']");
  var $buttonForward4 = $body.find("[data-js='buttonForward4']");
  var $buttonForward5 = $body.find("[data-js='buttonForward5']");
  var $buttonForward6 = $body.find("[data-js='buttonForward6']");
  var $buttonForward1Album2 = $body.find("[data-js='buttonForward1Album2']");
  var $buttonForward2Album2 = $body.find("[data-js='buttonForward2Album2']");
  var $buttonForward3Album2 = $body.find("[data-js='buttonForward3Album2']");
  var $buttonForward4Album2 = $body.find("[data-js='buttonForward4Album2']");
  var $buttonForward5Album2 = $body.find("[data-js='buttonForward5Album2']");
  var $buttonForward6Album2 = $body.find("[data-js='buttonForward6Album2']");
  var $modalClose = $body.find("[data-js='modalClose']");
  var $modalCloseAlbum2 = $body.find("[data-js='modalCloseAlbum2']");
  var $modalContent = $body.find("[data-js='modal__content']");
// NEED A LOOP HERE BUT I WAS TOO TIRED TO MAKE IT
// Actually two loops, one for the $photoClick and one for the $albumPageElement
// for ALBUM 1
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
  // Making button js functions below
  // need loops for the buttons, forward and back
  $buttonForward1.on("click", function(){
    $modalArticle1.addClass("hide");
    $modalArticle2.removeClass("hide");
  })
  $buttonForward2.on("click", function(){
    $modalArticle2.addClass("hide");
    $modalArticle3.removeClass("hide");
  })
  $buttonForward3.on("click", function(){
    $modalArticle3.addClass("hide");
    $modalArticle4.removeClass("hide");
  })
  $buttonForward4.on("click", function(){
    $modalArticle4.addClass("hide");
    $modalArticle5.removeClass("hide");
  })
  $buttonForward5.on("click", function(){
    $modalArticle5.addClass("hide");
    $modalArticle6.removeClass("hide");
  })
  $buttonBack2.on("click", function(){
    $modalArticle2.addClass("hide");
    $modalArticle1.removeClass("hide");
  })
  $buttonBack3.on("click", function(){
    $modalArticle3.addClass("hide");
    $modalArticle2.removeClass("hide");
  })
  $buttonBack4.on("click", function(){
    $modalArticle4.addClass("hide");
    $modalArticle3.removeClass("hide");
  })
  $buttonBack5.on("click", function(){
    $modalArticle5.addClass("hide");
    $modalArticle4.removeClass("hide");
  })
  $buttonBack6.on("click", function(){
    $modalArticle6.addClass("hide");
    $modalArticle5.removeClass("hide");
  })
  // for ALBUM 2
  $photoClick1Album2.on("click", function(e){
    $modalArticle1Album2.removeClass("hide");
    $albumPageElementAlbum2.addClass("hide");
  });
  $modalCloseAlbum2.on("click", function(e){
    $modalArticle1Album2.addClass("hide");
    $albumPageElementAlbum2.removeClass("hide");
  });
  $photoClick2Album2.on("click", function(e){
    $modalArticle2.removeClass("hide");
    $albumPageElement.addClass("hide");
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
  $buttonBack4.on("click", function(){
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
