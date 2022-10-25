import axios from 'axios';
import { toastError } from 'helpers/toast';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import styles from 'styles/pages/login.module.scss';

const Login = () => {
  const router = useRouter();
  const [dataLogin, setDataLogin] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setDataLogin({ ...dataLogin, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/login', dataLogin);
      router.push('/');
    } catch (error) {
      toastError(error.response.data.message);
    }
  };

  const dataValid = dataLogin.email && dataLogin.password;

  return (
    <>
      <Toaster />
      <Head>
        <title>Login</title>
        <meta name="description" content="Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-testid="login-test-id" className={styles.container}>
        <img
          src="https://www.vincoed.com/assets/images/vinco-logo-md.png"
          alt=""
        />
        <form onSubmit={e => handleSubmit(e)} className={styles.form}>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Correo electrónico"
            autoComplete="off"
            className={styles.loginInput}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Contraseña"
            autoComplete="off"
            className={styles.loginInput}
            onChange={handleChange}
          />
          <button
            type="submit"
            onClick={e => handleSubmit(e)}
            className={styles.btn + ' ' + `${!dataValid && styles.btnDisabled}`}
            disabled={!dataValid}
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
