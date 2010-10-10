//steal/js contact/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/clean',function(){
	steal.clean('contact/contact.html',{indent_size: 1, indent_char: '\t'});
});
