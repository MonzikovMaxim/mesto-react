import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(props) {
  return (
    <PopupWithForm
    name="card-delete"
    isOpen={props.isOpen}
    onClose={props.onClose}
    formName="popup-delete"
    onSubmit={props.onSubmit}
    title="Вы уверены?"
    buttonText="Да"
    >

    </PopupWithForm>
  )
}

export default DeleteCardPopup;