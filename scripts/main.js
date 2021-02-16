let overlay = document.querySelector('.edit-form');
let formOpenButton = document.querySelector('.profile__edit-button');
let formCloseButton = overlay.querySelector('.edit-form__close');
let formSaveButton = overlay.querySelector('.edit-form__submit-button');
let form = overlay.querySelector('.edit-form__container');

let inputName = overlay.querySelector('.edit-form__input[name="name"]');
let inputProfession = overlay.querySelector('.edit-form__input[name="profession"]');

let inputNameText = document.querySelector('.profile__title');
let inputProfessionText = document.querySelector('.profile__subtitle');


let toggleForm = function () {
  overlay.classList.toggle('edit-form_opened');
  inputName.value = inputNameText.textContent;
  inputProfession.value = inputProfessionText.textContent;
}

let saveForm = function (evt) {
  evt.preventDefault();
  inputNameText.textContent = inputName.value;
  inputProfessionText.textContent = inputProfession.value;
  toggleForm();
}

formOpenButton.addEventListener('click', toggleForm);
formCloseButton.addEventListener('click', toggleForm);

form.addEventListener('submit', saveForm); 


