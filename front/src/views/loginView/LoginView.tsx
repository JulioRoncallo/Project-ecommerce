//react
import React from 'react'
//next
import Link from 'next/link'
//componentes
import LoginForm from '../../components/loginForm/LoginForm'
//estilos
import styles from './login.module.css'

const LoginView = () => {
    return (
      <>
      <div className={styles.contLoginView}>
        <div className={styles.messageText}>
          <h1>¡Welcome!</h1><br />
          <h2>
            To log in, make sure you&apos;ve completed your registration first. <br />
            Don&apos;t have an account yet?
          </h2>
        </div>
        <div className={styles.contLink}>
          <Link href='/register/'> ¡¡ Click here to register !!</Link>
        </div>
        <div className={styles.contLogin}>
          <LoginForm/>
        </div>
      </div>
      </>
    )
}

export default LoginView
