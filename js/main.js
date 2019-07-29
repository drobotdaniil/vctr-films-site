//DOM Elements
const cardViewComing = document.querySelector(".card-view");
const listViewComing = document.querySelector(".list-view");
const cardViewPopular = document.querySelector(".popular-card");
const listViewPopular = document.querySelector(".popular-list");

//functions for sliders
function SlideHorizontalComing() {
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
function SlideVerticalComing() {
    const slider2 = document.querySelector('.slider-coming2');
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
function SlideVerticalPopular() {
    const slider2 = document.querySelector('.slider-popular');
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
function SlideHorizontalPopular() {
    const slider = document.querySelector('.slider-popular2');
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
//functions for getting data from json
function ListViewComingSoon() {
    $.getJSON("data.json", function (data) {
        let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';
        output += '<div class="content-list-view slider-coming2">';
        $.each(data, function (key, val) {
            let rank = val.rank || 0 || val.expectations_count || "0";
            output += '<div class="pop-item">';
            output += '<div class="pop-item__img">';
            output += '<img class="pop-img" src="' + val.poster + '" alt="' + val.title + '">';
            output += '</div>';
            output += '<div class="pop-item__rating">';
            output += '<p class="rating">' + rank + '</p>';
            if (val.rank === undefined) {
                output += '<img class="testing" src="img/gradeless.svg" alt="testing">';
            } else {
                output += '<img src="img/rating.png" alt="rating">';
            }
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
            output += '<p class="pop-count">' + rank + '</p>';
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
    }).then(SlideVerticalComing);
}
function CardViewComingSoon() {
    $.getJSON("data.json", function (data) {

        let output = '<div class="content-card-view slider-coming">';
        $.each(data, function (key, val) {
            let rank = val.rank || 0 || val.expectations_count || "0";
            output += '<div class="item">';
            output += '<h3 class="item__title">' + val.title + '</h3>';
            output += '<h3 class="item__year">' + val.year + '</h3>';
            output += '<div class="item__img">';
            if (val.type == "Movie") {
                output += '<img class="movie-type" src="img/movie-type.svg" alt="movie">';
            } else {
                output += '<img class="movie-type brightness" src="img/tv-show-type.svg" alt="tv-show">';
            }
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
            output += '<p class="count">' + rank + '</p>';
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

    }).then(SlideHorizontalComing);
}
function ListViewMostPopular() {
    $.getJSON("data.json", function (data) {
        let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';
        output += '<div class="content-list-view slider-popular">';
        $.each(data, function (key, val) {
            let rank = val.rank || 0 || val.expectations_count || "0";
            output += '<div class="pop-item">';
            output += '<div class="pop-item__img">';
            output += '<img class="pop-img" src="' + val.poster + '" alt="' + val.title + '">';
            output += '</div>';
            output += '<div class="pop-item__rating">';
            output += '<p class="rating">' + rank + '</p>';
            if (val.rank === undefined) {
                output += '<img class="testing" src="img/gradeless.svg" alt="testing">';
            } else {
                output += '<img src="img/rating.png" alt="rating">';
            }
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
            output += '<p class="pop-count">' + rank + '</p>';
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
    }).then(SlideVerticalPopular);
}
function CardViewMostPopular() {
    $.getJSON("data.json", function (data) {
        let output = '<div class="content-card-view slider-popular2">';
        $.each(data, function (key, val) {
            let rank = val.rank || 0 || val.expectations_count || "0";
            output += '<div class="item">';
            output += '<h3 class="item__title">' + val.title + '</h3>';
            output += '<h3 class="item__year">' + val.year + '</h3>';
            output += '<div class="item__img">';
            if (val.type == "Movie") {
                output += '<img class="movie-type" src="img/movie-type.svg" alt="movie">';
            } else {
                output += '<img class="movie-type brightness" src="img/tv-show-type.svg" alt="tv-show">';
            }
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
            output += '<p class="count">' + rank + '</p>';
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

    }).then(SlideHorizontalPopular);
}

//run
CardViewComingSoon();
ListViewMostPopular();

//events
listViewComing.addEventListener("click", (e) => {
    ListViewComingSoon();
    cardViewComing.classList.remove("active-view");
    listViewComing.classList.add("active-view");
});
cardViewComing.addEventListener("click", (e) => {
    CardViewComingSoon();
    cardViewComing.classList.add("active-view");
    listViewComing.classList.remove("active-view");
});
listViewPopular.addEventListener("click", (e) => {
    ListViewMostPopular();
    cardViewPopular.classList.remove("active-view");
    listViewPopular.classList.add("active-view");
});
cardViewPopular.addEventListener("click", (e) => {
    CardViewMostPopular();
    cardViewPopular.classList.add("active-view");
    listViewPopular.classList.remove("active-view");
});

