import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
    name="card-avatar"
    isOpen={props.isOpen}
    onClose={props.onClose}
    formName="popup-avatar"
    onSubmit={props.onSubmit}
    title="Обновить аватар?"
    buttonText="Да"
    
  >
    <input type="url" id="avatar" className="popup__input popup__avatar-link" name="avatarLink" placeholder="Ссылка" autoComplete="off" required />
    <span className="popup__input-error" id="avatar-error"></span>

    </PopupWithForm>
  )
}

export default EditAvatarPopup;