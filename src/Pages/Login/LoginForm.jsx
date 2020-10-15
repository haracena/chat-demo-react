import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startLoginWithEmailPassword } from '../../redux/actions/authActions';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const { uid, authLoading, authError } = useSelector((state) => state.auth);
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    uid && history.push('/chat');
  }, [uid]);

  useEffect(() => {
    if (authError.length > 0) {
      setError('Credenciales incorrectas');
    }
  }, [authError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMITED');
    console.log(formValues);
    const { email, password } = formValues;

    if (email.length > 0 && password.length > 0) {
      dispatch(startLoginWithEmailPassword(email, password));
    } else {
      console.log('campos vacíos');
      setError('Campos vacíos');
    }
  };

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <div className='login-form__fg-icon'></div>
      <h1 className='login-form__title'>Login</h1>
      <input
        className='login-form__input-text'
        name='email'
        type='email'
        placeholder='Correo'
        onChange={handleInputChange}
      />
      <input
        className='login-form__input-text'
        name='password'
        type='password'
        placeholder='Contraseña'
        onChange={handleInputChange}
      />

      <button className='btn--form' type='submit'>
        Ingresar
      </button>

      {error.length > 0 && <p className='login-form__error'>{error}</p>}
    </form>
  );
};

export default LoginForm;
