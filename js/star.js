const stars = document.querySelectorAll('.give-feedback-popup .mentors__star');

// Инициализируем переменную, хранящую количество выделенных звезд
let selectedStars = 0;

// Обработчик события наведения мыши на звезду
function onMouseOver(e) {
    const hoveredStarIndex = Array.from(stars).indexOf(e.target);
    for (let i = 0; i < hoveredStarIndex; i++) {
        if(i===0){            
            stars[i].classList.add('fa-solid');
            stars[i].classList.remove('fa-regular');
        }
        stars[i+1].classList.add('fa-solid');
        stars[i+1].classList.remove('fa-regular');
    }
}

// Обработчик события ухода мыши с звезды
function onMouseOut(e) {    
    for (let i = 0; i < stars.length; i++) {       
        if (i < selectedStars || i===0) {
            stars[i].classList.add('fa-solid');
            stars[i].classList.remove('fa-regular');
        } else {
            stars[i].classList.add('fa-regular');
            stars[i].classList.remove('fa-solid');
        }
    }
}

// Обработчик события клика на звезду
function onClick(e) {
    selectedStars = Array.from(stars).indexOf(e.target) + 1;
    for (let i = 0; i < stars.length; i++) {
        if (i < selectedStars) {
            stars[i].classList.add('fa-solid');
            stars[i].classList.remove('fa-regular');
        } else {
            stars[i].classList.add('fa-regular');
            stars[i].classList.remove('fa-solid');
        }
        
        let getDataStars = document.querySelector('.feedback-popup .tutors-card__rate')
        getDataStars.setAttribute('data-stars', selectedStars)
    }
}

// Добавляем обработчики событий на все звезды
stars.forEach((star) => {
    star.addEventListener('mouseover', onMouseOver);
    star.addEventListener('mouseout', onMouseOut);
    star.addEventListener('click', onClick);
});