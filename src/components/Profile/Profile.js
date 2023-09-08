import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import ProfileInput from '../ProfileInput/ProfileInput';
import Button from '../Button/Button';
function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  function handleEditButton() {
    setIsEdit(!isEdit);
  }
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form" name="form-profile">
        <ProfileInput isEdit={isEdit} span="Имя" type="text" value="Виталий" placeholder="Ваше имя" name="profile-name"/>
        <ProfileInput isEdit={isEdit}  span="E-mail" type="email" value="pochta@yandex.ru" placeholder="Ваш email" name="profile-email"/>
        {isEdit && <>
          <span className="profile__error">Ошибка</span>
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