import React, {useEffect, useState} from 'react';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: ''
  }
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMITED');
    console.log(formValues);
  }

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <div className='login-form__fg-icon'></div>
      <h1 className='login-form__title'>Login</h1>
      <input className='login-form__input-text' name='email' type='email' placeholder='Correo' onChange={handleInputChange} />
      <input className='login-form__input-text' name='password' type='password' placeholder='Contraseña' onChange={handleInputChange} />
      <button className='btn--form' type='submit'>Ingresar</button>
    </form>
  );
};

export default LoginForm;
