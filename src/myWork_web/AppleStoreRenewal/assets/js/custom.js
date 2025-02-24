/* <!-- Initialize Swiper --> */
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 1000,
    // 슬라이드가 자동으로 전환되기까지의 시간 간격
    desableOnInteraction: false,
    // arrow나 pagination이용 후 자동 재생을 비활성화 할지의 여부
  },
  speed: 1500,
  // 슬라이드가 자동으로 전환되는 속도를 설정
  loop: true,
  // 슬라이드가 무한 순환
  slidesPerView: "auto",
  // 슬라이드가 표시되는 갯수를 설정
  freemode: true,
  // 슬라이드가 자유롭게 스와이프 되도록 설정
  observer: true,
  observeParents: true,
  effect: "flip",
});

var swiper = new Swiper(".item-mySwiper-container", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 100,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
  },
  autoplay: {
    // 자동 슬라이드 설정 , 비 활성화 시 false
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  centeredSlides: true, // 활성 슬라이드 중심 정렬
});

var swiper = new Swiper(".item-container-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: false,
  pagination: {
    el: ".item-container-swiper .swiper-pagination",
    clickable: true,
  },
});


$(function () {
  /* HEADER jQuery */
  $(".mainMenu_list a").click(function () {
    $(this)
      .next()
      .slideToggle(800)
      .parent()
      .siblings()
      .find(".subMenu")
      .slideUp(700);
  });

  $(".account-arrow").click(function () {
    $("#account_name_text_field").css({
      "border-radius": "10px 10px 0 0",
      "margin-right": "50px",
    });
    $(".passwordBox").slideDown();
    $(this).css("display", "none");
  });
  $("#globalnav").mouseleave(function () {
    $(".subMenu").fadeOut(700);
  });
  // $('.hamburger').click(function(){
  //   $('li.toggle_Menu').slideToggle()
  // });
  $(".hamburger a:nth-of-type(1)").click(function () {
    $(this).fadeOut(200);
    $(".hamburger a:nth-of-type(2)").fadeIn(600);
    $("li.toggle_Menu").fadeIn(1000);
  });
  $(".hamburger a:nth-of-type(2)").click(function () {
    $(this).fadeOut(200);
    $(".hamburger a:nth-of-type(1)").fadeIn(600);
    $("li.toggle_Menu").fadeOut(1000);
  });

  // btn to top
  let btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
      btn.style.opacity = ".5s";
    } else {
      btn.removeClass("show");
      btn.style.opacity = ".5s";
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  /* FOOTER jQuery */
  $('.listitem>a').click(function(){
    $(this).next($('.listitem em')).slideToggle(600)
  });
});
