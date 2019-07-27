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
        // dots: false,
        // prevArrow: false,
        // nextArrow: false,
        autoplaySpeed: 3000
    });
});