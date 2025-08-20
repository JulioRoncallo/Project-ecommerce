'use client'
import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext';

const Footer: React.FC = () => {
  const { userData} = useAuth();
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.blockOne}>
          <div className={styles.contContact}>
              <h2>Contact</h2>
              <p>Phone: +57 300 000 0000</p>
              <p>Email: support@iStore.com</p>
              <p>Address: Calle 123 #00-0l, Bogotá, CO</p>
          </div>
          <div className={styles.contLorem}>
              <h2>Segurity</h2>
            <p>Secure shopping with reliable <br /> payment methods and a guarantee on all our products.</p>
          </div>
          <div className={styles.contLinks}>
            <h2>Navegation</h2>
            <Link href="/">Home</Link>

            {!userData && (<>
              <Link href="/register">Register</Link>
              <Link href="/login">Login</Link>
            </>)}

            {userData && (<>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/shoppingCart">ShoppingCart</Link>
            </>)}
          </div>
        </div>
        <p>© 2025 iStore – All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
