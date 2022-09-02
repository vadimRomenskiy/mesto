const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupEdit = document.querySelector('.profile__edit-button');
const popupName = document.querySelector('.popup__input_name');
const popupProfes = document.querySelector('.popup__input_profession');
const popupSubmit = document.querySelector('.popup__submit-button');
const popupTitle = document.querySelector('.profile__name');
const popupSubtitle = document.querySelector('.profile__text');

popupEdit.addEventListener('click', () => {
    popup.classList.add('popup_open');
    popupName.value = popupTitle.textContent;
    popupProfes.value = popupSubtitle.textContent;
})

popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_open');
})


let popupForm = document.querySelector('.popup__form'); 

function formSubmitHandler (evt) { 
evt.preventDefault();  
popupTitle.textContent = popupName.value; 
popupSubtitle.textContent = popupProfes.value; 
popup.classList.remove('popup_open');
};

popupForm.addEventListener('submit', formSubmitHandler); 