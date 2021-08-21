import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddCardPopup(props) {
  return (
    <PopupWithForm 
    name="card-add" 
    isOpen={props.isOpen}
    onClose={props.onClose}
    formName="popup-add"
    onSubmit={props.onSubmit}
    title="Новое место"
    buttonText="Сохранить"
    >
    <input 
    type="text" 
    id="title" 
    minLength="2" 
    maxLength="30" 
    className="popup__input popup__input-title" 
    name="cardTitle" 
    placeholder="Название" 
    autoComplete="off" 
    required     
    />
    <span className="popup__input-error" id="title-error"></span>
    <input 
    type="url" 
    id="url" 
    className="popup__input popup__input-link" 
    name="cardLink" 
    placeholder="Ссылка" 
    autoComplete="off" 
    required   
    />
    <span className="popup__input-error" id="url-error"></span>
    </PopupWithForm>
  )
}

export default AddCardPopup;