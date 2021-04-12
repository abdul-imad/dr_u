let navbarMenu = document.querySelector(".navbar-menu1");
let hamburger = document.querySelector(".menu-toggler1");

hamburger.addEventListener('click', function(){
    navbarMenu.classList.toggle('active');
});