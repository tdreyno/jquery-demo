steal.plugins("jquery")
     .resources("validator", "lightbox")
     .plugins("tr/search_control")
     .then(function() {

$("form").validator();

$("form").submit(function() {
  $.lightbox();
});

});