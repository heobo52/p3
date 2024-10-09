const slideContainer = document.querySelector('.my-slide');
const slides = document.querySelectorAll('.my-content');
const totalSlides = slides.length;
const slidesToShow = 2; // 한 번에 보여질 슬라이드 개수
const slideWidth = slideContainer.clientWidth / slidesToShow; // 슬라이드의 너비 설정
let currentSlide = 0;
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

// 슬라이드 숫자 표시
const slideCounter = document.createElement('div');
slideCounter.classList.add('slide_counter');
document.querySelector('.slide_total_container').appendChild(slideCounter);

const updateCounter = () => {
    const currentDisplay = Math.ceil((currentSlide + 1) / slidesToShow);
    const totalDisplay = Math.ceil(totalSlides / slidesToShow);
    slideCounter.textContent = `${currentDisplay}/${totalDisplay}`;
};

updateCounter();

// 드래그 시작
slideContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.pageX;
    slideContainer.style.transition = 'none';
});

// 드래그 중
slideContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const currentPosition = e.pageX;
    const distanceMoved = currentPosition - startPosition;
    currentTranslate = prevTranslate + distanceMoved;
    slideContainer.style.transform = `translateX(${currentTranslate}px)`;
});

// 드래그 종료
slideContainer.addEventListener('mouseup', () => {
    isDragging = false;
    const moveBy = Math.round(currentTranslate / slideWidth);
    currentSlide = Math.max(0, Math.min(totalSlides - slidesToShow, currentSlide - moveBy));
    prevTranslate = -(currentSlide * slideWidth);
    slideContainer.style.transition = 'transform 0.3s ease';
    slideContainer.style.transform = `translateX(${prevTranslate}px)`;
    updateCounter();
});

slideContainer.addEventListener('mouseleave', () => {
    if (isDragging) slideContainer.dispatchEvent(new Event('mouseup'));
});

slideContainer.addEventListener('touchstart', (e) => {
    startPosition = e.touches[0].clientX;
    isDragging = true;
    slideContainer.style.transition = 'none';
});

slideContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentPosition = e.touches[0].clientX;
    const distanceMoved = currentPosition - startPosition;
    currentTranslate = prevTranslate + distanceMoved;
    slideContainer.style.transform = `translateX(${currentTranslate}px)`;
});

slideContainer.addEventListener('touchend', () => {
    slideContainer.dispatchEvent(new Event('mouseup'));
});

