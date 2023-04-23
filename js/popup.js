(function popup() {
    let popup = document.querySelectorAll('.popup');
    popup = [...popup]

    popup.forEach(item => {
        item.addEventListener('click', function (e) {

            if (e.target.classList.value === "back-link" || e.target.classList.value === "popup__close") {
                this.style.display = 'none'
            }

        })
    })
}());

(function feddbackPopupSelect() {
    NiceSelect.bind(document.getElementById("courseFeed"));
    NiceSelect.bind(document.getElementById("tutor"));

    let selectsPlaceholder = document.querySelectorAll('.give-feedback-popup .nice-select .current');
    selectsPlaceholder[0].innerHTML = 'Виберіть курс';
    selectsPlaceholder[1].innerHTML = 'Виберіть Викладача';
}());



// Скорее всего это будет использоватсья иначе. Существует сугубо как пример работы попапа
(function showPopup() {
    const popup = document.querySelector('.feedback-popup');
    let allLinks = [...document.querySelectorAll('.feedback .tutors-card__course-link')];
    allLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'block'
        })
    })

    const givePopup = document.querySelector('.give-feedback-popup')
    let allGiveFeedvack = [...document.querySelectorAll('.give-feedback')]
    allGiveFeedvack.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            givePopup.style.display = 'block'
        })
    })
}())