import React from 'react';
import './Register.css';
import WindowWithForm from '../WindowWithForm/WindowWithForm';
import Input from '../Input/Input';
function Register({ logo }) {
  return (
    <section className="register">
      <WindowWithForm logo={logo} title="Добро пожаловать!" textButton="Зарегистрироваться" textCaption="Уже зарегистрированы?" textLink="Войти" linkPath="/signin" name="form-register">
        <Input type="text" key="name" labelText="Имя" placeholder="Введите имя"/>
        <Input type="email" key="email" labelText="E-mail" placeholder="Введите email"/>
        <Input type="password" key="password" labelText="Пароль" error="Что-то пошло не так..." placeholder="Введите пароль"/>
      </WindowWithForm>
    </section>
  )
}
export default Register;