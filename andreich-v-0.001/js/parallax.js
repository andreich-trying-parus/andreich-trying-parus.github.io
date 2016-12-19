$(window).scroll(function() {
  var st = $(this).scrollTop();
  $(".head-banner img").css({
    "transform" : "translate(0%, -" + st /10+ "%"
  });
});
