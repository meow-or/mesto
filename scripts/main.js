const overlay = document.querySelector('.edit-form');
const formOpenButton = document.querySelector('.profile__edit-button');
const formCloseButton = overlay.querySelector('.edit-form__close');
const form = overlay.querySelector('.edit-form__container');

const inputName = overlay.querySelector('.edit-form__input[name="name"]');
const inputProfession = overlay.querySelector('.edit-form__input[name="profession"]');

const inputNameText = document.querySelector('.profile__title');
const inputProfessionText = document.querySelector('.profile__subtitle');


const toggleForm = function () {
  overlay.classList.toggle('edit-form_opened');
  inputName.value = inputNameText.textContent;
  inputProfession.value = inputProfessionText.textContent;
}

const saveForm = function (evt) {
  evt.preventDefault();
  inputNameText.textContent = inputName.value;
  inputProfessionText.textContent = inputProfession.value;
  toggleForm();
}

formOpenButton.addEventListener('click', toggleForm);
formCloseButton.addEventListener('click', toggleForm);

form.addEventListener('submit', saveForm); 


