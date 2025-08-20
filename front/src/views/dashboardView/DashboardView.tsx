'use client'
//react
import React from 'react'
//context
import { useAuth } from '@/context/AuthContext'
//estilos
import styles from './dashboardView.module.css'
//componentes
import Poster from '@/components/posters/Poster'


const images = [
    {src:'/images/poster5.jpg', alt:'Poster 5'},
    {src:'/images/poster6.jpg', alt:'Poster 6'},
    {src:'/images/poster7.jpg', alt:'Poster 7'},
]

const DashboardView = () => {
    const {userData} = useAuth();
    return (
        <>
        <div className={styles.ContDashboard}>
            <div className={styles.contInfoUser}>
                <h1>Welcome {userData?.user.name} </h1>
                <p>
                    Your email: {userData?.user.email} <br />
                    Your address: {userData?.user.address} <br />
                    Your phone: {userData?.user.phone}
                </p>
            </div>
        </div>
        <div className={styles.Message}>
            <h1>Keep your information up to date to receive the best offers and personalized recommendations.</h1>
        </div>
        <Poster images={images}/>
        </>
    )
}

export default DashboardView
