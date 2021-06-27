window.onscroll = function() {
    hidefunction();
}

window.onload = function() {
    removeLoading();
}

function removeLoading() {
    $('.logo-tagline').removeClass('loading');
    setTimeout(() => {
        $('.loading-div').addClass('loaded');
        $('.loading-body').removeClass('loading-body');
    }, 1000)
}

var prevScrollpos = window.pageYOffset;
var nav = document.getElementsByTagName('button')[0];
var header = document.getElementById('header');

function hidefunction() {
    var currentScrollPos = window.pageYOffset;
    if (navbutton.className != "navbar-toggler navdisplay navhide") {
        if (prevScrollpos > currentScrollPos) {
            header.style.top = "0";
            header.style.transition = "0.5s";
            // header.style.position = "sticky";
        } else {
            // header.style.top = "-100px!important";
            header.style.setProperty('top', '-100px', 'important');
            header.style.transition = "0.5s";
            // header.style.position = "fixed";
        }
        prevScrollpos = currentScrollPos;
    }
}

document.addEventListener("scroll", () => {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.className = "d-flex flex-wrap headerscroll ";
    } else {
        header.className = " d-flex flex-wrap";
    }
});

var links = document.getElementsByClassName('butt');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var active = document.getElementsByClassName('nav-a');
        active[0].className = active[0].className.replace(" nav-a", "");
        this.className += " nav-a";
    });
}

var navbutton = document.querySelector('.navdisplay');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('navhide');
});

var mq = window.matchMedia("(max-width: 800px)");
if (mq.matches) {
    function navhide() {
        navbutton.click();
    }
} else {
    function navhide() {}
}

$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

let showPromo = document.querySelector('.hide-promo')

function showPromoCodes() {
    showPromo.classList.toggle('show-promo')
}