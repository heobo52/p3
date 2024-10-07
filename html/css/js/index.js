const text = "Challenge Becomes Opportunity"; // 타이핑할 문구
let index = 0;
let speed = 150; // 글자 타이핑 속도 (밀리초 단위)

function typeWriter() {
  if (index < text.length) {
    document.getElementById("text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();


document.addEventListener('DOMContentLoaded', function() {
  const fixedTextContents = document.querySelectorAll('.fixed_text_content');
  const scrollContents = document.querySelectorAll('.scroll_content');

  // 클릭 시 해당하는 콘텐츠를 활성화
  fixedTextContents.forEach(item => {
      item.addEventListener('click', function() {
          const target = this.getAttribute('data-target');

          // 모든 콘텐츠 비활성화 (숨김)
          scrollContents.forEach(content => {
              content.classList.remove('active');
          });

          // 클릭된 콘텐츠만 활성화
          const targetContent = document.querySelector(`.${target}`);
          targetContent.classList.add('active');
      });
  });

  // 페이지가 로드될 때 첫 번째 항목(punto project)이 자동으로 클릭된 것처럼 보이기
  const firstContent = document.querySelector('.fixed_text_content[data-target="punto_content"]');
  if (firstContent) {
      firstContent.click(); // 첫 번째 항목 클릭 시뮬레이션
  }
});












