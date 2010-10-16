steal.plugins("jquery/controller")
     .resources("autocomplete")
     .then(function($) {
       
$.Controller.extend("TR.SearchControl", { }, {
  init: function() {
    this.element.autocomplete();
  },
  
  "input:text change": function() {
    // Autocomplete lookup
  },
  
  "submit": function() {
    // Ajax form submit
  }
});

$(document).ready(function() {
  $("form#search").tr_search_control();
});

});