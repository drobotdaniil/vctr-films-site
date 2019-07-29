//DOM Elements
const cardView = document.querySelector(".card-view");
const listView = document.querySelector(".list-view");
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
function ListViewComingSoon(){
    $.getJSON("data.json", function (data) {
        let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';
        output += '<div class="test slider-popular  slider-popular2">';
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
        $(".coming-body").html(output);
    }).then(SlideVertical);
}
function CardViewComingSoon(){
    $.getJSON("data.json", function (data) {
                    let output = '<div class="test2 slider-coming">';
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
}
function ListViewMostPopular(){
    $.getJSON("data.json", function (data) {
        let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';
        output += '<div class="test slider-popular  slider-popular2">';
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
}
function CardViewMostPopular(){
    $.getJSON("data.json", function (data) {
                    let output = '<div class="test2 slider-coming">';
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
                    $('.popular-body').html(output);
                
                }).then(SlideHorizontal);
}
CardViewComingSoon();
ListViewMostPopular();
listView.addEventListener("click", (e) => {
    ListViewComingSoon();
    cardView.classList.remove("active-view");
    listView.classList.add("active-view");
});
cardView.addEventListener("click", (e) => {
    CardViewComingSoon();
    cardView.classList.add("active-view");
    listView.classList.remove("active-view");
});
// if(cardView.classList.contains("active-view")){
//     $.getJSON("data.json", function (data) {
//             let output = '<div class="test2 slider-coming">';
//             $.each(data, function (key, val) {
//                 output += '<div class="item">';
//                 output += '<h3 class="item__title">' + val.title + '</h3>';
//                 output += '<h3 class="item__year">' + val.year + '</h3>';
//                 output += '<div class="item__img">';
//                 output += '<img class="movie-type" src="img/movie-type.svg" alt="movie">';
//                 output += '<img class="movie-gradeless" src="img/gradeless-2.svg" alt="gradeless">';
//                 output += '<img class="movie-img" src="' + val.poster + '" alt="' + val.title + '">';
//                 output += '</div>';
//                 output += '<div class="item__actions">';
//                 output += '<div class="action">';
//                 output += '<img src="img/share.svg" alt="share">';
//                 output += '</div>';
//                 output += '<div class="action">';
//                 output += '<p class="count">' + val.comments_count + '</p>';
//                 output += '<img src="img/comment.svg" alt="comment">';
//                 output += '</div>';
//                 output += '<div class="action">';
//                 output += '<p class="count">' + val.rank + '</p>';
//                 output += '<img src="img/gradeless.svg" alt="gradeless">';
//                 output += '</div>';
//                 output += '<div class="action">';
//                 output += '<p class="count">' + val.likes_count + '</p>';
//                 output += '<img src="img/heart.svg" alt="heart">';
//                 output += '</div>';
//                 output += '</div>';
//                 output += '</div>';
//             });
//             output += '</div>';
//             $('.coming-body').html(output);
        
//         }).then(SlideHorizontal);
// } else {
//     $.getJSON("data.json", function (data) {
//             let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';
//             output += '<div class="test slider-popular  slider-popular2">';
//             $.each(data, function(key, val) {
//                 output += '<div class="pop-item">';
//                 output += '<div class="pop-item__img">';
//                 output += '<img class="pop-img" src="' + val.poster +  '" alt="' + val.title + '">';
//                 output += '</div>';
//                 output += '<div class="pop-item__rating">';
//                 output += '<p class="rating">' + val.rank + '</p>';
//                 output += '<img src="img/rating.png" alt="rating">';
//                 output += '</div>';
//                 output += '<div class="pop-item-desc">';
//                 output += '<h3 class="pop-title">' + val.title + '</h3>';
//                 output += '<h3 class="pop-year">' + val.year;
//                 output += '<span> Director: ' + val.director + ' | Writer: ' + val.writer + '</span>';
//                 output += '</h3>';
//                 output += '<p class="pop-desc">' + val.content + '</p>';
//                 output += '<div class="pop-actions">';
//                 output += '<div>';
//                 output += '<img src="img/share.svg" alt="share">';
//                 output += '</div>';
//                 output += '<div>';
//                 output += '<p class="pop-count">' + val.comments_count + '</p>';
//                 output += '<span>|</span>';
//                 output += '<img src="img/comment.svg" alt="comment">';
//                 output += '</div>';
//                 output += '<div>';
//                 output += '<p class="pop-count">' + val.rank + '</p>';
//                 output += '<span>|</span>';
//                 output += '<img src="img/gradeless.svg" alt="gradeless">';
//                 output += '</div>';
//                 output += '<div>';
//                 output += '<p class="pop-count">' + val.likes_count + '</p>';
//                 output += '<span>|</span>';
//                 output += '<img src="img/heart.svg" alt="heart">';
//                 output += '</div>';
//                 output += '<a class="btn-readmore" href="' + val.link + '">Read more</a>';
//                 output += '</div>';
//                 output += '</div>';
//                 output += '</div>';
//             });
//             output += "</div>";
//             output += '<img class="down-arrow-pop" src="img/verticali-slider-arrows.svg">' 
//             $(".coming-body").html(output);
//         }).then(SlideVertical);
// }
// //get data from json file
// $.getJSON("data.json", function (data) {
//     let output = '<div class="container slider-coming slider-coming2">';
//     $.each(data, function (key, val) {
//         output += '<div class="item">';
//         output += '<h3 class="item__title">' + val.title + '</h3>';
//         output += '<h3 class="item__year">' + val.year + '</h3>';
//         output += '<div class="item__img">';
//         output += '<img class="movie-type" src="img/movie-type.svg" alt="movie">';
//         output += '<img class="movie-gradeless" src="img/gradeless-2.svg" alt="gradeless">';
//         output += '<img class="movie-img" src="' + val.poster + '" alt="' + val.title + '">';
//         output += '</div>';
//         output += '<div class="item__actions">';
//         output += '<div class="action">';
//         output += '<img src="img/share.svg" alt="share">';
//         output += '</div>';
//         output += '<div class="action">';
//         output += '<p class="count">' + val.comments_count + '</p>';
//         output += '<img src="img/comment.svg" alt="comment">';
//         output += '</div>';
//         output += '<div class="action">';
//         output += '<p class="count">' + val.rank + '</p>';
//         output += '<img src="img/gradeless.svg" alt="gradeless">';
//         output += '</div>';
//         output += '<div class="action">';
//         output += '<p class="count">' + val.likes_count + '</p>';
//         output += '<img src="img/heart.svg" alt="heart">';
//         output += '</div>';
//         output += '</div>';
//         output += '</div>';
//     });
//     output += '</div>';
//     $('.coming-body').html(output);

// }).then(SlideHorizontal);

// $.getJSON("data.json", function (data) {
//     let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';
//     output += '<div class="container slider-popular  slider-popular2">';
//     $.each(data, function(key, val) {
//         output += '<div class="pop-item">';
//         output += '<div class="pop-item__img">';
//         output += '<img class="pop-img" src="' + val.poster +  '" alt="' + val.title + '">';
//         output += '</div>';
//         output += '<div class="pop-item__rating">';
//         output += '<p class="rating">' + val.rank + '</p>';
//         output += '<img src="img/rating.png" alt="rating">';
//         output += '</div>';
//         output += '<div class="pop-item-desc">';
//         output += '<h3 class="pop-title">' + val.title + '</h3>';
//         output += '<h3 class="pop-year">' + val.year;
//         output += '<span> Director: ' + val.director + ' | Writer: ' + val.writer + '</span>';
//         output += '</h3>';
//         output += '<p class="pop-desc">' + val.content + '</p>';
//         output += '<div class="pop-actions">';
//         output += '<div>';
//         output += '<img src="img/share.svg" alt="share">';
//         output += '</div>';
//         output += '<div>';
//         output += '<p class="pop-count">' + val.comments_count + '</p>';
//         output += '<span>|</span>';
//         output += '<img src="img/comment.svg" alt="comment">';
//         output += '</div>';
//         output += '<div>';
//         output += '<p class="pop-count">' + val.rank + '</p>';
//         output += '<span>|</span>';
//         output += '<img src="img/gradeless.svg" alt="gradeless">';
//         output += '</div>';
//         output += '<div>';
//         output += '<p class="pop-count">' + val.likes_count + '</p>';
//         output += '<span>|</span>';
//         output += '<img src="img/heart.svg" alt="heart">';
//         output += '</div>';
//         output += '<a class="btn-readmore" href="' + val.link + '">Read more</a>';
//         output += '</div>';
//         output += '</div>';
//         output += '</div>';
//     });
//     output += "</div>";
//     output += '<img class="down-arrow-pop" src="img/verticali-slider-arrows.svg">' 
//     $(".popular-body").html(output);
// }).then(SlideVertical);




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
