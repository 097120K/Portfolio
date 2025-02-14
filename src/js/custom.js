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

/* myDesign */
const content1 = document.querySelector('.myDesign_content1')
const content2 = document.querySelector('.myDesign_content2')
const content3 = document.querySelector('.myDesign_content3')
const content4 = document.querySelector('.myDesign_content4')
const content5 = document.querySelector('.myDesign_content5')
const content6 = document.querySelector('.myDesign_content6')

const modal1 = document.querySelector('.content1')
const modal2 = document.querySelector('.content2')
const modal3 = document.querySelector('.content3')
const modal4 = document.querySelector('.content4')
const modal5 = document.querySelector('.content5')
const modal6 = document.querySelector('.content6')

content1.addEventListener('click',()=>{
  modal1.classList.toggle('show');
})
modal1.addEventListener('click',()=>{
  modal1.classList.toggle('show');
})
content2.addEventListener('click',()=>{
  modal2.classList.toggle('show');
})
modal2.addEventListener('click',()=>{
  modal2.classList.toggle('show');
})
content3.addEventListener('click',()=>{
  modal3.classList.toggle('show');
})
modal3.addEventListener('click',()=>{
  modal3.classList.toggle('show');
})
content4.addEventListener('click',()=>{
  modal4.classList.toggle('show');
})
modal4.addEventListener('click',()=>{
  modal4.classList.toggle('show');
})
content5.addEventListener('click',()=>{
  modal5.classList.toggle('show');
})
modal5.addEventListener('click',()=>{
  modal5.classList.toggle('show');
})
content6.addEventListener('click',()=>{
  modal6.classList.toggle('show');
})
modal6.addEventListener('click',()=>{
  modal6.classList.toggle('show');
})