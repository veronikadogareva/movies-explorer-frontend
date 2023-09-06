import React from 'react';
import './Login.css';
import WindowWithForm from '../WindowWithForm/WindowWithForm';
import Input from '../Input/Input';
function Login({logo}) {
  return (
    <section className="login">
      <WindowWithForm logo={logo} title="Рады видеть!" textButton="Войти" textCaption="Ещё не зарегистрированы?" textLink="Регистрация" linkPath="/signup">
      <Input type="email" key="email" labelText="E-mail"/>
      <Input type="password" key="password" labelText="Пароль" />
      </WindowWithForm>
    </section>
  )
}
export default Login;