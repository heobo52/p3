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
