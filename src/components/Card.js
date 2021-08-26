import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  function handleClick() {
    props.onClickCard(props);
  }
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <li className="card">
      <img
        className="card__image"
        src={props.link}
        alt={props.name}
        onClick={handleClick}
      />
      <div className="card__block">
        <h2 className="card__title">{props.name}</h2>
      </div>
      <button type="button" className="card__trash-button"></button>
      <button type="button" className="card__like-button"></button>
      <div className="card__like-counter">0</div>
    </li>
  );
}

export default Card;
