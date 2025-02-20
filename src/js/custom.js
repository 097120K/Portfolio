/* header */


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


/* bar-ing */
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
const aboutMe = document.querySelector('#aboutMe');
const aboutMe_sub = document.querySelector('.mine_wrap');
const aboutMe_skills = document.querySelector('.aboutMe_skills');
const aboutMe_container = document.querySelector('.aboutMe_container');

/* aboutMe div click */
title_div.addEventListener('click',()=>{
  title_div.classList.add('hide');
  h3El.classList.add('change');
  subTitle.classList.toggle('show');
  aboutMe_sub.classList.toggle('show');
  aboutMe_skills.classList.toggle('show');
  aboutMe.classList.toggle('padding');
})
h3El.addEventListener('click',()=>{
  title_div.classList.toggle('hide');
  h3El.classList.toggle('change');
  subTitle.classList.toggle('show');
  aboutMe_sub.classList.toggle('show');
  aboutMe_skills.classList.toggle('show');
  aboutMe.classList.toggle('padding');
})

/* myWork */
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const pagination = document.querySelector(".pagination");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

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

  // 이전 버튼 클릭 이벤트
  prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      updateSlide();
  });

  // 다음 버튼 클릭 이벤트
  nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateSlide();
  });

  // 초기 상태 업데이트
  updateSlide();
});

const hamburger = document.querySelector('.hamburger_icon');
const hamMenu = document.querySelector('.hamburger');
const xBox = document.querySelector('.xBox')
const hamLiEls = document.querySelectorAll('.hamburger .clickMenu ul li')

hamburger.addEventListener("click",()=>{
  hamMenu.classList.toggle("show")
})
xBox.addEventListener("click",()=>{
  hamMenu.classList.toggle("show")
})
hamLiEls.forEach((hamLiEl)=>{
  hamLiEl.addEventListener("click", ()=>{
    hamMenu.classList.remove("show")
  });
});
