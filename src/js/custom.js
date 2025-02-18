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
/* let scrollTop = 0;
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
); */

document.addEventListener("DOMContentLoaded", function () {
  const bar = document.querySelector(".bar-ing"); // 클래스 선택 최적화

  function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const per = Math.ceil((scrollTop / scrollHeight) * 100);
    bar.style.width = per + "%";
  }

  window.addEventListener("scroll", () => {
    requestAnimationFrame(updateProgressBar);
  });
});

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

/* myWork */
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const pagination = document.querySelector(".pagination");

  let currentIndex = 0;

  // 페이지네이션 버튼 생성
  slides.forEach((_, index) => {
      const btn = document.createElement("button");
      btn.addEventListener("click", () => {
          currentIndex = index;
          updateSlide();
      });
      pagination.appendChild(btn);
  });

  const pageButtons = document.querySelectorAll(".pagination button");

  function updateSlide() {
      slider.style.transform = `translateX(${-currentIndex * 100}%)`;
      pageButtons.forEach((btn, i) => {
          btn.classList.toggle("active", i === currentIndex);
      });
  }

  // 초기 상태 업데이트
  updateSlide();
});


/* header활성화 */
const buttons = document.querySelectorAll(".sectionBtn");
const sections = document.querySelectorAll(".section");

function handleScroll() {
  let currentSection = null;

  sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
      }
  });

  buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.section === currentSection);
  });
}

window.addEventListener("scroll", handleScroll);
