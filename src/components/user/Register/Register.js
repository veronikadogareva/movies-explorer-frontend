import React from 'react';
import './Register.css';
import WindowWithForm from '../WindowWithForm/WindowWithForm';
import Input from '../Input/Input';
function Register({logo}) {
  return (
    <section className="register">
      <WindowWithForm logo={logo} title="Добро пожаловать!" textButton="Зарегистрироваться" textCaption="Уже зарегистрированы?" textLink="Войти" linkPath="/signin">
      <Input type="text" key="name" labelText="Имя"/>
      <Input type="email" key="email" labelText="E-mail"/>
      <Input type="password" key="password" labelText="Пароль" error="Что-то пошло не так..."/>
      </WindowWithForm>
    </section>
  )
}
export default Register;