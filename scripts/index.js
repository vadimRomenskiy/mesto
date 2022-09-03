const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupEdit = document.querySelector('.profile__edit-button');
const popupName = document.querySelector('.popup__input-name');
const popupProfes = document.querySelector('.popup__input-profession');
const popupSubmit = document.querySelector('.popup__submit-button');
const popupTitle = document.querySelector('.profile__name');
const popupSubtitle = document.querySelector('.profile__text');

popupEdit.addEventListener('click', () => {
    popup.classList.add('popup_opened');
    popupName.value = popupTitle.textContent;
    popupProfes.value = popupSubtitle.textContent;
})

popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
})


let popupForm = document.querySelector('.popup__form'); 

function formSubmitHandler (evt) { 
evt.preventDefault();  
popupTitle.textContent = popupName.value; 
popupSubtitle.textContent = popupProfes.value; 
popup.classList.remove('popup_opened');
};

popupForm.addEventListener('submit', formSubmitHandler); 