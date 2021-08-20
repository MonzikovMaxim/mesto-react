 class Api {
  constructor(data) {
    this._url = data.url;
    this._token = data.token;
  }

  _checkStatus= (res) => {
    if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token,
      },
    })
    .then((res) => this._checkStatus(res));
  }
  
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
      },
    })
    .then((res) => this._checkStatus(res));
  }

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
    })
  })
  .then((res) => this._checkStatus(res));
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then((res) => this._checkStatus(res));
  }

  deleteCard(_id) {
    return fetch(`${this._url}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,   
      'Content-Type': 'application/json',
      },
  })  
  .then((res) => this._checkStatus(res));
 }

 setLike(cardId) {
  return fetch(`${this._url}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
  })
  .then((res) => this._checkStatus(res));
}

deleteLike(cardId) {
  return fetch(`${this._url}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
  })
  .then((res) => this._checkStatus(res));
}

  changeAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      avatar: data.avatar
    })
  })  
  .then((res) => this._checkStatus(res));
  }
  
}

const api = new Api ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-26',
  token: '9994d482-0445-4f51-baf1-565eed9da0d7'
})

export { api };