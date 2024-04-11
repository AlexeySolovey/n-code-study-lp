const sectionHTML = `
<form class="form" id="callbackForm">
    <label class="required">
    <input maxlength="30" class="name" type="text" name="name" placeholder="Ім’я" required="required" title="будь ласка, заповніть це поле" />
    </label>
    <div class="input-wrapper">
    <label class="required" for="phone">
        <input class="phone" type="phone" id="phone" name="phone" placeholder="Номер телефону" required="required" title="будь ласка, заповніть це поле" />
    </label>
    <label class="required">
        <input class="email" type="email" name="email" placeholder="E-mail" required="required" title="будь ласка, заповніть це поле" />
    </label>
    </div>
    <select class="select-wherefrom custom-select" name="wherefrom" id="wherefrom">
    <option value="google">З пошукової системи (Google)</option>
    <option value="social">Із соціальної мережі (Facebook, Instagram)</option>
    <option value="friends">Від друзів чи знайомих</option>
    </select>
    <textarea maxlength="300" class="comment" name="comment" placeholder="Повідомлення"></textarea>
    <div class="form__btn">
    <button class="btn" type="submit">Надіслати</button>
    </div>
</form>
`;

const callbackFormEl = document.getElementById('callbackFormWrap');
if(callbackFormEl) {
    callbackFormEl.innerHTML = sectionHTML;
}


