import React, {useState, useEffect} from 'react';
import { api } from '../utils/Api.js'
import Card from './Card';

function Main(props) {
const [userName, setUserName] = useState('');
const [userDescription, setUserDescription] = useState('');
const [userAvatar, setUserAvatar] = useState('');
const [cards, setCards] = useState([]);

useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userInfo, cards]) => {
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);
      setCards(cards);
      })
      .catch(error => console.log(error));
  }, [])

  return (
    <>
    <section className="profile container">
      <div className="profile__data">
        <div className="profile__box">
          <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}></button>
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
        </div>  
          <div className="profile__info">
            <div className="profile__name-edit">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
      </div>
      <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
    </section>
    <section className="cards container">
      <ul className="cards__list">
      {cards.map(card => {
        return <Card key={card._id} name={card.name} link={card.link} alt={card.name} onClickCard={props.onClickCard} />
      })}
      </ul>
    </section>
  </>
  )
}

export default Main;