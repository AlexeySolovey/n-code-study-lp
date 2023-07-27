function redirect() {
  const loginLink = document.querySelector(".login-btn");
  const signupLink = document.querySelector(".signup-btn");

  switch (window.location.host) {
    case "n-code-dev.in.net":
      loginLink.href = "https://my.n-code-dev.in.net/";
      signupLink.href = `${loginLink.href}uk/#/signup`;
      break;
    case "n-code-release.in.net":
      loginLink.href = "https://my.n-code-release.in.net/";
      signupLink.href = `${loginLink.href}uk/#/signup`
      break;
    case "n-code.study":
      loginLink.href = "https://my.n-code.study/";
      signupLink.href = `${loginLink.href}uk/#/signup`
      break;
    case "n-code-test.in.net":
      loginLink.href = "https://my.n-code-test.in.net/";
      signupLink.href = `${loginLink.href}uk/#/signup`
      break;
    default:
      loginLink.href = "#";
      signupLink.href = "#";
  }
}

redirect();

(function mobMenu() {
  const hamburger_menu = document.querySelector(".hamburger-menu");
  const mob_menu = document.querySelector(".mob-menu");

  hamburger_menu.addEventListener("click", function (e) {
    mob_menu.classList.toggle("active");
    this.classList.toggle("active");
  });
})();

(function validation() {
  const form = document.querySelector("#callbackForm");
  const btn = document.querySelector(".callback-form .btn");

  if (form) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      const inputs = form.querySelectorAll("input");
      inputs.forEach(function (input) {
        if (!input.checkValidity()) {
          input.classList.add("invalid");
        }
      });
    });
  }
})();

(function roadmap() {
  let roadmapItems = document.querySelector(".roadmap-step");

  let roadmapInfoItems = document.querySelector(".roadmap-step-info");

  if (roadmapItems && roadmapInfoItems) {
    roadmapItems = Array.from(roadmapItems.children);
    roadmapInfoItems = Array.from(roadmapInfoItems.children);

    roadmapItems.forEach((item, index) => {
      item.addEventListener("click", function () {
        roadmapItems.forEach((item) => item.classList.remove("active"));
        roadmapInfoItems.forEach((item) => item.classList.remove("active"));
        roadmapInfoItems[index].classList.add("active");
        item.classList.add("active");
      });
    });
  }
})();

function accordion(selector) {
  let accordionItem = document.querySelectorAll(selector);
  accordionItem.forEach((item) => {
    item.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        item.children[1].style.maxHeight = 0;
      } else {
        accordionItem.forEach((item) => item.classList.remove("active"));
        accordionItem.forEach((item) => (item.children[1].style.maxHeight = 0));
        this.classList.add("active");
        this.children[1].style.maxHeight = this.children[1].scrollHeight + "px";
      }
    });
  });
}

accordion(".accordion__item");
accordion(".header-card__mob .header-card");

(function customSelect() {
  const course = document.getElementById("course");
  const wherefrom = document.getElementById("wherefrom");

  if (course && wherefrom) {
    NiceSelect.bind(wherefrom);
    NiceSelect.bind(course);

    let selectsPlaceholder = document.querySelectorAll(".nice-select .current");
    selectsPlaceholder[0].innerHTML = "Оберіть напрямок";
    selectsPlaceholder[1].innerHTML = "Звідки ви дізнались про N-Code?";
  }
})();

(function headerScroll() {
  const fixedElement = document.querySelector("#header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      fixedElement.classList.add("scrolled");
    } else {
      fixedElement.classList.remove("scrolled");
    }
  });
})();

(function becomeMentorPopup() {
  const becomeMentorPopup = document.querySelector(".popup.became-mentor-popup");
  const becomeMentorPopupLink = document.querySelector(".tutors-card.became-tutor");
  let becomeMentorPopupBtn = document.querySelectorAll(".action-btn.became-tutor");
  becomeMentorPopupBtn = [...becomeMentorPopupBtn];

  if (becomeMentorPopupBtn) {
    becomeMentorPopupBtn.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        becomeMentorPopup.style.display = "block";
      });
    });
  }

  if (becomeMentorPopupLink) {
    becomeMentorPopupLink.addEventListener("click", (e) => {
      e.preventDefault();
      becomeMentorPopup.style.display = "block";
    });
  }
})();
