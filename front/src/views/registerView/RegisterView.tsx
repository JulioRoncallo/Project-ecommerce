//react
import React from 'react'
//componentes
import RegisterForm from '@/components/registerForm/RegisterForm'
//estilos
import styles from './registerView.module.css'


const RegisterView = () => {
    return (
        <div className={styles.contRegisterView}>
            <div className={styles.sectMessage}>
                <h1>¡Welcome!</h1>
                <h2>
                    Complete the following form to register and start enjoying all of our products and services.
                </h2>
            </div>
            <div>
                <RegisterForm/>
            </div>
        </div>
    )
}

export default RegisterView
