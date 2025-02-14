/* main 페이지 타이핑 글자 */
const txtWrap = document.querySelector('.text');
const txtString = "Hello.  I'm MinJ_K."; /*  \n */
const txtSpeed = 100;
const txtDelay = 2500;
let txtIndex = 0;
let typeCotrol = true;

function typingEvent(){
  if(typeCotrol === true){
    let txtNow = txtString[txtIndex++];
    txtWrap.innerHTML += txtNow === "\n" ? "<br>": txtNow;
    if(txtIndex >= txtString.length){
      txtIndex = 0;
      typeCotrol = false;
    }
  }else{
    clearInterval(setTyping);
    setTimeout(function(){
      txtWrap.innerHTML = '';
      typeCotrol = true;
      setTyping = setInterval(typingEvent, txtSpeed);
    }, txtDelay)
  }

}

let setTyping = setInterval(typingEvent, txtSpeed);

/* 상단 bar-ing */
let scrollTop = 0;
let bar;

window.onload = function () {
  bar = document.getElementsByClassName("bar-ing")[0];
};

window.addEventListener(
  "scroll",
  () => {
    scrollTop = document.documentElement.scrollTop; // y축 방향으로 얼만큼 스크롤했는지!
    let per = Math.ceil(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    bar.style.width = per+"%";
  },
  false
);
/* aboutMe h3.title click */
const title_div = document.querySelector('.title_div');
const h3El = document.querySelector('h3.title');
const subTitle = document.querySelector('p.subTitle');
const aboutMe_sub = document.querySelector('.mine_wrap');
const aboutMe_skills = document.querySelector('.aboutMe_skills');

/* aboutMe div click */
title_div.addEventListener('click',()=>{
  title_div.classList.add('hide');
  h3El.classList.add('change');
  subTitle.classList.toggle('show');
  aboutMe_sub.classList.toggle('show');
  aboutMe_skills.classList.toggle('show');
})
h3El.addEventListener('click',()=>{
  title_div.classList.toggle('hide');
  h3El.classList.toggle('change');
  subTitle.classList.toggle('show');
  aboutMe_sub.classList.toggle('show');
  aboutMe_skills.classList.toggle('show');
})

/* aboutMe btn click */
/* const more_btn = document.querySelector('.btn__more')
const another_btn = document.querySelector('.btn__another')
const more = document.querySelector('.more')
const another = document.querySelector('.another')

more_btn.addEventListener('click',()=>{
  more.classList.toggle('show');
})
another_btn.addEventListener('click',()=>{
  another.classList.toggle('show');
}) */

/* swiper */
var swiper = new Swiper(".myWorkSwiper", {
  direction: "vertical",
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

var swiper1 = new Swiper(".myDesignSwiper", {
  direction: "vertical",
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});