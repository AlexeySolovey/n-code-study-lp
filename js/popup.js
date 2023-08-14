(function popup() {
  let popup = document.querySelectorAll(".popup");
  popup = [...popup];

  popup.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (e.target.classList.value === "back-link" || e.target.classList.value === "popup__close") {
        this.style.display = "none";
      }
    });
  });
})();

(function feedbackPopupSelect() {
  const courseFeed = document.getElementById("courseFeed");
  const tutor = document.getElementById("tutor");
  if (courseFeed && tutor) {
    NiceSelect.bind(courseFeed);
    NiceSelect.bind(tutor);

    let selectsPlaceholder = document.querySelectorAll(".give-feedback-popup .nice-select .current");
    selectsPlaceholder[0].innerHTML = "Виберіть курс";
    selectsPlaceholder[1].innerHTML = "Виберіть Викладача";
  }
})();

(function showPopup() {
  let allLinks = [...document.querySelectorAll(".feedback .tutors-card__course-link")];
  allLinks.forEach((item) => {
    const contentId = item.dataset.trigger;
    const feedbackPopUp = document.querySelector(`[data-content="${contentId}"]`);
    item.addEventListener("click", (e) => {
      e.preventDefault();
      feedbackPopUp.style.display = "block";
    });
  });

  const givePopup = document.querySelector(".give-feedback-popup");
  let allGiveFeedvack = [...document.querySelectorAll(".action-btn.give-feedback")];
  if (allGiveFeedvack) {
    allGiveFeedvack.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        givePopup.style.display = "block";
      });
    });
  }

  let allMentorLinks = [...document.querySelectorAll(".tutors .tutors-card__course-link")];
  allMentorLinks.forEach((item) => {
    const contentId = item.dataset.trigger;
    const mentorInfoPopup = document.querySelector(`[data-content-mentor="${contentId}"]`);
    item.addEventListener("click", (e) => {
      e.preventDefault();
      mentorInfoPopup.style.display = "block";
    });
  });
})();
