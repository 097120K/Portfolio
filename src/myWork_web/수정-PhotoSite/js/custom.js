// confirm("Hello! Thanks to visit My Page");

$(function(){
  $("header nav ul.menulist>li").hover(function(){
    $(this).children(".sublist").stop().slidDown();
  },function(){
    $(this).children(".sublist").stop().slidUp();
  });

  setInterval(function(){
    $("#banner ul").animate({
      top:"-700px"
    }, 1000, function(){
      $("#banner ul").append($("#banner ul li").eq(0));
      $("#banner ul").css("top",0);
    });
  },3000)
});
