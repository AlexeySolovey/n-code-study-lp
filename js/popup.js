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

(function feedbackPopupSelect() {
    const courseFeed = document.getElementById("courseFeed");
    const tutor = document.getElementById("tutor");
    if (courseFeed && tutor) {
        NiceSelect.bind(courseFeed);
        NiceSelect.bind(tutor);

        let selectsPlaceholder = document.querySelectorAll('.give-feedback-popup .nice-select .current');
        selectsPlaceholder[0].innerHTML = 'Виберіть курс';
        selectsPlaceholder[1].innerHTML = 'Виберіть Викладача';
    }
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



(function showPopup() {

    const popups = document.querySelectorAll('.popup')

    const feedbackPopup = document.querySelector('.feedback-popup');
    if (feedbackPopup) {
        let allLinks = [...document.querySelectorAll('.feedback .tutors-card__course-link')];
        allLinks.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                feedbackPopup.style.display = 'block'
            })
        })
    }

    const givePopup = document.querySelector('.give-feedback-popup')
    let allGiveFeedvack = [...document.querySelectorAll('.action-btn.give-feedback')]
    if (allGiveFeedvack) {
        allGiveFeedvack.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                givePopup.style.display = 'block'
            })
        })
    }

    const mentorInfoPopup = document.querySelector('.mentor-info-popup')
    let allMentorInfo = [...document.querySelectorAll('.tutors .tutors-card__course-link.more-info-link')]
    if (mentorInfoPopup) {
        allMentorInfo.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                mentorInfoPopup.style.display = 'block'
            })
        })
    }

}())