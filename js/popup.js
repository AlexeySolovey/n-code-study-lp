(function popup() {
    const popup = document.querySelector('.popup');
    const popupClose = document.querySelector('.popup__close');

    popupClose.addEventListener('click', function () {
        popup.style.display = 'none'
    })
}());


// Скорее всего это будет использоватсья иначе. Существует сугубо как пример работы попапа
(function showPopup() {
    const popup = document.querySelector('.popup');
    let allLinks = [...document.querySelectorAll('.feedback .tutors-card__course-link')];
    allLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'block'
        })
    })
}())