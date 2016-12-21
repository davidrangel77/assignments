var $ = require("jquery");

$(function (){
  var $body = $("body");
  var $albumPageElement = $body.find("[data-js='albumPage1']");
  var $albumPageElementAlbum2 = $body.find("[data-js='albumPageAlbum2']");
  var $albumPageElementAlbum3 = $body.find("[data-js='albumPageAlbum3']");
  var $albumPageElementAlbum4 = $body.find("[data-js='albumPageAlbum4']");
  var $albumPageElementAlbum5 = $body.find("[data-js='albumPageAlbum5']");
  var $albumPageElementAlbum6 = $body.find("[data-js='albumPageAlbum6']");
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
  var $buttonForward1 = $body.find("[data-js='buttonForward1']");
  var $buttonForward2 = $body.find("[data-js='buttonForward2']");
  var $buttonForward3 = $body.find("[data-js='buttonForward3']");
  var $buttonForward4 = $body.find("[data-js='buttonForward4']");
  var $buttonForward5 = $body.find("[data-js='buttonForward5']");
  var $buttonForward6 = $body.find("[data-js='buttonForward6']");
  var $modalClose = $body.find("[data-js='modalClose']");
  var $modalContent = $body.find("[data-js='modal__content']");
  var $album1button = $body.find("[data-js='goToAlbum1']");
  var $album2button = $body.find("[data-js='goToAlbum2']");
  var $album3button = $body.find("[data-js='goToAlbum3']");
  var $album4button = $body.find("[data-js='goToAlbum4']");
  var $album5button = $body.find("[data-js='goToAlbum5']");
  var $album6button = $body.find("[data-js='goToAlbum6']");
  // Album Buttons for all album pages
  $album1button.on("click", function(){
    $albumPageElement.removeClass("hide");
    $albumPageElementAlbum2.addClass("hide");
    $albumPageElementAlbum3.addClass("hide");
    $albumPageElementAlbum4.addClass("hide");
    $albumPageElementAlbum5.addClass("hide");
    $albumPageElementAlbum6.addClass("hide");
  });
  $album2button.on("click", function(){
    $albumPageElement.addClass("hide");
    $albumPageElementAlbum2.removeClass("hide");
    $albumPageElementAlbum3.addClass("hide");
    $albumPageElementAlbum4.addClass("hide");
    $albumPageElementAlbum5.addClass("hide");
    $albumPageElementAlbum6.addClass("hide");
  });
  $album3button.on("click", function(){
    $albumPageElement.addClass("hide");
    $albumPageElementAlbum2.addClass("hide");
    $albumPageElementAlbum3.removeClass("hide");
    $albumPageElementAlbum4.addClass("hide");
    $albumPageElementAlbum5.addClass("hide");
    $albumPageElementAlbum6.addClass("hide");
  });
  $album4button.on("click", function(){
    $albumPageElement.addClass("hide");
    $albumPageElementAlbum2.addClass("hide");
    $albumPageElementAlbum3.addClass("hide");
    $albumPageElementAlbum4.removeClass("hide");
    $albumPageElementAlbum5.addClass("hide");
    $albumPageElementAlbum6.addClass("hide");
  });
  $album5button.on("click", function(){
    $albumPageElement.addClass("hide");
    $albumPageElementAlbum2.addClass("hide");
    $albumPageElementAlbum3.addClass("hide");
    $albumPageElementAlbum4.addClass("hide");
    $albumPageElementAlbum5.removeClass("hide");
    $albumPageElementAlbum6.addClass("hide");
  });
  $album6button.on("click", function(){
    $albumPageElement.addClass("hide");
    $albumPageElementAlbum2.addClass("hide");
    $albumPageElementAlbum3.addClass("hide");
    $albumPageElementAlbum4.addClass("hide");
    $albumPageElementAlbum5.addClass("hide");
    $albumPageElementAlbum6.removeClass("hide");
  });
  // NEED A LOOP HERE BUT I WAS TOO TIRED TO MAKE IT
  // Actually two loops, one for the $photoClick and one for the $albumPageElement
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
});
