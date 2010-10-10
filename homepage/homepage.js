steal.plugins("jquery")
     .resources("slider", "tabs")
     .plugins("tr/search_control")
     .then(function($) {

$(document).ready(function() {
  $("#slider").slider();
  $("#tabs").tabs();
});

});