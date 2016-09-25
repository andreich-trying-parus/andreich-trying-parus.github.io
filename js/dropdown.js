var dropdown = $(".m-header");

// Onclick on a dropdown, toggle visibility
dropdown.find("div span.class").click(function(){
  dropdown.find("ul").hide();
  $(this).next().children().toggle();
//$('.humburger').toggleClass('open');
});

// Clic handler for dropdown
dropdown.find("ul li a").click(function(){
  // Close dropdown
  $(this).parents("ul").hide();
});

// Close all dropdown onclick on another element
$(document).bind('click', function(e){
  if (! $(e.target).parents().hasClass("dropdown")) $(".m-header dd ul").hide();
});
