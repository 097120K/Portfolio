const sliderWrap = document.querySelector(".slider__wrap");
const sliderImg = sliderWrap.querySelector(".slider__img");
const slider = sliderWrap.querySelectorAll(".slider");

let currentIndex = 0;   //현재 보이는 이미지
let sliderCount = slider.length;     //이미지 개수
let sliderInterval = 3000;  //이미지 변경 간격

//슬라이드 효과
setInterval(() => {
    //트랜지션 설정
    slider[currentIndex].style.transition = "all, 1s";

    let nextIndex = (currentIndex + 1) % sliderCount;
    //전체 개수로 나누고 남은 나머지를 활용해 4(이미지 개수)를 못 넘게 함

    slider[currentIndex].style.opacity = "0"
    slider[nextIndex].style.opacity = "1";

    currentIndex = nextIndex;
    //currentIndex가 nextIndex의 값을 할당받음으로써 4를 못 넘게 함
}, sliderInterval);

const sliderWrap2 = document.querySelector(".slider__wrap.min");
const sliderImg2 = sliderWrap2.querySelector(".slider__img");
const slider2 = sliderWrap2.querySelectorAll(".slider");

let currentIndex2 = 0;   //현재 보이는 이미지
let sliderCount2 = slider2.length;     //이미지 개수
let sliderInterva2l = 3000;  //이미지 변경 간격

//슬라이드 효과
setInterval(() => {
    //트랜지션 설정
    slider2[currentIndex2].style.transition = "all, 1s";

    let nextIndex2 = (currentIndex + 1) % sliderCount2;
    //전체 개수로 나누고 남은 나머지를 활용해 4(이미지 개수)를 못 넘게 함

    slider2[currentIndex2].style.opacity = "0"
    slider2[nextIndex2].style.opacity = "1";

    currentIndex2 = nextIndex2;
    //currentIndex가 nextIndex의 값을 할당받음으로써 4를 못 넘게 함
}, sliderInterval);
