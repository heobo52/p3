const text = "Challenge Becomes Opportunity"; 
let index = 0;
let speed = 150; 

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


  fixedTextContents.forEach(item => {
      item.addEventListener('click', function() {
          const target = this.getAttribute('data-target');


          scrollContents.forEach(content => {
              content.classList.remove('active');
          });


          const targetContent = document.querySelector(`.${target}`);
          targetContent.classList.add('active');
      });
  });


  const firstContent = document.querySelector('.fixed_text_content[data-target="punto_content"]');
  if (firstContent) {
      firstContent.click(); 
  }
});

// const icons = document.querySelectorAll('.icon');

// icons.forEach(icon => {
//     icon.addEventListener('mouseover', function() {
//         for (let i = 0; i < 5; i++) {
//             const bubble = document.createElement('div');
//             bubble.classList.add('bubble');
//             bubble.style.left = `${Math.random() * 40}px`;
//             bubble.style.left = `${Math.random() * 60}px`;
//             bubble.style.top = `${Math.random() * 100}px`;
//             this.appendChild(bubble);
//             setTimeout(() => bubble.remove(), 1000);
//         }
//     });
// });












