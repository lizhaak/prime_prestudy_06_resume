$(document).ready(function() {
  $('.revealButton').on('click', function () {
    $(".all").toggle();
    $("body").toggleClass('wood');
    if($(".revealButton").text() === "Reveal Résumé"){
      $(".revealButton").text("Hide Résumé");
    } else {
      $(".revealButton").text("Reveal Résumé");
    }  
  });
});