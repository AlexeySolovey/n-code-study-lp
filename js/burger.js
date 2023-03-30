let burger = document.querySelector('.header__wrapper__burger');
let burgerMenu = document.querySelector('.header__wrapper__menu');
let burgerMenuItems = document.querySelectorAll('.header__wrapper__list li');
burgerMenuItems = [...burgerMenuItems];

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})

burgerMenuItems.forEach((item) => {
    item.addEventListener('click', () => {        
        burgerMenu.classList.remove('active');
        burger.classList.remove('active');
    })
})

