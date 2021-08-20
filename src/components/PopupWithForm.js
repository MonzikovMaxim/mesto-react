import React from 'react'

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_open' : ''}`}>
      <div className="popup__container popup__container-small">
        <button type="button" className="popup__close-button" onClick={props.onClose} />
        <form className="popup__form" name={props.formName} onSubmit={props.onSubmit}>
          <h2 className="popup__title">{props.title}</h2>
            {props.children}
          <button type="submit" className="popup__save-button">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;