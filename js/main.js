$(document).ready(function () {
    $('.slickslider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        // autoplay: true,
        draggable: true,
        // dots: false,
        // prevArrow: false,
        // nextArrow: false,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 3000
    });
    $('.slickslider-popular').slick({
        slidesToShow: 2,
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

//slider
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

//change view
const cardView = document.querySelector(".card-view");
const listView = document.querySelector(".list-view");
const comingBody = document.querySelector(".coming-body");
const comingBodyCont = document.querySelector(".coming-body .container");
const item = document.querySelectorAll(".item");
const itemTitle = document.querySelectorAll(".item__title");
const itemYear = document.querySelectorAll(".item__year");
const movieImg = document.querySelectorAll(".movie-img");
const itemRating = document.querySelectorAll(".item__rating");
const itemDesc = document.querySelectorAll(".item-desc");
const itemActions = document.querySelectorAll(".item__actions");
const action = document.querySelectorAll(".action");
const actionTagP = document.querySelectorAll(".count")
const actionImg = document.querySelectorAll(".action img");
const actionSpan = document.querySelectorAll(".action span");



listView.addEventListener("click", (e) => {
    cardView.classList.remove("active-view");
    listView.classList.add("active-view");
    comingBody.style.paddingTop = "38px";
    comingBody.style.paddingTop = "38px";
    comingBodyCont.style.flexDirection = "column";
    comingBodyCont.style.width = "1140px";
    comingBodyCont.style.paddingLeft = "0px";
    comingBodyCont.style.paddingRight = "0px";
    comingBodyCont.style.whiteSpace = "normal";
    comingBodyCont.classList.remove("slider");
    comingBodyCont.classList.add("slickslider");
    // comingBodyCont.classList.remove("slick-initialized");
    // comingBodyCont.classList.remove("slick-slider");
    
    

    [].forEach.call(itemRating, function(el){
        el.classList.remove("visibility");
    });
    [].forEach.call(itemDesc, function(el){
        el.classList.remove("visibility");
    });
    [].forEach.call(item, function(el) {
        el.classList.remove("item");
        el.classList.add("pop-item");
    });
    [].forEach.call(itemTitle, function(el) {
        el.classList.remove("item__title");
        el.classList.add("pop-title");
        el.style.position="absolute";
        el.style.marginLeft="227px";
        el.style.marginTop="-70px";
        // el.style.order=5;
    });
    [].forEach.call(itemYear, function(el) {
        el.classList.remove("item__year");
        el.classList.add("pop-year");
        el.style.position="absolute";
        el.style.marginLeft="227px";
        el.style.marginTop="-52px";
        // el.style.order=5;
    });
    [].forEach.call(movieImg, function(el) {
        el.classList.remove("movie-img");
        el.classList.add("pop-img");
        
    });
    [].forEach.call(itemActions, function(el) {
        el.style.marginLeft= "-840px";
        
        el.style.paddingLeft="0px";
        el.style.paddingRight="0px";
        el.style.marginTop="105px";
        el.style.alignItems="center";
        
        
    });
    [].forEach.call(action, function(el) {
        el.style.flexDirection = "row";
        el.style.marginRight= "40px";
        
    });
    [].forEach.call(actionTagP, function(el) {
        el.style.marginBottom = "0px";
        el.classList.remove("count");
        el.classList.add("pop-count");
        
        
        
    });
    [].forEach.call(actionImg, function(el) {
        el.style.width="24px";
        el.style.height = "auto";
        
    });
    [].forEach.call(actionSpan, function(el) {
        el.classList.remove("visibility");
        
    });

    // $(".slickslider-popular").unslick();
    $(".slickslider").slick();

    
    

});
cardView.addEventListener("click", (e) => {
    listView.classList.remove("active-view");
    cardView.classList.add("active-view");
    comingBody.style.paddingTop = "16px";
    comingBody.style.paddingBottom = "16px";
    comingBodyCont.style.flexDirection = "row";
    comingBodyCont.style.width = "100%";
    comingBodyCont.style.paddingLeft = "40px";
    comingBodyCont.style.paddingRight = "20px";
    comingBodyCont.style.whiteSpace= "nowrap";
    comingBodyCont.classList.add("slider");
    comingBodyCont.classList.remove("slickslider");
    
    [].forEach.call(itemRating, function(el){
        el.classList.add("visibility");
    });
    [].forEach.call(itemDesc, function(el){
        el.classList.add("visibility");
    });
    [].forEach.call(item, function(el) {
        el.classList.add("item");
        el.classList.remove("pop-item");
    });
    [].forEach.call(itemTitle, function(el) {
        el.classList.add("item__title");
        el.classList.remove("pop-title");
        el.style.marginLeft="0px";
        el.style.position="static";
        el.style.marginTop="0";
    });
    [].forEach.call(itemYear, function(el) {
        el.classList.add("item__year");
        el.classList.remove("pop-year");
        el.style.position="static";
        el.style.marginLeft="0px";
        el.style.marginTop="0px";
    });
    [].forEach.call(movieImg, function(el) {
        el.classList.remove("pop-img");
        el.classList.add("movie-img");
        
    });
    [].forEach.call(itemActions, function(el) {
        el.style.marginLeft= "0";
        
        el.style.paddingLeft="9px";
        el.style.paddingRight="9px";
        el.style.marginTop="9px";
        el.style.alignItems="flex-end";
        
        
    });

    [].forEach.call(action, function(el) {
        el.style.flexDirection = "column";
        
        
    });

    [].forEach.call(actionTagP, function(el) {
        el.style.marginBottom = "14px";
        el.classList.add("count");
        el.classList.remove("pop-count");
        
    });
    [].forEach.call(actionImg, function(el) {
        el.style.width="20px";
        el.style.height = "20px";
        
    });
    console.log($().unslick);
    // $(".slickslider").unslick();
});
