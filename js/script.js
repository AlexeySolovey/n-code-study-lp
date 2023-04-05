const hamburger_menu = document.querySelector(".hamburger-menu");
const mob_menu = document.querySelector(".mob-menu");
const close_menu = document.querySelector(".menu-close");

hamburger_menu.addEventListener("click", () => {
    mob_menu.classList.add("active");
});

close_menu.addEventListener("click", () => {
    mob_menu.classList.remove("active");
});