let overlay = document.querySelector('.edit-form');
let formOpenButton = document.querySelector('.profile__edit-button');
let formCloseButton = overlay.querySelector('.edit-form__close');
let formSaveButton = overlay.querySelector('.edit-form__submit-button');

let inputName = overlay.querySelector('.edit-form__input_name');
let inputProfession = overlay.querySelector('.edit-form__input_profession');
let inputNameText = document.querySelector('.profile__title');
let inputProfessionText = document.querySelector('.profile__subtitle');

inputName.value = inputNameText.textContent;
inputProfession.value = inputProfessionText.textContent;

let toggleForm = function () {
  overlay.classList.toggle('edit-form_opened');
}

function saveForm (evt) {

  evt.preventDefault();
  
  inputNameText.textContent = inputName.value;
  inputProfessionText.textContent = inputProfession.value;

  toggleForm();
}

formOpenButton.addEventListener('click', toggleForm);
formCloseButton.addEventListener('click', toggleForm);

formSaveButton.addEventListener('submit', saveForm); 


