import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  return (
    <PopupWithForm 
    name="popup popup_type_profile"
    isOpen={props.isOpen}
    onClose={props.onClose}
    formName="popup-edit"
    onSubmit={props.onSubmit}
    title="Редактировать профиль"
    buttonText="Сохранить"
    >
    <input 
    type="text" 
    id="name" 
    minLength="2" 
    maxLength="40" 
    className="popup__input popup__input-name" 
    name="name" 
    placeholder="Имя"  
    autoComplete="off" 
    required 
    />
    <span className="popup__input-error" id="name-error"></span>
    <input 
    type="text" 
    id="job" 
    maxLength="200" 
    minLength="2" 
    className="popup__input popup__input-job" 
    name="job" 
    placeholder="О себе"  
    autoComplete="off" 
    required />

    <span className="popup__input-error" id="job-error"></span> 

    </PopupWithForm>
  )
}

export default EditProfilePopup;