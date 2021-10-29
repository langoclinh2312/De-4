$(function() {
    $("#tabs").tabs();
});

$('.feedback--carousel').owlCarousel({
    items: 1,
    margin: 10,
    loop: true
});

$('.brands__content').owlCarousel({
    items: 6,
    margin: 0,
    loop: true
});

function myFunction() {
    var x = document.getElementById("header");
    if (x.className === "") {
        x.className += " responsive";
    } else {
        x.className = "";
    }
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var x = document.getElementById("fixed");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        x.classList.add('header-fixed');
    } else {
        x.classList.remove('header-fixed');
    }
}