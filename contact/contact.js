steal.plugins("jquery")
     .resources("validator", "lightbox")
     .then(function() {

$("form").validator();

$("form").submit(function() {
  $.lightbox();
});

});