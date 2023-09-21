import React, { useContext, useEffect } from 'react';
import './Profile.css';
import ProfileInput from '../ProfileInput/ProfileInput';
import Button from '../Button/Button';
import useFormControl from '../../utils/useFormControl';
import { AppContext } from '../../contexts/AppContext';
function Profile({ handleOpenEditButton, isEditButtonOpen, handleExit, userInfo, handleUpdateUserUnfo, serverError }) {
  const { isLoading } = useContext(AppContext);
  const inputControl = useFormControl({ name: userInfo.name, email: userInfo.email });
  useEffect(() => {
    inputControl.setIsValid(true);
  }, []);

  const { name, email } = inputControl.errors;
  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUserUnfo(inputControl.values);
    // inputControl.resetForm();
  }
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {userInfo.name}!</h1>
      <form className="profile__form" name="form-profile" onSubmit={handleSubmit}>
        <ProfileInput isEdit={isEditButtonOpen} span="Имя" type="text" placeholder="Ваше имя" name="name" onChange={inputControl.handleChange} value={inputControl.values.name}
          pattern="^[A-Za-zА-Яа-яЁё\s-]+$" errorText={name} />
        <ProfileInput isEdit={isEditButtonOpen} span="E-mail" type="email" placeholder="Ваш email" name="email" onChange={inputControl.handleChange} value={inputControl.values.email}
          pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" errorText={email} />
        {isEditButtonOpen && <Button text={isLoading ? "Сохранение..." : "Сохранение"} isDisable={!inputControl.isValid} serverError={serverError}/>}
      </form>
      {!isEditButtonOpen && <>
        <button className="profile__button" type="button" onClick={handleOpenEditButton}>Редактировать</button>
        <button className="profile__button profile__button_type_exit" type="button" onClick={handleExit} >Выйти из аккаунта</button>
      </>}
    </section>
  )
}
export default Profile;