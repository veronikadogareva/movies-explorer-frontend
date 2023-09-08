import React from 'react';
import './Login.css';
import WindowWithForm from '../WindowWithForm/WindowWithForm';
import Input from '../Input/Input';
function Login({ logo }) {
  return (
    <section className="login">
      <WindowWithForm logo={logo} title="Рады видеть!" textButton="Войти" textCaption="Ещё не зарегистрированы?" textLink="Регистрация" linkPath="/signup" name="form-login">
        <Input type="email" labelText="E-mail" placeholder="Введите email" name="email"/>
        <Input type="password" labelText="Пароль" placeholder="Введите пароль" name="password"/>
      </WindowWithForm>
    </section>
  )
}
export default Login;