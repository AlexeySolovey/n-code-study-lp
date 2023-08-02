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

(function getInputFile() {
  const input = document.querySelector("#file");
  const placeholder = document.querySelector(".popup .input-wrapper .placeholder")
  input.addEventListener("change", function() {
    placeholder.innerHTML = input.files[0].name;
    placeholder.style.color = "black"
  })
})();

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
      
      const name = document.querySelector(".callback-form .name").value
      const phone = document.querySelector(".callback-form .phone").value
      const email = document.querySelector(".callback-form .email").value
      const wherefrom = document.querySelector(".callback-form .select-wherefrom").value
      const comment = document.querySelector(".callback-form .comment").value

      const body = {name, phone, email, wherefrom, comment}

      const url = 'https://api.n-code-dev.in.net/api/emails/feedback'

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      };

      const inputs = form.querySelectorAll("input");
      inputs.forEach(function (input) {
        if (!input.checkValidity()) {
          input.classList.add("invalid");
        }
        else{
          fetch(url, options)
        }
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
  const wherefrom = document.getElementById("wherefrom");

  if (wherefrom) {
    NiceSelect.bind(wherefrom);

    let selectsPlaceholder = document.querySelectorAll(".nice-select .current");
    selectsPlaceholder[0].innerHTML = "Звідки ви дізнались про N-Code?";
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
  const becomeMentorPopup = document.querySelector(".became-mentor-popup");
  const becomeMentorPopupLink = document.querySelector(".became-mentor");
  if (becomeMentorPopupLink) {
    becomeMentorPopupLink.addEventListener("click", () => {
      becomeMentorPopup.style.display = "block";
    })
  }
})();
