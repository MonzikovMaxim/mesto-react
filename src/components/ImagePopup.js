import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.isOpen ? 'popup_open' : ''}`}>
      <figure className="fullscreen">
        <button type="button" className="popup__close-button" onClick={props.onClose}/>
        <img className="fullscreen__image" alt={props.card.name} src={props.card.link}/>
        <figcaption className="fullscreen__caption">{props.card.name}</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup