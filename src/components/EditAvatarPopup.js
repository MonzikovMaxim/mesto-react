import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onSubmit }) {
  return (
    <PopupWithForm
      name="card-avatar"
      isOpen={isOpen}
      onClose={onClose}
      formName="popup-avatar"
      onSubmit={onSubmit}
      title="Обновить аватар?"
      buttonText="Да"
    >
      <input
        type="url"
        id="avatar"
        className="popup__input popup__avatar-link"
        name="avatarLink"
        placeholder="Ссылка"
        autoComplete="off"
        required
      />
      <span className="popup__input-error" id="avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
