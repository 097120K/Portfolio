const path = document.querySelector("#animated-svg path");
const totalLength = path.getTotalLength(); // 경로의 총 길이

// 초기 설정
path.style.strokeDasharray = totalLength;
path.style.strokeDashoffset = totalLength;

// 스크롤 이벤트 감지
window.addEventListener("scroll", () => {
    // 스크롤 비율 계산
    const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    // 스크롤 비율에 따라 애니메이션 업데이트
    const drawLength = totalLength * scrollPercentage;
    path.style.strokeDashoffset = totalLength - drawLength;
});