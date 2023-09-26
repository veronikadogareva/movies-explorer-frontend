import React, { useContext } from 'react';
import './Register.css';
import { EMAIL_VALID, NAME_VALID } from '../../utils/constants';
import WindowWithForm from '../WindowWithForm/WindowWithForm';
import Input from '../Input/Input';
import useFormControl from '../../utils/useFormControl';
import { AppContext } from '../../contexts/AppContext';
function Register({ handleRegister, serverError }) {
  const { isLoading } = useContext(AppContext);
  const inputControl = useFormControl({ name: '', email: '', password: '' });
  const { name, email, password } = inputControl.errors;

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(inputControl.values);
    inputControl.resetForm({ email: '', password: '' });
  }
  return (
    <section className="register">
      <WindowWithForm title="Добро пожаловать!" textButton={isLoading ? "Сохранение..." : "Зарегистрироваться"} textCaption="Уже зарегистрированы?" textLink="Войти" linkPath="/signin"
        name="form-register" handleSubmit={handleSubmit} buttonIsDisable={!inputControl.isValid} serverError={serverError} isLoading={isLoading}>
        <Input type="text" name="name" labelText="Имя" placeholder="Введите имя" handleChange={inputControl.handleChange} value={inputControl.values.name}
          error={name} minLength="2" maxLength="30" pattern={NAME_VALID} />
        <Input type="email" name="email" labelText="E-mail" placeholder="Введите email" handleChange={inputControl.handleChange} value={inputControl.values.email}
          error={email} pattern={EMAIL_VALID} />
        <Input type="password" name="password" labelText="Пароль" placeholder="Введите пароль" handleChange={inputControl.handleChange} value={inputControl.values.password}
          error={password} />
      </WindowWithForm>
    </section>
  )
}
export default Register;