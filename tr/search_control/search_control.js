steal.plugins("jquery/controller")
     .resources("autocomplete")
     .then(function($) {
       
$.Controller.extend("TR.SearchControl", {
  onDocument: true
},
{
  ready: function() {
    $("#search").autocomplete();
  },
  
  onSearch: function() {},
  onSubmit: function() {}
});

});