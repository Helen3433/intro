document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表单刷新页面
    alert('感谢您的留言，我们会尽快与您联系！');
});
let currentIndex = 0; // 全局变量来存储当前索引

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.feature');
    const slideWidth = slides[0].offsetWidth + 20; // 单张幻灯片宽度 + 边距
    const totalSlides = slides.length;

    // 更新当前索引
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // 设置滑动效果
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.feature');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function moveSlide(direction) {
        const slideWidth = slider.clientWidth / totalSlides;
        const newCurrentIndex = (currentIndex + direction + totalSlides) % totalSlides; // 循环索引
        slider.style.transform = `translateX(-${newCurrentIndex * slideWidth}px)`;
        currentIndex = newCurrentIndex; // 更新当前索引
    }

    document.querySelector('.nav-btn.prev').addEventListener('click', function() {
        moveSlide(-1);
    });

    document.querySelector('.nav-btn.next').addEventListener('click', function() {
        moveSlide(1);
    });
});
document.querySelector('.prev').addEventListener('click', function() {
    moveSlide(-1);  // 点击左按钮向左移动
});

document.querySelector('.next').addEventListener('click', function() {
    moveSlide(1);  // 点击右按钮向右移动
});
