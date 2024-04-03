const footerHTML = `
<footer class="footer">
  <div class="content-container">
    <div class="row">
        <div class="col logo-desktop">
            <a href="index.html">
                <img class="footer__logo" src="img/logo.svg" alt="logo" />
            </a>
        </div>
        <div class="col">
            <p class="footer__title">N-Code</p>
            <ul class="footer__list">
                <li><a href="about-us.html">Про нас</a></li>
                <li><a href="tutors.html">Репетитори</a></li>
                <li><a href="feedback.html">Відгуки</a></li>
            </ul>
        </div>
        <div class="col">
            <p class="footer__title">Контакти</p>
            <ul class="footer__list">
                <li><a href="mailto:info@n-code.study">info@n-code.study</a></li>
                <li><a href="tel:380686272727">+38 (068) 627-27-27</a></li>
            </ul>
        </div>
        <div class="col">
            <p class="footer__title">Співробітництво</p>
            <button class="btn footer__btn became-mentor">Стати репетитором</button>
        </div>
    </div>
    <div class="footer__social">
        <a class="social-ico" href="https://instagram.com/ncode.study?igshid=MzRlODBiNWFlZA==" target="_blank">
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                        d="M14.5 0.25H5.5C4.10807 0.251489 2.77358 0.805091 1.78933 1.78933C0.805091 2.77358 0.251489 4.10807 0.25 5.5V14.5C0.251489 15.8919 0.805091 17.2264 1.78933 18.2107C2.77358 19.1949 4.10807 19.7485 5.5 19.75H14.5C15.8919 19.7485 17.2264 19.1949 18.2107 18.2107C19.1949 17.2264 19.7485 15.8919 19.75 14.5V5.5C19.7485 4.10807 19.1949 2.77358 18.2107 1.78933C17.2264 0.805091 15.8919 0.251489 14.5 0.25ZM10 14.5C9.10998 14.5 8.23995 14.2361 7.49993 13.7416C6.75991 13.2471 6.18314 12.5443 5.84254 11.7221C5.50195 10.8998 5.41283 9.99501 5.58647 9.12209C5.7601 8.24918 6.18868 7.44736 6.81802 6.81802C7.44736 6.18868 8.24918 5.7601 9.12209 5.58647C9.99501 5.41283 10.8998 5.50195 11.7221 5.84254C12.5443 6.18314 13.2471 6.75991 13.7416 7.49993C14.2361 8.23995 14.5 9.10998 14.5 10C14.4988 11.1931 14.0243 12.337 13.1806 13.1806C12.337 14.0243 11.1931 14.4988 10 14.5ZM15.625 5.5C15.4025 5.5 15.185 5.43402 15 5.3104C14.815 5.18679 14.6708 5.01109 14.5856 4.80552C14.5005 4.59995 14.4782 4.37375 14.5216 4.15552C14.565 3.93729 14.6722 3.73684 14.8295 3.5795C14.9868 3.42217 15.1873 3.31502 15.4055 3.27162C15.6238 3.22821 15.85 3.25049 16.0555 3.33564C16.2611 3.42078 16.4368 3.56498 16.5604 3.74998C16.684 3.93499 16.75 4.1525 16.75 4.375C16.75 4.67337 16.6315 4.95952 16.4205 5.1705C16.2095 5.38147 15.9234 5.5 15.625 5.5ZM13 10C13 10.5933 12.8241 11.1734 12.4944 11.6667C12.1648 12.1601 11.6962 12.5446 11.1481 12.7716C10.5999 12.9987 9.99667 13.0581 9.41473 12.9424C8.83279 12.8266 8.29824 12.5409 7.87868 12.1213C7.45912 11.7018 7.1734 11.1672 7.05764 10.5853C6.94189 10.0033 7.0013 9.40013 7.22836 8.85195C7.45542 8.30377 7.83994 7.83524 8.33329 7.50559C8.82664 7.17595 9.40666 7 10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10Z"
                        fill="black"
                />
            </svg>
        </a>
        <a class="social-ico" href="https://www.facebook.com/ncode.study" target="_blank">
            <svg width="32" height="32" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.8751 10.9377C21.8751 9.74298 21.9008 7.8956 21.9289 6.00022C21.978 2.68667 19.3134 0.000163861 15.9995 0.000199078C14.2228 0.000217959 12.4156 0.000219345 10.9376 0.000219345C9.6018 0.000219345 7.8235 0.000219345 6.00005 0.000219345C2.68638 0.000219345 -8.3135e-06 2.68651 3.38375e-05 6.00017C5.64166e-05 7.77521 8.19844e-05 9.52812 8.19844e-05 10.9377C8.19844e-05 12.0625 7.15326e-05 13.5196 5.8018e-05 14.9999C2.7765e-05 18.3136 2.68642 21 6.00015 21C7.15209 21 8.20278 21 9.2286 21V14.1003H6.45077V10.9377H9.2286V8.52805C9.2286 5.78733 10.8619 4.27219 13.3599 4.27219C14.5567 4.27219 15.8087 4.48606 15.8087 4.48606V7.17795H14.4288C13.0709 7.17795 12.6461 8.02073 12.6461 8.88694V10.9377H15.6793L15.1949 14.1003H12.6466V21C13.6864 21 14.8287 21 15.9999 21C19.3136 21 21.9801 18.3135 21.9234 15.0002C21.8975 13.4883 21.8751 12.0551 21.8751 10.9377Z"
                        fill="black"
                />
            </svg>
        </a>
        <a class="social-ico" href="https://t.me/N_Code_study" target="_blank">
            <svg width="32" height="32" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                        d="M10.5001 -0.000311494C8.42335 -0.000311494 8.4806 -0.000173129 6 -0.000225283C2.68654 0.000583579 0.000109323 2.68613 0.000109475 5.99959C0.0001096 8.72236 0.000105837 11.5159 0.000218958 12.6018C0.000210833 13.2559 0.00021648 14.0948 0.000225864 14.9991C0.000260252 18.313 2.68731 21 6.00115 21C6.97223 21 7.85179 21 8.50005 21C10.5001 21 12.8348 21 14.9174 21C14.945 21 14.9726 21 15.0001 21C18.3138 21 21.0001 18.3134 21.0001 14.9997C21.0001 13.16 21.0001 11.4266 21.0001 10.4997C21.0001 9.12081 21.0001 7.99983 21.0001 6.48151C21.0001 6.33739 21.0001 6.17574 21.0001 5.99991C21.0001 2.68637 18.3136 0.000457692 15.0001 -0.000281453C13.8391 -0.000540435 11.8789 -0.000311494 10.5001 -0.000311494ZM13.8391 15.9093C13.7999 16.0074 13.7401 16.096 13.6639 16.1691C13.5876 16.2421 13.4966 16.2981 13.397 16.3331C13.2973 16.3681 13.1913 16.3814 13.0861 16.372C12.9809 16.3627 12.8789 16.3309 12.787 16.2789L9.9362 14.0634L8.10711 15.7518C8.06465 15.7831 8.015 15.8033 7.96271 15.8105C7.91042 15.8176 7.85717 15.8115 7.80785 15.7927L8.15856 12.6543L8.16905 12.6637L8.1764 12.6018C8.1764 12.6018 13.3057 7.93139 13.5146 7.73294C13.7267 7.53449 13.6564 7.49144 13.6564 7.49144C13.669 7.24994 13.2773 7.49144 13.2773 7.49144L6.48066 11.8636L3.65091 10.8997C3.65091 10.8997 3.21621 10.7443 3.17526 10.401C3.13221 10.0608 3.66456 9.87599 3.66456 9.87599L14.9174 5.40509C14.9174 5.40509 15.8425 4.99349 15.8425 5.67599L13.8391 15.9093Z"
                        fill="black"
                />
            </svg>
        </a>
        <a class="social-ico" href="https://www.tiktok.com/@n_code.study" target="_blank">
            <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6.83333V16.1667C22 17.7138 21.3854 19.1975 20.2915 20.2915C19.1975 21.3854 17.7138 22 16.1667 22H6.83333C5.28624 22 3.80251 21.3854 2.70854 20.2915C1.61458 19.1975 1 17.7138 1 16.1667V6.83333C1 5.28624 1.61458 3.80251 2.70854 2.70854C3.80251 1.61458 5.28624 1 6.83333 1H16.1667C17.7138 1 19.1975 1.61458 20.2915 2.70854C21.3854 3.80251 22 5.28624 22 6.83333Z" fill="#0B2235" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.25 11.5C8.60721 11.5 7.97886 11.6906 7.4444 12.0477C6.90994 12.4048 6.49338 12.9124 6.24739 13.5063C6.00141 14.1001 5.93705 14.7536 6.06245 15.384C6.18785 16.0145 6.49738 16.5936 6.9519 17.0481C7.40642 17.5026 7.98552 17.8122 8.61596 17.9376C9.2464 18.063 9.89986 17.9986 10.4937 17.7526C11.0876 17.5066 11.5952 17.0901 11.9523 16.5556C12.3094 16.0211 12.5 15.3928 12.5 14.75V5C12.8608 6.08333 14.2333 8.25 16.8333 8.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
    </div>
    <div class="footer__copyright">
        <p>&#169; Компанія N-CODE 2023 - <span class="currentYear"></span></p>
        <a class="privacy-policy-link" href="privacy-policy.html">Політика конфідейнційності</a>
    </div>
    <div class="col logo-mobile">
        <a href="index.html">
            <img class="footer__logo" src="img/logo.svg" alt="logo" />
        </a>
    </div>
</div>
</footer>
`;

(function redirect() {
  const loginLink = document.querySelectorAll(".login-btn");
  const signupLink = document.querySelectorAll(".signup-btn");

  switch (window.location.host) {
    case "n-code-dev.xyz":
      loginLink.forEach((el) => (el.href = "https://my.n-code-dev.xyz/"));
      signupLink.forEach(
        (el) => (el.href = "https://my.n-code-dev.xyz/uk/#/signup")
      );
      break;
    case "n-code-release.in.net":
      loginLink.forEach(
        (el) => (el.href = "https://my.n-code-release.in.net/")
      );
      signupLink.forEach(
        (el) => (el.href = "https://my.n-code-release.in.net/uk/#/signup")
      );
      break;
    case "n-code.study":
      loginLink.forEach((el) => (el.href = "https://my.n-code.study/"));
      signupLink.forEach(
        (el) => (el.href = "https://my.n-code.study/uk/#/signup")
      );
      break;
    case "n-code-test.in.net":
      loginLink.forEach((el) => (el.href = "https://my.n-code-test.in.net/"));
      signupLink.forEach(
        (el) => (el.href = "https://my.n-code-test.in.net/uk/#/signup")
      );
      break;
    default:
      loginLink.forEach((el) => (el.href = "#"));
      signupLink.forEach((el) => (el.href = "#"));
  }
})();

(function motivationText() {
  const textEl = document.getElementById("motivation");
  const phrases = [
    "Вивчайте програмування та IT професії онлайн",
    "Репетитори мають досвід в IT від 1 до 10 років",
    "Кожен студент має персонального менеджера",
    "Підключення до чат-боту системи навчання",
    "Зручна форма оплати",
    "Допомагаємо підготуватись до співбесіди",
    "Допомагаємо з працевлаштуванням",
    "Видаємо сертифікат та рекомендації ",
  ];


function getRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function displayRandomPhrase() {
  textEl.classList.remove("fade-out");
  textEl.textContent = getRandomPhrase();
  textEl.classList.add("fade-in");

  setTimeout(() => {
    textEl.classList.remove("fade-in");
    textEl.classList.add("fade-out");
  }, 2000);
}

displayRandomPhrase();
setInterval(displayRandomPhrase, 3000); 


})();

(function getInputFile() {
  const input = document.querySelector("#file");
  const placeholder = document.querySelector(
    ".popup .input-wrapper .placeholder"
  );
  input.addEventListener("change", function () {
    const isPdf = input.files[0].name.endsWith(".pdf");
    const isDocx = input.files[0].name.endsWith(".docx");

    validFileMentor = isPdf || isDocx;

    placeholder.innerHTML = input.files[0].name;
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

(function closeMobMenu() {
  const hamburger_menu = document.querySelector(".hamburger-menu");
  const mob_menu = document.querySelector(".mob-menu");
  const menu__items = document.querySelectorAll(".menu__item");

  menu__items.forEach((el) => {
    el.addEventListener("click", function (e) {
      mob_menu.classList.remove("active");
      hamburger_menu.classList.remove("active");
    });
  })
})();

(function reloadPage() {
  let menuItem = document.querySelector(".main-item");
  let modal = document.querySelectorAll(".popup");
  modal.forEach((el) => {
    if(menuItem) {
      menuItem.addEventListener("click", function () {
        if (el.style.display === "block") {
          location.reload();
        }
      });
    }
  });
})();

function getApiUrl(type) {
  switch (window.location.host) {
    case "n-code-dev.xyz":
      return `https://api.n-code-dev.xyz/api/emails/${type}`;
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
      const source = document.querySelector(
        ".callback-form .select-wherefrom"
      ).value;
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

      if (
        validEmailMentor &&
        validFileMentor &&
        validPhoneMentor &&
        formData.get("name") &&
        formData.get("attachment").name
      ) {
        fetch(url, options, {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        })
          .then(() => {
            alert("Запит успішно відправлено");
            form.reset();

            const placeholder = document.querySelector(
              ".became-mentor-popup .input-wrapper .placeholder"
            );
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

if (emailInputCallback) {
  emailInputCallback.addEventListener("input", function () {
    let validationEmail =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    validEmailCallback = validationEmail.test(emailInputCallback.value.trim());

    emailInputCallback.style.borderColor = validEmailCallback ? "black" : "red";
  });
}
if (phoneInputCallback) {
  phoneInputCallback.addEventListener("input", function () {
    let validationPhone = /^(\+380|380|0)\d{9}$/;

    validPhoneCallback = validationPhone.test(phoneInputCallback.value.trim());

    phoneInputCallback.style.borderColor = validPhoneCallback ? "black" : "red";
  });
}

emailInputMentor.addEventListener("input", function () {
  let validationEmail =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

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
  const body = document.querySelector("body");
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
    document.querySelector(".footer").classList.add("iphone-mb-footer");
  }
})();

(function setCopiwrite() {
  var yearSpans = document.querySelectorAll('.currentYear');
  var currentYear = new Date().getFullYear();
  yearSpans.forEach(function(yearSpan) {
      yearSpan.innerText = currentYear;
  });
})();


// tutors
const tutorsWrapEl = document.getElementById('tutors');
const popUpTutorWrapEl = document.getElementById('tutorPopUp');

const tutorsList = 
[
  {
    name: "Влад",
    desc: " Влад – це наш викладач. Він провів більше 4 роки у програмуванні та працював над різними проектами. А ще, протягом приблизно півтора року, Влад ділиться своїми знаннями з молодшими розробниками(нашими студентами). Так що готуйтесь до крутих уроків разом з Владом!",
    imgUrl: "img/tutors/1.jpg",
    cource: "Front-End"
  },
  {
    name: "Михайло",
    desc: "Хочу вам представити Михайла – нашого викладача із багаторічним досвідом у ІТ. Він спеціалізується на JavaScript Fullstack розробці та має понад 10 років досвіду навчання, 8 з яких викладає саме в цьому напрямку індивідуально та в групах. У Михайла глибоке теоретичне та практичне розуміння базових технологій, таких як HTML, CSS, JavaScript та NodeJS, широкі знання та навички у Web, побудові клієнт-серверної взаємодії та роботі з базами даних. Також він мав менший попередній досвід з іншими мовами, як то Python, C#, PHP, Fort. Його допомогою скористалися вже більше 300 учнів. Та більше 30 повідомили, що успішно працевлаштувалися. Михайло охоче проводить заняття у будь-якому форматі на вибір студентів. Від занурення в фундаментальну теорію до парного програмування практичних проектів. Від імітації співбесід до допомоги з робочими задачами. Головне, що потрібне від вас - це задавати якомога більше запитань, не дозволяючи Михайлу надто швидко пройти повз щось, що ви не до кінця зрозуміли. Тож в жодному разі не соромтеся його перебивати, так ви зможете отримати максимальну користь.",
    imgUrl: "img/tutors/2.jpg",
    cource: "Front-End"
  },
  {
    name: "Яна",
    desc: "Яна – наша викладачка. Її досвід викладання триває більше 1 року Яна поділитися з вами своїми знаннями та разом з нею ви зможете зрозуміти й опанувати основи розробки.",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Андрій",
    desc: "Андрій – наш професійний викладач, який має науковий ступінь кандидата технічних наук. У світі веб-розробки він - досвідчений фахівець з понад 10-річним стажем. Його курси щодо HTML, CSS та JS – це цінний актив для будь-кого, хто прагне вивчити основи веб-розробки.",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Андрій",
    desc: "Представляємо вам Андрія, нашого кращого викладача. Він має короткий, але насичений досвід роботи на фрілансі протягом 3-5 місяців. Він приєднався до швейцарської компанії , де працює вже більше року. В загальному у Андрія більше двух років комерційного досвіду. Крім того, він викладає в N-Code, де ділиться своїми знаннями та досвідом. У своїй основній роботі Андрій працює з HTML, CSS, JS, React, Redux",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Олексій",
    desc: "Представляємо Олексія – нашого талановитого викладача. Досвід роботи у сфері веб-розробки- 3+ роки. Олексій експерт в HTML5, CSS3, SCSS, JavaScript (JS), TypeScript (TS), React, Redux, Next.js, MUI.  Його знання та досвід допоможуть Вам  опанувати  найсучасніші технології веб-розробки.",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Сергій",
    desc: "Дозвольте вас познайомити з Сергієм – нашим професіоналом з 2 роками комерційного досвіду. Він вже здобув великий практичний багаж з веб-розробки. Сергій готовий поділитися своїми знаннями та надати підтримку у навчанні.",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Сергій",
    desc: "Хочу Вам представити нашого викладача - Сергія.Наш найкращий викладач по  технології React. Срезіалізується також на HTML, CSS, JS, TS. У свій вільний час любить викладати студентам і тому готовий поділитися з вами своїм досвідом та навиками.",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Руслан",
    desc: "Дозвольте представити вам нашого викладача - Руслана, який є справжнім майстром у світі інформаційних технологій. З досвідом роботи понад 35 років у різноманітних компаніях, Руслан неустанно вдосконалював свої навички та знання. Руслан спеціалізується на широкому спектрі програмування, з особливою увагою до веб-технологій, включаючи HTML, CSS та JavaScript. Його глибокі знання та розуміння цих технологій роблять його винятковим наставником для наших студентів. Руслан не просто ділиться своїм досвідом; він справжній наставник, готовий допомогти студентам зростати та розвиватися в галузі інформаційних технологій, акцентуючи на важливості глибокого розуміння основ програмування та їх застосування у розробці веб-додатків. З таким багатством знань та досвіду, Руслан готовий надихнути та направити наших студентів до досягнення нових вершин у сфері ІТ, роблячи акцент на різноманітті та потужності сучасних веб-технологій.",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Iлля",
    desc: "Це  наш викладач, Ілля, який є справжнім експертом у сфері фронтенд-розробки. Ілля має вражаючий досвід у цій галузі - понад 10 років. Протягом цього часу він відзначився як видатний фахівець, звертаючи понад 150 проектів різного масштабу, включаючи лендінги, великі інтернет-магазини та портали. Ілля спеціалізується на  HTML, CSS, та JavaScript, і його глибокі знання цих технологій роблять його ідеальним викладачем для наших студентів. Крім того, Ілля також спеціалізується на Vue.js, одному з найпопулярніших фреймворків для розробки веб-додатків.",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Ярослав",
    desc: "Хочу представити вам нашого викладача - Ярослава. Ваш викладач - це досвідчений професіонал,який має 3 роки досвіду у різних сфері програмного тестування. У своїй роботі викладач використовує широкий спектр інструментів та технологій, таких як Postman, DBeaver, IntellijIdea, JMeter, Java, Selenium WebDriver, щоб створювати високоякісні програмні продукти та забезпечувати їх якість. Він  хоче ділитися з вами своїм досвідом та знаннями. Не соромтеся звертатися до нього з питаннями та проханнями під час навчання.",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "QA"
  },
  {
    name: "Олександр",
    desc: "Хочу вас познайомити з нашим талановитим викладачем Олександром. Викладач спеціалізується на викладанні HTML/CSS/JS/React. Його комерційний досвід, а також навики допоможуть вам досягнути поставлених цілей.Олександр завжди готовий допомогти вам з різними питаннями, передати вам свій досвід, а також підтримувати і мотивувати вас.",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Андрій",
    desc: "Сьогодні я хочу представити вам вашого викладача -Андрія.Розробник комерційного програмного забезпечення протягом 4 років. Backend програміст та загалом software engineer. Займався розробкою Low Code\No Code платформи, автоматизацією бізнес процессів. Працював в Acropolium та Innora.",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "C#"
  },
  {
    name: "Артем",
    desc: "Познайомтеся з Артемом - нашим відмінним фахівцем у сфері фронтенд розробки. Він має за спиною 4 роки комерційного досвіду та багаторічний стаж викладання. Готовий допомогти вам освоїти всі аспекти програмування для розробки веб-інтерфейсів, використовуючи HTML, CSS, JavaScript та React. Якщо у вас виникнуть будь-які питання, не соромтеся звертатися",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Андріан",
    desc: "Познайомтеся з Артемом - нашим відмінним фахівцем у сфері фронтенд розробки. Він має за спиною 4 роки комерційного досвіду та багаторічний стаж викладання. Готовий допомогти вам освоїти всі аспекти програмування для розробки веб-інтерфейсів, використовуючи HTML, CSS, JavaScript та React. Якщо у вас виникнуть будь-які питання, не соромтеся звертатися",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "С++"
  }
];

const tutorItemHTML = `
<div class="tutors-card">
  <div class="tutors-card__top">
    <div class="tutors-card__img">
      <img src="{{img}}" alt="tutor" />
    </div>
    <div class="tutors-card__course">
      <p>Курс:</p>
      <p>{{cource}}</p>
    </div>
  </div>
  <div class="tutors-card__info">
    <p class="tutors-card__name">{{name}}</p>
    <p class="tutors-card__description">{{desc}}</p>
    <a class="tutors-card__course-link more-info-link" href="" data-trigger="{{trigger}}">Опис повністю</a>
  </div>
</div>
`;

const popUpTutorHtml = `
<div class="popup mentor-info-popup" data-content-mentor="{{trigger}}">
    <div class="popup-body">
      <div class="popup__close"></div>
        <div class="popup-content">
          <div class="popup__close">Назад</div>
          <div class="mentor-info-popup__top">
            <div class="popup__img">
              <img src="{{img}}" alt="tutor" />
              <div>
                <p class="popup__name">{{name}}</p>
                <div class="tutors-card__rate">
                  <i class="mentors__star fa-solid fa-star"></i>
                  <i class="mentors__star fa-solid fa-star"></i>
                  <i class="mentors__star fa-solid fa-star"></i>
                  <i class="mentors__star fa-solid fa-star"></i>
                  <i class="mentors__star fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="mentor-info-popup__bottom">
          <div class="mentor-info__block">
          <p>
            {{desc}}
          </p>
          </div>
          <div class="card__details">
            <div class="card__details-item">
              <p class="mentor-info__course-title">Курс:</p>
              <p>{{cource}}</p>
            </div>
            <a class="btn" href="#callback-section">замовити безкоштовний урок</a>
          </div>
        </div>
        {{footer}}
      </div>
    </div>
  </div>
`;

let allTutorPopUpsHTML = '';
let allTutorsHTML = '';

tutorsList.forEach((tutor, index) => {
  const desc = tutor.desc.length > 200 ? `${tutor.desc.substring(0, 200)} ...` : tutor.desc;

  const html = tutorItemHTML
  .replace('{{img}}', tutor.imgUrl)
  .replace('{{name}}', tutor.name)
  .replace('{{desc}}', desc)
  .replace('{{cource}}', tutor.cource)
  .replace('{{trigger}}', index);

  const popupHtml = popUpTutorHtml
  .replace('{{img}}', tutor.imgUrl)
  .replace('{{name}}', tutor.name)
  .replace('{{desc}}', tutor.desc)
  .replace('{{cource}}', tutor.cource)
  .replace('{{trigger}}', index)
  .replace('{{footer}}', footerHTML);

  allTutorsHTML += html;
  allTutorPopUpsHTML += popupHtml;
})
tutorsWrapEl.innerHTML = allTutorsHTML;
popUpTutorWrapEl.innerHTML = allTutorPopUpsHTML;


// feedbacks

const feedbackWrapEl = document.getElementById('feedbacks');
const popUpFeedbackWrapEl = document.getElementById('feedbackPopUp');

const feedbackList = 
[
  {
    name: "Михайло",
    tutor: "Вася",
    desc: "Хочемо вам представити Михайла – нашого викладача із 25-річним досвідом у ІТ. Він спеціалізується на JavaScript.",
    imgUrl: "img/feedback/man.svg",
    cource: "Front-End"
  },
  {
    name: "Михайло2",
    tutor: "Вася",
    desc: "2Хочемо вам представити Михайла – нашого викладача із 25-річним досвідом у ІТ. Він спеціалізується на JavaScript.",
    imgUrl: "img/feedback/woman.svg",
    cource: "Front-End"
  },
  {
    name: "Михайло3",
    tutor: "Вася",
    desc: "3Хочемо вам представити Михайла – нашого викладача із 25-річним досвідом у ІТ. Він спеціалізується на JavaScript.",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Михайло4",
    tutor: "Вася",
    desc: "4Хочемо вам представити Михайла – нашого викладача із 25-річним досвідом у ІТ. Він спеціалізується на JavaScript...",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Михайло",
    tutor: "Вася",
    desc: "Хочемо вам представити Михайла – нашого викладача із 25-річним досвідом у ІТ. Він спеціалізується на JavaScript...",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Михайло2",
    tutor: "Вася",
    desc: "2Хочемо вам представити Михайла – нашого викладача із 25-річним досвідом у ІТ. Він спеціалізується на JavaScript...",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Михайло3",
    tutor: "Вася",
    desc: "3Хочемо вам представити Михайла – нашого викладача із 25-річним досвідом у ІТ. Він спеціалізується на JavaScript...",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  },
  {
    name: "Михайло4",
    tutor: "Вася",
    desc: "4Хочемо вам представити Михайла – нашого викладача із 25-річним досвідом у ІТ. Він спеціалізується на JavaScript...",
    imgUrl: "img/tutors/andriy_kl.jpeg",
    cource: "Front-End"
  }
];

const feedbackItemHTML = `
<div class="tutors-card">
  <div class="tutors-card__top">
    <div class="tutors-card__img">
      <img src="{{img}}" alt="tutor" />
    </div>
    <div>
      <p class="tutors-card__name">{{name}}</p>
      <div class="tutors-card__rate">
        <i class="mentors__star fa-solid fa-star"></i><i class="mentors__star fa-solid fa-star"></i
        ><i class="mentors__star fa-solid fa-star"></i><i class="mentors__star fa-solid fa-star"></i
        ><i class="mentors__star fa-solid fa-star"></i>
      </div>
    </div>
  </div>
  <div class="card__info">
    <p class="tutors-card__description">{{desc}}</p>
    <div class="card__details">
      <div class="card__details-item">
        <h5 class="card__detail-h5">Курс:</h5>
        <h6 class="card__detail-h6">{{cource}}</h6>
      </div>
      <div class="card__details-item">
        <h5 class="card__detail-h5">Репетитор:</h5>
        <h6 class="card__detail-h6">{{tutor}}</h6>
      </div>
    </div>
    <a class="tutors-card__course-link more-info-link" data-trigger="{{trigger}}">Відгук повністю</a>
  </div>
</div>
`;

const popUpFeedbackHtml = `
<div class="popup feedback-popup" data-content="{{trigger}}">
<div class="popup-body">
  <div class="popup__close"></div>
  <div class="close__popup-element">
      <div class="popup__close">назад</div>
  </div>
  <div class="popup__img">
      <img src="{{img}}" alt="tutor" />
      <div>
        <p class="popup__name">{{name}}</p>
        <div class="tutors-card__rate">
          <i class="mentors__star fa-solid fa-star"></i>
          <i class="mentors__star fa-solid fa-star"></i>
          <i class="mentors__star fa-solid fa-star"></i>
          <i class="mentors__star fa-solid fa-star"></i>
          <i class="mentors__star fa-solid fa-star"></i>
      </div>
    </div>
  </div>
  <p class="feedback-popup__text">{{desc}}</p>
  <div class="feedback__footer-description">
    <div class="card__details">
      <div class="feedback-popup__item">
        <p class="mentor-info__course-title">Курс:</p>
        <p>{{cource}}</p>
      </div>
      <div class="feedback-popup__item">
        <p>Репетитор:</p>
        <p>{{tutor}}</p>
    </div>
      <a class="btn" href="#callback-section">замовити безкоштовний урок</a>
    </div>
  </div>
  {{footer}}
</div>
</div>
`;

let allFeedbackPopUpsHTML = '';
let allFeedbackHTML = '';

feedbackList.forEach((feedback, index) => {
  const desc = feedback.desc.length > 200 ? `${feedback.desc.substring(0, 200)} ...` : feedback.desc;

  const html = feedbackItemHTML
  .replace('{{img}}', feedback.imgUrl)
  .replace('{{name}}', feedback.name)
  .replace('{{desc}}', desc)
  .replace('{{cource}}', feedback.cource)
  .replace('{{tutor}}', feedback.tutor)
  .replace('{{trigger}}', index);

  const popupHtml = popUpFeedbackHtml
  .replace('{{img}}', feedback.imgUrl)
  .replace('{{name}}', feedback.name)
  .replace('{{desc}}', feedback.desc)
  .replace('{{cource}}', feedback.cource)
  .replace('{{trigger}}', index)
  .replace('{{tutor}}', feedback.tutor)
  .replace('{{footer}}', footerHTML);

  allFeedbackHTML += html;
  allFeedbackPopUpsHTML += popupHtml;
})
feedbackWrapEl.innerHTML = allFeedbackHTML;
popUpFeedbackWrapEl.innerHTML = allFeedbackPopUpsHTML;