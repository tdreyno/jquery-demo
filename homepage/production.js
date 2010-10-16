steal.packs('0', function(){
steal('//homepage/resources/slider.js'
,'//homepage/resources/tabs.js'
,'//homepage/homepage.js');
steal.end();
/* homepage/resources/slider.js */
$.fn.slider=function(){};
;steal.end();
/* homepage/resources/tabs.js */
$.fn.tabs=function(){};
;steal.end();
/* homepage/homepage.js */
steal.plugins("jquery").resources("slider","tabs").plugins("tr/search_control").then(function(a){a(document).ready(function(){a("#slider").slider();a("#tabs").tabs()})});

});