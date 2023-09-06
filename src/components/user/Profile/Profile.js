import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Input from './Input/Input';
import Button from '../Button/Button';
function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  function handleEditButton() {
    setIsEdit(!isEdit);
  }
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <Input isEdit={isEdit} id="profile-name" span="Имя" type="text" value="Виталий" />
        <Input isEdit={isEdit} id="profile-email" span="E-mail" type="email" value="pochta@yandex.ru" />
        {isEdit && <>
          <span className="profile__error"></span>
          <Button text="Сохранить" />
        </>}
      </form>
      {!isEdit && <>
        <button className="profile__button" type="button" onClick={handleEditButton}>Редактировать</button>
        <Link className="profile__button profile__button_type_exit" type="button" to="/signin">Выйти из аккаунта</Link>
      </>}
    </section>
  )
}
export default Profile;