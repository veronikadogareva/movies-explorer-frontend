import React, { useContext } from 'react';
import './Login.css';
import WindowWithForm from '../WindowWithForm/WindowWithForm';
import Input from '../Input/Input';
import useFormControl from '../../utils/useFormControl';
import { AppContext } from '../../contexts/AppContext';
function Login({ handleLogin, serverError }) {
  const { isLoading } = useContext(AppContext);
  const inputControl = useFormControl({ email: '', password: '' });
  const { email, password } = inputControl.errors;

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(inputControl.values);
    inputControl.resetForm({ email: '', password: '' });
  }
  return (
    <section className="login">
      <WindowWithForm title="Рады видеть!" textButton={isLoading ? "Вход..." : "Войти"} textCaption="Ещё не зарегистрированы?" textLink="Регистрация"
        linkPath="/signup" name="form-login" handleSubmit={handleSubmit} buttonIsDisable={!inputControl.isValid} serverError={serverError}>
        <Input type="email" labelText="E-mail" placeholder="Введите email" name="email" handleChange={inputControl.handleChange} value={inputControl.values.email} pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" errorText={email} />
        <Input type="password" labelText="Пароль" placeholder="Введите пароль" name="password" handleChange={inputControl.handleChange} value={inputControl.values.password} errorText={password} />
      </WindowWithForm>
    </section>
  )
}
export default Login;