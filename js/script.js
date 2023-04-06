const hamburger_menu = document.querySelector(".hamburger-menu");
const mob_menu = document.querySelector(".mob-menu");
const close_menu = document.querySelector(".menu-close");

hamburger_menu.addEventListener("click", function(e){
    mob_menu.classList.toggle("active");
    this.classList.toggle("active");
});
