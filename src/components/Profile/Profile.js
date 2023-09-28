import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { EMAIL_VALID, NAME_VALID } from '../../utils/constants';
import ProfileInput from '../ProfileInput/ProfileInput';
import Button from '../Button/Button';
import useFormControl from '../../utils/useFormControl';
import { AppContext } from '../../contexts/AppContext';
function Profile({ handleOpenEditButton, isEditButtonOpen, handleExit, userInfo, handleUpdateUserUnfo, serverError }) {
  const [isInfoUnchanged, setIsInfoUnchanged] = useState(false);
  const [isValid, setIsValid] = useState();
  const { isLoading } = useContext(AppContext);
  const inputControl = useFormControl({ name: userInfo.name, email: userInfo.email });
  useEffect(() => {
    inputControl.setIsValid(true);
  }, []);

  useEffect(() => {
    if (inputControl.values.name === userInfo.name && inputControl.values.email === userInfo.email) {
      setIsInfoUnchanged(false);
    } else {
      setIsInfoUnchanged(true);
    }
  }, [inputControl.values.name, inputControl.values.email]);
  useEffect(() => {
    setIsValid(inputControl.isValid && isInfoUnchanged && !isLoading);
  }, [isInfoUnchanged, inputControl.isValid]);
  const { name, email } = inputControl.errors;
  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUserUnfo(inputControl.values);
    // inputControl.resetForm();
    setIsInfoUnchanged(false);
  }
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {userInfo.name}!</h1>
      <form className="profile__form" name="form-profile" onSubmit={handleSubmit}>
        <ProfileInput isEdit={isEditButtonOpen} span="Имя" type="text" placeholder="Ваше имя" name="name" onChange={inputControl.handleChange} value={inputControl.values.name}
          pattern={NAME_VALID} errorText={name} />
        <ProfileInput isEdit={isEditButtonOpen} span="E-mail" type="email" placeholder="Ваш email" name="email" onChange={inputControl.handleChange} value={inputControl.values.email}
          pattern={EMAIL_VALID} errorText={email} />
        {isEditButtonOpen && <Button text={isLoading ? "Сохранение..." : "Сохранение"} isDisable={!isValid} serverError={serverError} />}
      </form>
      {!isEditButtonOpen && <>
        <span className="error">{serverError}</span>
        <button className="profile__button" type="button" onClick={handleOpenEditButton}>Редактировать</button>
        <button className="profile__button profile__button_type_exit" type="button" onClick={handleExit} >Выйти из аккаунта</button>
      </>}
    </section>
  )
}
export default Profile;