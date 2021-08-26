import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, onClose, onSubmit }) {
  return (
    <PopupWithForm
      name="card-delete"
      isOpen={isOpen}
      onClose={onClose}
      formName="popup-delete"
      onSubmit={onSubmit}
      title="Вы уверены?"
      buttonText="Да"
    />
  );
}

export default DeleteCardPopup;
