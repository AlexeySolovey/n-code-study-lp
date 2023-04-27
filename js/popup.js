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

(function popupValidation() {
    const form = document.querySelector('.give-feedback-popup');
    const btn = document.querySelector('.give-feedback-popup .btn')

    btn.addEventListener('click', function (event) {
        event.preventDefault();
        const inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            if (!input.checkValidity()) {
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });

        const selects = form.querySelectorAll('select');
        selects.forEach(function (select) {

            if (select.value === '') {
                console.log(select.value)
                select.nextElementSibling.classList.add('invalid');
            } else {
                select.nextElementSibling.classList.remove('invalid');
            }
        });
    })
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