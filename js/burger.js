let burger = document.querySelector('.header__wrapper__burger');
let burgerMenu = document.querySelector('.header__wrapper__menu');

burger.addEventListener('click', (event) => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})




let study = document.querySelectorAll('.study__card');

study.forEach((e) => {
    e.classList.remove("card-active")
    e.addEventListener('click', () => {
        e.classList.toggle('card-active');
    })
})






