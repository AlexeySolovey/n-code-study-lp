function redirect() {
  const loginLink = document.querySelectorAll(".login-btn");
  const signupLink = document.querySelectorAll(".signup-btn");

  switch (window.location.host) {
    case "n-code-dev.in.net":
      loginLink.forEach((el) => el.href = "https://my.n-code-dev.in.net/")
      signupLink.forEach((el) => el.href = "https://my.n-code-dev.in.net/uk/#/signup")
      break;
    case "n-code-release.in.net":
      loginLink.forEach((el) => el.href = "https://my.n-code-release.in.net/")
      signupLink.forEach((el) => el.href = "https://my.n-code-release.in.net/uk/#/signup")
      break;
    case "n-code.study":
      loginLink.forEach((el) => el.href = "https://my.n-code.study/")
      signupLink.forEach((el) => el.href = "https://my.n-code.study/uk/#/signup")
      break;
    case "n-code-test.in.net":
      loginLink.forEach((el) => el.href = "https://my.n-code-test.in.net/")
      signupLink.forEach((el) => el.href = "https://my.n-code-test.in.net/uk/#/signup")
      break;
    default:
      loginLink.forEach((el) => el.href = "#")
      signupLink.forEach((el) => el.href = "#")
  }
}

redirect();

(function getInputFile() {
  const input = document.querySelector("#file");
  const placeholder = document.querySelector(".popup .input-wrapper .placeholder");
  input.addEventListener("change", function () {
    const isPdf = input.files[0].name.endsWith(".pdf");
    const isDocx = input.files[0].name.endsWith(".docx");
    
    validFileMentor = isPdf || isDocx;

    placeholder.innerHTML  = input.files[0].name;
    placeholder.style.color = "black";
  });
})();

(function mobMenu() {
  const hamburger_menu = document.querySelector(".hamburger-menu");
  const mob_menu = document.querySelector(".mob-menu");

  hamburger_menu.addEventListener("click", function (e) {
    mob_menu.classList.toggle("active");
    this.classList.toggle("active");
  });
})();

(function reloadPage(){
  let menuItem = document.querySelector(".main-item")
  let modal = document.querySelectorAll(".popup")
  modal.forEach(el => {
    menuItem.addEventListener("click", function(){
      if(el.style.display === "block"){
        location.reload()
      }
    })
  })
})()

function getApiUrl(type) {
  switch (window.location.host) {
    case "n-code-dev.in.net":
      return `https://api.n-code-dev.in.net/api/emails/${type}`;
    case "n-code-release.in.net":
      return `https://api.n-code-release.in.net/api/emails/${type}`;
    case "n-code.study":
      return `https://api.n-code.study/api/emails/${type}`;
    case "n-code-test.in.net":
      return `https://api.n-code-test.in.net/api/emails/${type}`;
    default:
      return `http://localhost:3022/api/emails/${type}`;
  }
}

(function onSubmitCallBack() {
  const form = document.querySelector("#callbackForm");
  const btn = document.querySelector(".callback-form .btn");

  if (form) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();

      const name = document.querySelector(".callback-form .name").value;
      const phone = document.querySelector(".callback-form .phone").value;
      const email = document.querySelector(".callback-form .email").value;
      const source = document.querySelector(".callback-form .select-wherefrom").value;
      const comment = document.querySelector(".callback-form .comment").value;

      const body = { name, email, phone, source, comment };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      const url = getApiUrl("feedback");

      if (validEmailCallback && validPhoneCallback && name) {
        fetch(url, options, {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        })
          .then(() => {
            alert("Запит успішно відправлено");
            form.reset();
          })
          .catch((error) => {
            alert("Сталася помилка при виконанні запиту", error);
          });
      } else {
        alert(`Будь ласка, заповніть обов'язкові поля!`);
      }
    });
  }
})();

(function onSubmitBecameMentor() {
  const form = document.querySelector("#mentorForm");
  const btn = document.querySelector("#mentorForm .btn");

  if (form) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();

      const formData = new FormData(form);

      const options = {
        method: "POST",
        body: formData,
      };

      const url = getApiUrl("statement");

      if (!validFileMentor) {
        alert(`Файл резюме має бути PDF або DOCX!`);
        return;
      }

      if (validEmailMentor && validFileMentor && validPhoneMentor && formData.get("name") && formData.get("attachment").name) {
        fetch(url, options, {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        })
          .then(() => {
            alert("Запит успішно відправлено");
            form.reset();

            const placeholder = document.querySelector(".became-mentor-popup .input-wrapper .placeholder");
            placeholder.innerHTML = "Прикріпити файл з резюме";
            placeholder.style.color = "#8e8e8e";
          })
          .catch((error) => {
            alert("Сталася помилка при виконанні запиту", error);
          });
      } else {
        alert(`Будь ласка, заповніть обов'язкові поля!`);
      }
    });
  }
})();

let emailInputCallback = document.querySelector(".callback-form .email");
let phoneInputCallback = document.querySelector(".callback-form .phone");

let emailInputMentor = document.querySelector(".became-mentor-popup .email");
let phoneInputMentor = document.querySelector(".became-mentor-popup .phone");

let validEmailCallback = false;
let validPhoneCallback = false;

let validEmailMentor = false;
let validPhoneMentor = false;
let validFileMentor = false;

if(emailInputCallback){
  emailInputCallback.addEventListener("input", function () {
    let validationEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
    validEmailCallback = validationEmail.test(emailInputCallback.value.trim());
  
    emailInputCallback.style.borderColor = validEmailCallback ? "black" : "red";
  });
}
if(phoneInputCallback){
  phoneInputCallback.addEventListener("input", function () {
    let validationPhone = /^(\+380|380|0)\d{9}$/;
  
    validPhoneCallback = validationPhone.test(phoneInputCallback.value.trim());
  
    phoneInputCallback.style.borderColor = validPhoneCallback ? "black" : "red";
  });
}

emailInputMentor.addEventListener("input", function () {
  let validationEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  validEmailMentor = validationEmail.test(emailInputMentor.value.trim());

  emailInputMentor.style.borderColor = validEmailMentor ? "black" : "red";
});

phoneInputMentor.addEventListener("input", function () {
  let validationPhone = /^(\+380|380|0)\d{9}$/;

  validPhoneMentor = validationPhone.test(phoneInputMentor.value.trim());

  phoneInputMentor.style.borderColor = validPhoneMentor ? "black" : "red";
});

function accordion(selector) {
  let accordionItem = document.querySelectorAll(selector);
  accordionItem.forEach((item) => {
    item.children[0].addEventListener("click", function () {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        item.children[1].style.maxHeight = 0;
      } else {
        accordionItem.forEach((item) => item.classList.remove("active"));
        accordionItem.forEach((item) => (item.children[1].style.maxHeight = 0));
        item.classList.add("active");
        item.children[1].style.maxHeight = item.children[1].scrollHeight + "px";
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
    selectsPlaceholder[0].innerHTML = "Звідки Ви дізнались про N-Code?";
  }
})();

(function headerScroll() {
  const fixedElement = document.querySelector("#header");
  const body = document.querySelector('body');
  body.addEventListener("scroll", function () {
    if (body.scrollTop > 0) {
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
    });
  }
})();

(function iPhoneScroll() {
  if (/iPhone/.test(navigator.userAgent)) {
    document.querySelector('.footer').classList.add('iphone-mb-footer');
  }
})();
