module("TR.SearchControl", { 
  setup: function() {
    $("form#search").tr_search_control();
  }
})

test("Autocomplete", function(){
  // Type into text box
  // Extra results should appear
  ok(false);
})

test("Submit", function(){
  // Clicking submit or hitting enter
  // Should submit the form
  ok(false);
})