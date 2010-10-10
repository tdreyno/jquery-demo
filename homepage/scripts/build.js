//steal/js homepage/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('homepage/homepage.html',{to: 'homepage'});
});
