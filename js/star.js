const stars = document.querySelectorAll('.give-feedback-popup .mentors__star');


let selectedStars = 0;

function onMouseOver(e) {
    const hoveredStarIndex = Array.from(stars).indexOf(e.target);
    for (let i = 0; i < hoveredStarIndex; i++) {
        if (i === 0) {
            stars[i].classList.add('fa-solid');
            stars[i].classList.remove('fa-regular');
        }
        stars[i + 1].classList.add('fa-solid');
        stars[i + 1].classList.remove('fa-regular');
    }
}

function onMouseOut(e) {
    for (let i = 0; i < stars.length; i++) {
        if (i < selectedStars || i === 0) {
            stars[i].classList.add('fa-solid');
            stars[i].classList.remove('fa-regular');
        } else {
            stars[i].classList.add('fa-regular');
            stars[i].classList.remove('fa-solid');
        }
    }
}

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
    }

    let getDataStars = document.querySelector('.give-feedback-popup .tutors-card__rate')
    console.log(getDataStars)
    getDataStars.setAttribute('data-stars', selectedStars)
}

stars.forEach((star) => {
    star.addEventListener('mouseover', onMouseOver);
    star.addEventListener('mouseout', onMouseOut);
    star.addEventListener('click', onClick);
});