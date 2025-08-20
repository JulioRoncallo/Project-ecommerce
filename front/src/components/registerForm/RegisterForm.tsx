'use client'
import React, { useState } from 'react';
import styles from './registerForm.module.css';
import { IRegisterErrors, IRegisterFormData } from '@/types';
import { validateFormRegister } from '@/lib/validate';
import { register } from '@/services/authService';
import { useRouter } from 'next/navigation';


const initialForm: IRegisterFormData  = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
};

const RegisterForm: React.FC = () => {

    const [formData, setFormData] = useState<IRegisterFormData >(initialForm);
    const [errors, setErrors] = useState<IRegisterErrors>({});
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const validationErrors = validateFormRegister(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const { confirmPassword, ...dataToSend } = formData // Omitie confirmPassword
            try {
                await register(dataToSend);
                alert('User registered successfully');
                router.push('/login');
            } catch (error) {
                console.error(error)
                alert('Registration error')
            }
        }
    };

    return (
        <div className={styles.contRegister}>
            <h1>Create Account</h1>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="name">Name:</label>
                <input
                    className={styles.input}
                    type="text"
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Enter your full name'
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}

                <label className={styles.label} htmlFor="email">Email:</label>
                <input
                    className={styles.input}
                    type="email"
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='YourEmail@email.com'
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}


                <label className={styles.label} htmlFor="password">Password:</label>
                <input
                    className={styles.input}
                    type="password"
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter your password'
                />

                <label className={styles.label} htmlFor="password">Confirm Password:</label>
                <input
                    className={styles.input}
                    type="password"
                    id='confirmPassword'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder='Confirm your password'
                />
                {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}


                <label className={styles.label} htmlFor="address">Address:</label>
                <input
                    className={styles.input}
                    type="text"
                    id='address'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    placeholder='Enter your home address'
                />
                {errors.address && <p className={styles.error}>{errors.address}</p>}

                <label className={styles.label} htmlFor="phone">Phone:</label>
                <input
                    className={styles.input}
                    type="text"
                    id='phone'
                    name='phone'
                    placeholder='Enter your mobile phone number'
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}

                <button className={styles.btnRegister} type="submit">Sign In</button>

            </form>
        </div>
    )
};

export default RegisterForm
