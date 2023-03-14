// $(document).ready(function() {
//     $('.header__wrapper__burger').click(function(event) {
//         $('.header__wrapper__burger,.header__wrapper__menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     })
// })

// console.log(555);


let burger = document.querySelector('.header__wrapper__burger');
let burgerMenu = document.querySelector('.header__wrapper__menu');

burger.addEventListener('click', (event) => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})