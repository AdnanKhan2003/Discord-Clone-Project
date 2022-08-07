let navlinks = document.getElementById('navlinks');

function openMenu(){
    navlinks.style.right = "0";
}

function closeMenu(){
    navlinks.style.right = "-700px"
}






$(document).ready(function () {
    $('.hamburger').on('click', function(){
        $('body').toggleClass('no-scroll');
    });
    
    $('.hamburger-close').on('click', function(){
        $('body').removeClass('no-scroll');
    });
});
