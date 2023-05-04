let starsContainer = document.querySelectorAll('.tutors-card .tutors-card__rate');
starsContainer = [...starsContainer]

stars = starsContainer.map(item => item.querySelectorAll('.mentors__star'))

let selectedStars = 0;


function onMouseOver(e) {
    stars.forEach(startsGroups => {
        const hoveredStarIndex = Array.from(startsGroups).indexOf(e.target);
        for (let i = 0; i < hoveredStarIndex; i++) {
            startsGroups[i].classList.add('fa-solid');
            startsGroups[i].classList.remove('fa-regular');
        }
    })
}

function onMouseOut(e) {
    // let selectedStars = 0;

    stars.forEach(startsGroups => {
        for (let i = 0; i < startsGroups.length; i++) {
            console.log(selectedStars)
            if (i < selectedStars) {
                startsGroups[i].classList.add('fa-solid');
                startsGroups[i].classList.remove('fa-regular');
            } else {
                startsGroups[i].classList.add('fa-regular');
                startsGroups[i].classList.remove('fa-solid');
            }
        }
    })
}

// Обработчик события клика на звезду
function onClick(e) {
    // let selectedStars = 0;
    stars.forEach(startsGroups => {
        selectedStars = Array.from(startsGroups).indexOf(e.target) + 1;
        for (let i = 0; i < startsGroups.length; i++) {
            if (i < selectedStars) {
                startsGroups[i].classList.add('fa-solid');
                startsGroups[i].classList.remove('fa-regular');
            } else {
                startsGroups[i].classList.add('fa-regular');
                startsGroups[i].classList.remove('fa-solid');
            }
        }
    })

}

// Добавляем обработчики событий на все звезды
stars.forEach((star) => {
    star = [...star]
    star.forEach(item => {
        item.addEventListener('mouseover', onMouseOver);
        item.addEventListener('mouseout', onMouseOut);
        item.addEventListener('click', onClick);
    })
    //   star.addEventListener('mouseover', onMouseOver);
    //   star.addEventListener('mouseout', onMouseOut);
    //   star.addEventListener('click', onClick);
});