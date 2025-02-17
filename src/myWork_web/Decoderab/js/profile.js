$(function(){
  $("#profileBox p.name").click(function(){
    $(this).css("display","none");
    $(".bgBox").fadeIn(1000);
    $(".contents .hamburger").slideDown(1200);
    return false;
  });
  $("#profileBox .contents .hamburger").click(function(){
    $("#profileBox .contents .just_name").css("display","block");
    $("#profileBox").css("height","1100px");
    $("#profileBox .contents #p_nav").slideToggle(800);
    $("#profileBox .bgBox").hide();
    $("#profileBox .contents .back").css("display","block");
    $("#profileBox .contents p.name").css({
      "width":"300px",
      "height":"30px",
      "margin":"45px 0 20px 110px",
      "text-align":"left",
      "font-size":"25px",
      "line-height":"30px"
    });
    return false;
  });
  $("#profileBox .contents .back").click(function(){
    $("#profileBox .contents #p_nav").slideUp(600);
    $("#profileBox .contents .back").hide();
    $("#profileBox .contents .just_name").hide();
    $("#profileBox").css("height","800px");
    $("#profileBox .bgBox").fadeIn(1500);
    $("#profileBox .contents p.name").css("margin-left","50px")
    return false;
  });
  $("#profileBox .bgBox .return_name").click(function(){
    $(".bgBox").fadeOut(1000);
    $(".contents .hamburger").slideUp(1200);
    $("#profileBox p.name").fadeIn(1500);
    return false;
  });
});