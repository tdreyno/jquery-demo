//steal/js homepage/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/clean',function(){
	steal.clean('homepage/homepage.html',{indent_size: 1, indent_char: '\t'});
});
