document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.burger');
    const hamburger = document.querySelector('.hamb');
    var menu = document.querySelector('.nav-wrapper');
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    menu.addEventListener('click', function(){
        burger.classList.toggle('active');
        hamburger.classList.toggle('active');
    })
});