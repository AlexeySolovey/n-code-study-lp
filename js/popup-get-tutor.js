const popupGetTutorHtml = `
    <div class="popup popap-templ became-mentor-popup">
      <div class="popup-body popup-body_unlimited">
        <div class="popup__close"></div>
        <div class="popup__title-group">
          <h2 class="popup__title">Стати репетитором</h2>
          <p class="popup__sub-title">Залиште Ваші контактні дані, і ми Вам обов'язково зателефонуємо!</p>
        </div>
        <span class="back-link">Назад </span>
        <form class="form" action="POST" id="mentorForm">
          <label class="required" for="name">
            <input class="name" type="text" id="name" name="name" placeholder="Ім’я та Прізвище" required="required" />
          </label>
          <label class="required" for="phone">
            <input class="phone" type="phone" name="phone" placeholder="Номер телефону" required="required" />
          </label>
          <label class="required" for="email">
            <input class="email" type="email" id="email" name="email" placeholder="E-mail" required="required" />
          </label>
          <div class="input-wrapper">
            <label class="required file-upload" for="file">
              <span class="placeholder">Прикріпити файл з резюме</span>
              <input id="file" class="file" type="file" name="attachment" accept=".pdf,.docx" required="required" />
            </label>
            <label for="linkedIn">
              <input class="link" id="linkedIn" type="text" name="linkedIn" placeholder="LinkedIn" />
            </label>
          </div>
          <textarea class="comment" name="comment" placeholder="Коментар (не обов’язково)"></textarea>
          <div class="form__btn">
            <button class="btn" type="submit">Надіслати заявку</button>
          </div>
        </form>
    </div>
</div>`;

const popupGetTutorWrapEl = document.getElementById('get-tutor-popup');
if(popupGetTutorWrapEl) {
    popupGetTutorWrapEl.innerHTML = popupGetTutorHtml;
}