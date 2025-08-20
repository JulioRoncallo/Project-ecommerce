'use client'
import React, { useState } from 'react'
import styles from './loginForm.module.css'
import { login } from '@/services/authService'
import { validateFormLogin } from '@/lib/validate'
import { useAuth } from '@/context/AuthContext'
import { ILoginErrors } from '@/types'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const { setUserData } = useAuth()
    const router = useRouter()
    const [values, setValues] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState<ILoginErrors>({})

    //maneja el cambio en los inputs del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })

        const newErrors = validateFormLogin({ ...values, [name]: value })
        setErrors(newErrors)
    }

    //maneja el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const validationErrors = validateFormLogin(values)
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            const response = await login(values)
            const { token, user } = response
            setUserData({ token, user })
            router.push('/')
        }
    }

    return (
        <div className={styles.contLoginForm}>
            <h1>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="email">Email:</label>
                <input
                    className={styles.input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="YourEmail@email.com"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}

                <label className={styles.label} htmlFor="password">Password:</label>
                <input
                    className={styles.input}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p className={styles.error}>{errors.password}</p>}

                <button
                    className={styles.btnLogin}
                    type="submit"
                    disabled={!!errors.email || !!errors.password}
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm
