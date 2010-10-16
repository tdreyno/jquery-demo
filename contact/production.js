steal.packs('0', function(){
steal('//contact/resources/validator.js'
,'//contact/resources/lightbox.js'
,'//contact/contact.js');
steal.end();
/* contact/resources/validator.js */
$.fn.validator=function(){};
;steal.end();
/* contact/resources/lightbox.js */
$.fn.lightbox=function(){};
;steal.end();
/* contact/contact.js */
steal.plugins("jquery").resources("validator","lightbox").plugins("tr/search_control").then(function(){$("form").validator();$("form").submit(function(){$.lightbox()})});

});