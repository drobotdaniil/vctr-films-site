//DOM Elements
const cardView = document.querySelector(".card-view");
const listView = document.querySelector(".list-view");

//functions for sliders
function SlideHorizontal() {
    const slider = document.querySelector('.slider-coming');
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
        // console.log(walk);
    });
}
function SlideVertical(){
    const slider2 = document.querySelector('.slider-popular2');
    const upArrow = document.querySelector(".up-arrow-pop");
    const downArrow = document.querySelector(".down-arrow-pop");
    let isDown2 = false;
    let startY;
    let scrollTop;
    
    slider2.addEventListener('mousedown', (e) => {
        isDown2 = true;
        slider2.classList.add('act');
        startY = e.pageY - slider2.offsetTop;
        scrollTop = slider2.scrollTop;
    });
    slider2.addEventListener('mouseleave', () => {
        isDown2 = false;
        slider2.classList.remove('act');
    });
    slider2.addEventListener('mouseup', () => {
        isDown2 = false;
        slider2.classList.remove('act');
    });
    slider2.addEventListener('mousemove', (e) => {
        if (!isDown2) return;
        e.preventDefault();
        const y = e.pageY - slider2.offsetTop;
        const walk2 = (y - startY) * 1.5; //scroll-fast
        slider2.scrollTop = scrollTop - walk2;
        // console.log(walk);
    });
    downArrow.addEventListener("mousedown", (e) => {
        slider2.scrollTop += 70;
    });
    upArrow.addEventListener("mousedown", (e) => {
        slider2.scrollTop -= 70;
    });
}
//get data from json file
$.getJSON("data.json", function (data) {
    let output = '<div class="container slider-coming slider-coming2">';
    $.each(data, function (key, val) {
        output += '<div class="item">';
        output += '<h3 class="item__title">' + val.title + '</h3>';
        output += '<h3 class="item__year">' + val.year + '</h3>';
        output += '<div class="item__img">';
        output += '<img class="movie-type" src="img/movie-type.svg" alt="movie">';
        output += '<img class="movie-gradeless" src="img/gradeless-2.svg" alt="gradeless">';
        output += '<img class="movie-img" src="' + val.poster + '" alt="' + val.title + '">';
        output += '</div>';
        output += '<div class="item__actions">';
        output += '<div class="action">';
        output += '<img src="img/share.svg" alt="share">';
        output += '</div>';
        output += '<div class="action">';
        output += '<p class="count">' + val.comments_count + '</p>';
        output += '<img src="img/comment.svg" alt="comment">';
        output += '</div>';
        output += '<div class="action">';
        output += '<p class="count">' + val.rank + '</p>';
        output += '<img src="img/gradeless.svg" alt="gradeless">';
        output += '</div>';
        output += '<div class="action">';
        output += '<p class="count">' + val.likes_count + '</p>';
        output += '<img src="img/heart.svg" alt="heart">';
        output += '</div>';
        output += '</div>';
        output += '</div>';
    });
    output += '</div>';
    $('.coming-body').html(output);

}).then(SlideHorizontal);

$.getJSON("data.json", function (data) {
    let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';
    output += '<div class="container slider-popular  slider-popular2">';
    $.each(data, function(key, val) {
        output += '<div class="pop-item">';
        output += '<div class="pop-item__img">';
        output += '<img class="pop-img" src="' + val.poster +  '" alt="' + val.title + '">';
        output += '</div>';
        output += '<div class="pop-item__rating">';
        output += '<p class="rating">' + val.rank + '</p>';
        output += '<img src="img/rating.png" alt="rating">';
        output += '</div>';
        output += '<div class="pop-item-desc">';
        output += '<h3 class="pop-title">' + val.title + '</h3>';
        output += '<h3 class="pop-year">' + val.year;
        output += '<span> Director: ' + val.director + ' | Writer: ' + val.writer + '</span>';
        output += '</h3>';
        output += '<p class="pop-desc">' + val.content + '</p>';
        output += '<div class="pop-actions">';
        output += '<div>';
        output += '<img src="img/share.svg" alt="share">';
        output += '</div>';
        output += '<div>';
        output += '<p class="pop-count">' + val.comments_count + '</p>';
        output += '<span>|</span>';
        output += '<img src="img/comment.svg" alt="comment">';
        output += '</div>';
        output += '<div>';
        output += '<p class="pop-count">' + val.rank + '</p>';
        output += '<span>|</span>';
        output += '<img src="img/gradeless.svg" alt="gradeless">';
        output += '</div>';
        output += '<div>';
        output += '<p class="pop-count">' + val.likes_count + '</p>';
        output += '<span>|</span>';
        output += '<img src="img/heart.svg" alt="heart">';
        output += '</div>';
        output += '<a class="btn-readmore" href="' + val.link + '">Read more</a>';
        output += '</div>';
        output += '</div>';
        output += '</div>';
    });
    output += "</div>";
    output += '<img class="down-arrow-pop" src="img/verticali-slider-arrows.svg">' 
    $(".popular-body").html(output);
}).then(SlideVertical);




// const slider2 = document.querySelector('.slider-coming2');
// const upArrow = document.querySelector(".up-arrow");
// const downArrow = document.querySelector(".down-arrow");
// let isDown2 = false;
// let startY;
// let scrollTop;

// slider2.addEventListener('mousedown', (e) => {
//     isDown2 = true;
//     slider2.classList.add('act');
//     startY = e.pageY - slider2.offsetTop;
//     scrollTop = slider2.scrollTop;
// });
// slider2.addEventListener('mouseleave', () => {
//     isDown2 = false;
//     slider2.classList.remove('act');
// });
// slider2.addEventListener('mouseup', () => {
//     isDown2 = false;
//     slider2.classList.remove('act');
// });
// slider2.addEventListener('mousemove', (e) => {
//     if (!isDown2) return;
//     e.preventDefault();
//     const y = e.pageY - slider2.offsetTop;
//     const walk2 = (y - startY) * 1.5; //scroll-fast
//     slider2.scrollTop = scrollTop - walk2;
//     // console.log(walk);
// });
// downArrow.addEventListener("mousedown", (e) => {
//     slider2.scrollTop += 70;
// });
// upArrow.addEventListener("mousedown", (e) => {
//     slider2.scrollTop -= 70;
// });
// // slider popular
// const slider3 = document.querySelector('.slider-popular');
// let isDown3 = false;
// let startX2;
// let scrollLeft2;

// slider3.addEventListener('mousedown', (e) => {
//     isDown3 = true;
//     slider3.classList.add('act');
//     startX2 = e.pageX - slider3.offsetLeft;
//     scrollLeft2 = slider3.scrollLeft;
// });
// slider3.addEventListener('mouseleave', () => {
//     isDown3 = false;
//     slider3.classList.remove('act');
// });
// slider3.addEventListener('mouseup', () => {
//     isDown3 = false;
//     slider3.classList.remove('act');
// });
// slider3.addEventListener('mousemove', (e) => {
//     if (!isDown3) return;
//     e.preventDefault();
//     const x = e.pageX - slider3.offsetLeft;
//     const walk = (x - startX2) * 1.5; //scroll-fast
//     slider3.scrollLeft = scrollLeft2 - walk;
//     // console.log(walk);
// });
// const slider4 = document.querySelector('.slider-popular2');
// let isDown4 = false;
// let startY2;
// let scrollTop2;
// const upArrowPop = document.querySelector(".up-arrow-pop");
// const downArrowPop = document.querySelector(".down-arrow-pop");

// slider4.addEventListener('mousedown', (e) => {
//     isDown4 = true;
//     slider4.classList.add('act');
//     startY2 = e.pageY - slider4.offsetTop;
//     scrollTop2 = slider4.scrollTop;
// });
// slider4.addEventListener('mouseleave', () => {
//     isDown4 = false;
//     slider4.classList.remove('act');
// });
// slider4.addEventListener('mouseup', () => {
//     isDown4 = false;
//     slider4.classList.remove('act');
// });
// slider4.addEventListener('mousemove', (e) => {
//     if (!isDown4) return;
//     e.preventDefault();
//     const y = e.pageY - slider4.offsetTop;
//     const walk3 = (y - startY2) * 1.5; //scroll-fast
//     slider4.scrollTop = scrollTop2 - walk3;
//     // console.log(walk);
// });
// downArrowPop.addEventListener("mousedown", (e) => {
//     slider4.scrollTop += 70;
// });
// upArrowPop.addEventListener("mousedown", (e) => {
//     slider4.scrollTop -= 70;
// });


// //change view for coming soon
// const cardView = document.querySelector(".card-view");
// const listView = document.querySelector(".list-view");
// const comingBody = document.querySelector(".coming-body");
// const comingBodyCont = document.querySelector(".coming-body .container");
// const item = document.querySelectorAll(".item");
// const itemTitle = document.querySelectorAll(".item__title");
// const itemYear = document.querySelectorAll(".item__year");
// const movieImg = document.querySelectorAll(".movie-img");
// const movieGradeless = document.querySelectorAll(".movie-gradeless");
// const movieType = document.querySelectorAll(".movie-type");

// const itemRating = document.querySelectorAll(".item__rating");
// const itemDesc = document.querySelectorAll(".item-desc");
// const itemActions = document.querySelectorAll(".item__actions");
// const action = document.querySelectorAll(".action");
// const actionTagP = document.querySelectorAll(".count")
// const actionImg = document.querySelectorAll(".action img");
// const actionSpan = document.querySelectorAll(".action span");
// const btnRead = document.querySelectorAll(".btn-read");




// listView.addEventListener("click", (e) => {
//     cardView.classList.remove("active-view");
//     listView.classList.add("active-view");
//     comingBody.style.paddingTop = "30px";
//     // comingBody.style.paddingTop = "38px";
//     comingBodyCont.style.flexDirection = "column";
//     comingBodyCont.style.width = "1140px";
//     comingBodyCont.style.height = "610px";
//     comingBodyCont.style.paddingLeft = "0px";
//     comingBodyCont.style.paddingRight = "0px";
//     comingBodyCont.style.whiteSpace = "normal";
//     comingBodyCont.classList.remove("slider");
//     comingBodyCont.classList.add("slider2");
//     upArrow.classList.remove("visibility");
//     downArrow.classList.remove("visibility");
//     [].forEach.call(itemRating, function(el){
//         el.classList.remove("visibility");
//     });
//     [].forEach.call(itemDesc, function(el){
//         el.classList.remove("visibility");
//     });
//     [].forEach.call(item, function(el) {
//         el.classList.remove("item");
//         el.classList.add("pop-item");
//         el.style.width="1080px";
//     });
//     [].forEach.call(itemTitle, function(el) {
//         el.classList.remove("item__title");
//         el.classList.add("pop-title");
//         el.style.position="absolute";
//         el.style.marginLeft="227px";
//         el.style.marginTop="-70px";
//     });
//     [].forEach.call(itemYear, function(el) {
//         el.classList.remove("item__year");
//         el.classList.add("pop-year");
//         el.style.position="absolute";
//         el.style.marginLeft="227px";
//         el.style.marginTop="-52px";
//     });
//     [].forEach.call(movieImg, function(el) {
//         el.classList.remove("movie-img");
//         el.classList.add("pop-img");
//     });
//     [].forEach.call(movieGradeless, function(el) {
//         el.style.display="none";

//     });
//     [].forEach.call(movieType, function(el) {
//         el.style.display="none";

//     });
//     [].forEach.call(itemActions, function(el) {
//         el.style.marginLeft= "-840px";
//         el.style.paddingLeft="0px";
//         el.style.paddingRight="0px";
//         el.style.marginTop="120px";
//         el.style.alignItems="center";
//     });
//     [].forEach.call(action, function(el) {
//         el.style.flexDirection = "row";
//         el.style.marginRight= "36px";
//     });
//     [].forEach.call(actionTagP, function(el) {
//         el.style.marginBottom = "0px";
//         el.classList.remove("count");
//         el.classList.add("pop-count");
//     });
//     [].forEach.call(actionImg, function(el) {
//         el.style.width="24px";
//         el.style.height = "auto";
//     });
//     [].forEach.call(actionSpan, function(el) {
//         el.classList.remove("visibility"); 
//     });
//     [].forEach.call(btnRead, function(el) {
//         el.classList.remove("visibility"); 
//     });

// });
// cardView.addEventListener("click", (e) => {
//     listView.classList.remove("active-view");
//     cardView.classList.add("active-view");
//     comingBody.style.paddingTop = "16px";
//     comingBody.style.paddingBottom = "16px";
//     comingBodyCont.style.flexDirection = "row";
//     comingBodyCont.style.width = "100%";
//     comingBodyCont.style.height = "auto";
//     comingBodyCont.style.paddingLeft = "40px";
//     comingBodyCont.style.paddingRight = "20px";
//     comingBodyCont.style.whiteSpace= "nowrap";
//     comingBodyCont.classList.add("slider");
//     upArrow.classList.add("visibility");
//     downArrow.classList.add("visibility");
//     [].forEach.call(itemRating, function(el){
//         el.classList.add("visibility");
//     });
//     [].forEach.call(itemDesc, function(el){
//         el.classList.add("visibility");
//     });
//     [].forEach.call(item, function(el) {
//         el.classList.add("item");
//         el.classList.remove("pop-item");
//         el.style.width="auto";
//     });
//     [].forEach.call(itemTitle, function(el) {
//         el.classList.add("item__title");
//         el.classList.remove("pop-title");
//         el.style.marginLeft="0px";
//         el.style.position="static";
//         el.style.marginTop="0";
//     });
//     [].forEach.call(itemYear, function(el) {
//         el.classList.add("item__year");
//         el.classList.remove("pop-year");
//         el.style.position="static";
//         el.style.marginLeft="0px";
//         el.style.marginTop="0px";
//     });
//     [].forEach.call(movieImg, function(el) {
//         el.classList.remove("pop-img");
//         el.classList.add("movie-img");
//     });
//     [].forEach.call(movieGradeless, function(el) {
//         el.style.display="block";

//     });
//     [].forEach.call(movieType, function(el) {
//         el.style.display="block";

//     });
//     [].forEach.call(itemActions, function(el) {
//         el.style.marginLeft= "0";
//         el.style.paddingLeft="9px";
//         el.style.paddingRight="9px";
//         el.style.marginTop="9px";
//         el.style.alignItems="flex-end";
//     });

//     [].forEach.call(action, function(el) {
//         el.style.flexDirection = "column";
//     });

//     [].forEach.call(actionTagP, function(el) {
//         el.style.marginBottom = "14px";
//         el.classList.add("count");
//         el.classList.remove("pop-count");
//     });
//     [].forEach.call(actionImg, function(el) {
//         el.style.width="20px";
//         el.style.height = "20px";
//     });
//     [].forEach.call(actionSpan, function(el) {
//         el.classList.add("visibility");        
//     });
//     [].forEach.call(btnRead, function(el) {
//         el.classList.add("visibility");        
//     });

// });

// //change view for most popular
// const cardViewPop = document.querySelector(".popular-card");
// const listViewPop = document.querySelector(".popular-list");
// const popBody = document.querySelector(".popular-body");
// const contPopBody = document.querySelector(".popular-body .container");
// const popItem = document.querySelectorAll(".pop-item");
// const popRating = document.querySelectorAll(".pop-item__rating");
// const popItemDesc = document.querySelectorAll(".pop-item-desc");
// const popDesc = document.querySelectorAll(".pop-desc");
// const btnReadMore = document.querySelectorAll(".btn-readmore");
// const popImg = document.querySelectorAll(".pop-img");
// const popItemImg = document.querySelectorAll(".pop-item__img");
// const popTitle = document.querySelectorAll(".pop-title");
// const popYear = document.querySelectorAll(".pop-year");
// const popYearSpan = document.querySelectorAll(".pop-year span");
// const popActionCount = document.querySelectorAll(".pop-count");
// const popAspan = document.querySelectorAll(".pop-actions a span");
// const popActionImg = document.querySelectorAll(".pop-actions a img");
// const popActionA = document.querySelectorAll(".pop-actions a");

// const popAction = document.querySelectorAll(".pop-actions");


// cardViewPop.addEventListener("click", (e) => {
//     listViewPop.classList.remove("active-view");
//     cardViewPop.classList.add("active-view");
//     popBody.style.paddingTop = "16px";
//     popBody.style.paddingBottom = "16px";
//     contPopBody.style.flexDirection="row";
//     contPopBody.style.height="auto";
//     contPopBody.style.width="100%";
//     contPopBody.style.paddingLeft="40px";
//     contPopBody.style.paddingRight="20px";
//     upArrowPop.classList.add("visibility");
//     downArrowPop.classList.add("visibility");


//     [].forEach.call(popItem, function(el){
//         el.style.marginBottom = "0px";
//         el.style.marginRight = "135px";
//     });
//     [].forEach.call(popItemImg, function(el){
//         el.style.position="absolute";
//     });
//     [].forEach.call(popImg, function(el){
//         el.classList.remove("pop-img");
//         el.classList.add("movie-img");
//     });
//     [].forEach.call(popTitle, function(el) {
//         el.classList.add("item__title");
//         el.classList.remove("pop-title");
//         el.style.color="#010b13";
//         // el.style.position="static";
//         // el.style.marginTop="0";
//     });
//     [].forEach.call(popYear, function(el) {
//         el.classList.add("item__year");
//         el.classList.remove("pop-year");
//         el.style.color="#010b13";
//         el.style.marginBottom="350px";

//     });
//     [].forEach.call(popYearSpan, function(el) {
//         el.style.display="none";      
//     });
//     [].forEach.call(popRating, function(el) {
//         el.style.display="none";      
//     });
//     [].forEach.call(popItem, function(el) {
//         el.style.width="220px";      
//     });
//     [].forEach.call(popItemDesc, function(el) {
//         el.style.width="220px";  
//         // el.style.position="absolute";  

//     });
//     [].forEach.call(popDesc, function(el) {
//         el.style.display="none";      
//     });
//     [].forEach.call(popActionCount, function(el) {
//         el.classList.remove("pop-count");     
//         el.classList.add("count");     
//     });
//     [].forEach.call(popAspan, function(el) {
//         el.style.display="none";    
//     });
//     [].forEach.call(popActionImg, function(el) {
//         el.style.width="20px";  
//         el.style.height="20px";    
//     });
//     [].forEach.call(popActionA, function(el) {
//         el.style.flexDirection = "column";    
//         el.style.marginRight = "28px";    
//     });
//     [].forEach.call(popAction, function(el) {
//         el.style.alignItems= "flex-end";  
//         el.style.paddingLeft="10px";
//         el.style.paddingRight="10px";
//     el.style.justifyContent= "space-between";
//     el.style.paddingTop= "5px";
//     });

//     [].forEach.call(btnReadMore, function(el) {
//         el.style.display="none";      
//     });
// });
// listViewPop.addEventListener("click", (e) => {
//     listViewPop.classList.add("active-view");
//     cardViewPop.classList.remove("active-view");
//     popBody.style.paddingTop = "35px";
//     popBody.style.paddingBottom = "0px";
//     contPopBody.style.flexDirection="column";
//     contPopBody.style.height="630px";
//     contPopBody.style.width="1140px";
//     contPopBody.style.paddingLeft="0px";
//     contPopBody.style.paddingRight="0px";
//     upArrowPop.classList.remove("visibility");
//     downArrowPop.classList.remove("visibility");
//     [].forEach.call(popItem, function(el){
//         el.style.marginBottom = "60px";
//         el.style.marginRight = "0px";
//     });
//     [].forEach.call(popItemImg, function(el){
//         el.style.position="static";
//     });
//     [].forEach.call(popImg, function(el){
//         el.classList.add("pop-img");
//         el.classList.remove("movie-img");
//     });
//     [].forEach.call(popTitle, function(el) {
//         el.classList.remove("item__title");
//         el.classList.add("pop-title");
//         el.style.color="#389ef2";
//         // el.style.position="static";
//         // el.style.marginTop="0";
//     });
//     [].forEach.call(popYear, function(el) {
//         el.classList.remove("item__year");
//         el.classList.add("pop-year");
//         el.style.marginBottom="15px";
//     });
//     [].forEach.call(popYearSpan, function(el) {
//         el.style.display="inline-block";         
//     });
//     [].forEach.call(popRating, function(el) {
//         el.style.display="block";         
//     });
//     [].forEach.call(popItem, function(el) {
//         el.style.width="auto";      
//     });
//     [].forEach.call(popItemDesc, function(el) {
//         el.style.width="840px";   
//         el.style.position="static";     
//     });
//     [].forEach.call(popDesc, function(el) {
//         el.style.display="block";     
//     });
//     [].forEach.call(popActionCount, function(el) {
//         el.classList.add("pop-count");     
//         el.classList.remove("count");     
//     });
//     [].forEach.call(popAspan, function(el) {
//         el.style.display="block";    
//     });
//     [].forEach.call(popActionImg, function(el) {
//         el.style.width="24px";  
//         el.style.height="auto";    
//     });
//     [].forEach.call(popActionA, function(el) {
//         el.style.flexDirection = "row";  
//         el.style.marginRight = "28px";   

//     });
//     [].forEach.call(popAction, function(el) {
//         el.style.alignItems= "center";  
//         el.style.paddingLeft="0px";
//         el.style.paddingRight="0px";
//     el.style.justifyContent= "space-between";
//     el.style.paddingTop= "0px";
//     });

//     [].forEach.call(btnReadMore, function(el) {
//         el.style.display="block";     
//     });
// });
