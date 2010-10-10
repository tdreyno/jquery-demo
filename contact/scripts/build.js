//steal/js contact/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('contact/contact.html',{to: 'contact'});
});
