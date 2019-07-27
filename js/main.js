$(document).ready(function () {
    $('.slickslider-coming').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        // autoplay: true,
        draggable: true,
        // dots: false,
        prevArrow: false,
        nextArrow: false,
        autoplaySpeed: 3000
    });
    $('.slickslider-popular').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        // autoplay: true,
        vertical: true,
        verticalSwiping: true,
        draggable: true,
        infinite: false,
        // dots: false,
        // prevArrow: false,
        // nextArrow: false,
        autoplaySpeed: 3000
    });
});
const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('act');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('act');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('act');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});