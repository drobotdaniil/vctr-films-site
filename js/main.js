//DOM Elements
const cardViewComing = document.querySelector(".card-view");
const listViewComing = document.querySelector(".list-view");
const cardViewPopular = document.querySelector(".popular-card");
const listViewPopular = document.querySelector(".popular-list");
const playerPopular = document.querySelector(".playerPopular");
const playerComing = document.querySelector(".playerComing");
const allComing = document.querySelector(".all-coming");
const movieComing = document.querySelector(".movie-coming");
const tvShowComing = document.querySelector(".tvshow-coming");
const allPopular = document.querySelector(".all");
const moviePopular = document.querySelector(".movie");
const tvShowPopular = document.querySelector(".tv-show");

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
function SlideVerticalPopularTest() {
    const slider2 = document.querySelector('.slider-popularTest');
    const upArrow = document.querySelector(".popular-body .up-arrow-pop");
    const downArrow = document.querySelector(".popular-body .down-arrow-pop");
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
            output += '<button><img src="img/play-button.svg" alt="play"></button>';
            output += '<img class="pop-img" src="' + val.poster + '" alt="' + val.title + '">';
            output += '</div>';
            output += '<div class="pop-item__rating">';
            output += '<p class="rating">' + rank + '</p>';
            if (val.rank === undefined) {

                output += '<p class="rating silver">' + rank + '</p>';
                output += '<img class="testing" src="img/gradeless.svg" alt="testing">';
            } else {
                output += '<img src="img/rating.png" alt="rating">';
                output += '<p class="rating">' + rank + '</p>';
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
        const btnPlay = document.querySelectorAll(".pop-item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerComing);
        });
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
            output += '<button><img src="img/play-button.svg" alt="play"></button>';
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
        const btnPlay = document.querySelectorAll(".item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerComing);
        });
    }).then(SlideHorizontalComing);
}
function ListViewMostPopular() {
    $.getJSON("data.json", function (data) {

        let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';

        output += '<div class="content-list-view slider-popularTest">';
        $.each(data, function (key, val) {
            let rank = val.rank || 0 || val.expectations_count || "0";
            output += '<div class="pop-item">';
            output += '<div class="pop-item__img">';
            output += '<button><img src="img/play-button.svg" alt="play"></button>';
            output += '<img class="pop-img" src="' + val.poster + '" alt="' + val.title + '">';
            output += '</div>';
            output += '<div class="pop-item__rating">';

            if (val.rank === undefined) {

                output += '<p class="rating silver">' + rank + '</p>';
                output += '<img class="testing" src="img/gradeless.svg" alt="testing">';
            } else {
                output += '<img src="img/rating.png" alt="rating">';
                output += '<p class="rating">' + rank + '</p>';
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
        const btnPlay = document.querySelectorAll(".pop-item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerPopular);
        });
    }).then(SlideVerticalPopularTest);
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
            output += '<button><img src="img/play-button.svg" alt="play"></button>';
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
        const btnPlay = document.querySelectorAll(".item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerPopular);
        });
    }).then(SlideHorizontalPopular);
}

//player
function createPlayerPopular() {
    playerPopular.innerHTML = '<span class="closeBtn">&times;</span> <iframe width="100%" height="500" src="https://www.youtube.com/embed/7TavVZMewpY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    const closeBtn = document.querySelector(".playerPopular .closeBtn");
    closeBtn.addEventListener("click", closePlayerPopular);
}
function createPlayerComing() {
    playerComing.innerHTML = '<span class="closeBtn">&times;</span> <iframe width="100%" height="500" src="https://www.youtube.com/embed/7TavVZMewpY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    const closeBtn = document.querySelector(".playerComing .closeBtn");
    closeBtn.addEventListener("click", closePlayerComing);
}
function closePlayerPopular() {
    playerPopular.innerHTML = "";
}
function closePlayerComing() {
    playerComing.innerHTML = "";
}
//coming soon
function dataForMovieTypeinComingCardView() {
    $.getJSON("data.json", function (data) {
        let output = '<div class="content-card-view slider-coming">';
        $.each(data, function (key, val) {
            if (val.type == "Movie") {
                let rank = val.rank || 0 || val.expectations_count || "0";
                output += '<div class="item">';
                output += '<h3 class="item__title">' + val.title + '</h3>';
                output += '<h3 class="item__year">' + val.year + '</h3>';
                output += '<div class="item__img">';
                output += '<button><img src="img/play-button.svg" alt="play"></button>';
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
            }

        });
        output += '</div>';
        $('.coming-body').html(output);
        const btnPlay = document.querySelectorAll(".item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerComing);
        });
    }).then(SlideHorizontalComing);
}
function dataForTvShowinComingCardView() {
    $.getJSON("data.json", function (data) {
        let output = '<div class="content-card-view slider-coming">';
        $.each(data, function (key, val) {
            if (val.type == "TV-Show") {
                let rank = val.rank || 0 || val.expectations_count || "0";
                output += '<div class="item">';
                output += '<h3 class="item__title">' + val.title + '</h3>';
                output += '<h3 class="item__year">' + val.year + '</h3>';
                output += '<div class="item__img">';
                output += '<button><img src="img/play-button.svg" alt="play"></button>';
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
            }

        });
        output += '</div>';
        $('.coming-body').html(output);
        const btnPlay = document.querySelectorAll(".item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerComing);
        });
    }).then(SlideHorizontalComing);
}
function dataForMovieTypeinComingListView() {
    $.getJSON("data.json", function (data) {

        let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';

        output += '<div class="content-list-view slider-coming2">';
        $.each(data, function (key, val) {
            let rank = val.rank || 0 || val.expectations_count || "0";
            if (val.type == "Movie") {
                output += '<div class="pop-item">';
                output += '<div class="pop-item__img">';
                output += '<button><img src="img/play-button.svg" alt="play"></button>';
                output += '<img class="pop-img" src="' + val.poster + '" alt="' + val.title + '">';
                output += '</div>';
                output += '<div class="pop-item__rating">';

                if (val.rank === undefined) {

                    output += '<p class="rating silver">' + rank + '</p>';
                    output += '<img class="testing" src="img/gradeless.svg" alt="testing">';
                } else {
                    output += '<img src="img/rating.png" alt="rating">';
                    output += '<p class="rating">' + rank + '</p>';
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
            }
        });
        output += "</div>";


        output += '<img class="down-arrow-pop" src="img/verticali-slider-arrows.svg">'
        $(".coming-body").html(output);
        const btnPlay = document.querySelectorAll(".pop-item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerComing);
        });
    }).then(SlideVerticalComing);
}
function dataForTvShowinComingListView() {
    $.getJSON("data.json", function (data) {

        let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';

        output += '<div class="content-list-view slider-coming2">';
        $.each(data, function (key, val) {
            let rank = val.rank || 0 || val.expectations_count || "0";
            if (val.type == "TV-Show") {
                output += '<div class="pop-item">';
                output += '<div class="pop-item__img">';
                output += '<button><img src="img/play-button.svg" alt="play"></button>';
                output += '<img class="pop-img" src="' + val.poster + '" alt="' + val.title + '">';
                output += '</div>';
                output += '<div class="pop-item__rating">';

                if (val.rank === undefined) {

                    output += '<p class="rating silver">' + rank + '</p>';
                    output += '<img class="testing" src="img/gradeless.svg" alt="testing">';
                } else {
                    output += '<img src="img/rating.png" alt="rating">';
                    output += '<p class="rating">' + rank + '</p>';
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
            }
        });
        output += "</div>";
        output += '<img class="down-arrow-pop" src="img/verticali-slider-arrows.svg">'
        $(".coming-body").html(output);
        const btnPlay = document.querySelectorAll(".pop-item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerComing);
        });
    }).then(SlideVerticalComing);
}
//most popular
function dataForMovieTypeinPopularListView() {
    $.getJSON("data.json", function (data) {

        let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';

        output += '<div class="content-list-view slider-popularTest">';
        $.each(data, function (key, val) {
            let rank = val.rank || 0 || val.expectations_count || "0";
            if (val.type == "Movie") {
                output += '<div class="pop-item">';
                output += '<div class="pop-item__img">';
                output += '<button><img src="img/play-button.svg" alt="play"></button>';
                output += '<img class="pop-img" src="' + val.poster + '" alt="' + val.title + '">';
                output += '</div>';
                output += '<div class="pop-item__rating">';

                if (val.rank === undefined) {

                    output += '<p class="rating silver">' + rank + '</p>';
                    output += '<img class="testing" src="img/gradeless.svg" alt="testing">';
                } else {
                    output += '<img src="img/rating.png" alt="rating">';
                    output += '<p class="rating">' + rank + '</p>';
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
            }
        });
        output += "</div>";


        output += '<img class="down-arrow-pop" src="img/verticali-slider-arrows.svg">'
        $(".popular-body").html(output);
        const btnPlay = document.querySelectorAll(".pop-item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerPopular);
        });
    }).then(SlideVerticalPopularTest);
}
function dataForMovieTypeinPopularCardView() {
    $.getJSON("data.json", function (data) {
        let output = '<div class="content-card-view slider-popular2">';
        $.each(data, function (key, val) {
            if (val.type == "Movie") {
                let rank = val.rank || 0 || val.expectations_count || "0";
                output += '<div class="item">';
                output += '<h3 class="item__title">' + val.title + '</h3>';
                output += '<h3 class="item__year">' + val.year + '</h3>';
                output += '<div class="item__img">';
                output += '<button><img src="img/play-button.svg" alt="play"></button>';
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
            }

        });
        output += '</div>';
        $('.popular-body').html(output);
        const btnPlay = document.querySelectorAll(".item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerPopular);
        });
    }).then(SlideHorizontalPopular);
}
function dataForTvShowinPopularListView() {
    $.getJSON("data.json", function (data) {

        let output = '<img class="up-arrow-pop" src="img/verticali-slider-arrows.svg">';

        output += '<div class="content-list-view slider-popularTest">';
        $.each(data, function (key, val) {
            let rank = val.rank || 0 || val.expectations_count || "0";
            if (val.type == "TV-Show") {
                output += '<div class="pop-item">';
                output += '<div class="pop-item__img">';
                output += '<button><img src="img/play-button.svg" alt="play"></button>';
                output += '<img class="pop-img" src="' + val.poster + '" alt="' + val.title + '">';
                output += '</div>';
                output += '<div class="pop-item__rating">';

                if (val.rank === undefined) {

                    output += '<p class="rating silver">' + rank + '</p>';
                    output += '<img class="testing" src="img/gradeless.svg" alt="testing">';
                } else {
                    output += '<img src="img/rating.png" alt="rating">';
                    output += '<p class="rating">' + rank + '</p>';
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
            }
        });
        output += "</div>";
        output += '<img class="down-arrow-pop" src="img/verticali-slider-arrows.svg">'
        $(".popular-body").html(output);
        const btnPlay = document.querySelectorAll(".pop-item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerPopular);
        });
    }).then(SlideVerticalPopularTest);
}
function dataForTvShowinPopularCardView() {
    $.getJSON("data.json", function (data) {
        let output = '<div class="content-card-view slider-popular2">';
        $.each(data, function (key, val) {
            if (val.type == "TV-Show") {
                let rank = val.rank || 0 || val.expectations_count || "0";
                output += '<div class="item">';
                output += '<h3 class="item__title">' + val.title + '</h3>';
                output += '<h3 class="item__year">' + val.year + '</h3>';
                output += '<div class="item__img">';
                output += '<button><img src="img/play-button.svg" alt="play"></button>';
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
            }

        });
        output += '</div>';
        $('.popular-body').html(output);
        const btnPlay = document.querySelectorAll(".item__img button");
        [].forEach.call(btnPlay, function (el) {
            el.addEventListener("click", createPlayerPopular);
        });
    }).then(SlideHorizontalPopular);
}
//events for  coming
movieComing.addEventListener("click", (e) => {
    if (listViewComing.classList.contains("active-view")) {
        dataForMovieTypeinComingListView();
        allComing.classList.remove("active");
        tvShowComing.classList.remove("active");
        movieComing.classList.add("active");
    } else {
        cardViewComing.classList.add("active-view")
        dataForMovieTypeinComingCardView();
        allComing.classList.remove("active");
        tvShowComing.classList.remove("active");
        movieComing.classList.add("active");
        listViewComing.classList.remove("active-view");
    }
});
tvShowComing.addEventListener("click", (e) => {
    if (listViewComing.classList.contains("active-view")) {
        dataForTvShowinComingListView();
        movieComing.classList.remove("active");
        allComing.classList.remove("active");
        tvShowComing.classList.add("active");
    } else {
        dataForTvShowinComingCardView();
        allComing.classList.remove("active");
        tvShowComing.classList.add("active");
        movieComing.classList.remove("active");
        listViewComing.classList.remove("active-view");
        cardViewComing.classList.add("active-view");
    }
});
allComing.addEventListener("click", (e) => {
    if (listViewComing.classList.contains("active-view")) {
        ListViewComingSoon();
        movieComing.classList.remove("active");
        tvShowComing.classList.remove("active");
        allComing.classList.add("active");
    }
    else {
        CardViewComingSoon();
        movieComing.classList.remove("active");
        tvShowComing.classList.remove("active");
        allComing.classList.add("active");
    }

});
cardViewComing.addEventListener("click", (e) => {
    if (allComing.classList.contains("active")) {
        CardViewComingSoon();
        listViewComing.classList.remove("active-view");
        cardViewComing.classList.add("active-view");
    } else if (movieComing.classList.contains("active")) {
        dataForMovieTypeinComingCardView();
        allComing.classList.remove("active");
        tvShowComing.classList.remove("active");
        movieComing.classList.add("active");
        listViewComing.classList.remove("active-view");
        cardViewComing.classList.add("active-view");
    } else {
        dataForTvShowinComingCardView();
        allComing.classList.remove("active");
        tvShowComing.classList.add("active");
        movieComing.classList.remove("active");
        listViewComing.classList.remove("active-view");
        cardViewComing.classList.add("active-view");
    }
});
listViewComing.addEventListener("click", (e) => {
    if (allComing.classList.contains("active")) {
        ListViewComingSoon();
        listViewComing.classList.add("active-view");
        cardViewComing.classList.remove("active-view");
    } else if (movieComing.classList.contains("active")) {
        dataForMovieTypeinComingListView();
        allComing.classList.remove("active");
        tvShowComing.classList.remove("active");
        movieComing.classList.add("active");
        listViewComing.classList.add("active-view");
        cardViewComing.classList.remove("active-view");
    } else {
        dataForTvShowinComingListView();
        allComing.classList.remove("active");
        tvShowComing.classList.add("active");
        movieComing.classList.remove("active");
        listViewComing.classList.add("active-view");
        cardViewComing.classList.remove("active-view");
    }
});

//events for most popular
moviePopular.addEventListener("click", (e) => {
    if (listViewPopular.classList.contains("active-view")) {
        dataForMovieTypeinPopularListView();
        allPopular.classList.remove("active");
        tvShowPopular.classList.remove("active");
        moviePopular.classList.add("active");
    } else {
        cardViewPopular.classList.add("active-view")
        dataForMovieTypeinPopularCardView();
        allPopular.classList.remove("active");
        tvShowPopular.classList.remove("active");
        moviePopular.classList.add("active");
        listViewPopular.classList.remove("active-view");
    }
});
tvShowPopular.addEventListener("click", (e) => {
    if (listViewPopular.classList.contains("active-view")) {
        dataForTvShowinPopularListView();
        moviePopular.classList.remove("active");
        allPopular.classList.remove("active");
        tvShowPopular.classList.add("active");
    } else {
        dataForTvShowinPopularCardView();
        allPopular.classList.remove("active");
        tvShowPopular.classList.add("active");
        moviePopular.classList.remove("active");
        listViewPopular.classList.remove("active-view");
        cardViewPopular.classList.add("active-view");
    }
});
allPopular.addEventListener("click", (e) => {
    if (listViewPopular.classList.contains("active-view")) {
        ListViewMostPopular();
        moviePopular.classList.remove("active");
        tvShowPopular.classList.remove("active");
        allPopular.classList.add("active");
    }
    else {
        CardViewMostPopular();
        moviePopular.classList.remove("active");
        tvShowPopular.classList.remove("active");
        allPopular.classList.add("active");
    }

});
cardViewPopular.addEventListener("click", (e) => {
    if (allPopular.classList.contains("active")) {
        CardViewMostPopular();
        listViewPopular.classList.remove("active-view");
        cardViewPopular.classList.add("active-view");
    } else if (moviePopular.classList.contains("active")) {
        dataForMovieTypeinPopularCardView();
        allPopular.classList.remove("active");
        tvShowPopular.classList.remove("active");
        moviePopular.classList.add("active");
        listViewPopular.classList.remove("active-view");
        cardViewPopular.classList.add("active-view");
    } else {
        dataForTvShowinPopularCardView();
        allPopular.classList.remove("active");
        tvShowPopular.classList.add("active");
        moviePopular.classList.remove("active");
        listViewPopular.classList.remove("active-view");
        cardViewPopular.classList.add("active-view");
    }
});
listViewPopular.addEventListener("click", (e) => {
    if (allPopular.classList.contains("active")) {
        ListViewMostPopular();
        listViewPopular.classList.add("active-view");
        cardViewPopular.classList.remove("active-view");
    } else if (moviePopular.classList.contains("active")) {
        dataForMovieTypeinPopularListView();
        allPopular.classList.remove("active");
        tvShowPopular.classList.remove("active");
        moviePopular.classList.add("active");
        listViewPopular.classList.add("active-view");
        cardViewPopular.classList.remove("active-view");
    } else {
        dataForTvShowinPopularListView();
        allPopular.classList.remove("active");
        tvShowPopular.classList.add("active");
        moviePopular.classList.remove("active");
        listViewPopular.classList.add("active-view");
        cardViewPopular.classList.remove("active-view");
    }
});
//run
CardViewComingSoon();
ListViewMostPopular();


///need to fix this function!!!
// function createPlayerPopular() {
//     $.getJSON("data.json", function(data){
//         let output = '<span class="closeBtn">&times;</span>'; 
//         output +='<iframe width="100%" height="500" src="' + data[0].iframe +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; 
//         $(".playerPopular").html(output);
//         const closeBtn = document.querySelector(".playerPopular .closeBtn");
//         closeBtn.addEventListener("click", closePlayerPopular);
//     });
// }

