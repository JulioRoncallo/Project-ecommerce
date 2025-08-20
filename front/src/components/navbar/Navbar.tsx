'use client'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Cookies from 'js-cookie'
import { IoLogOutOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaAppleAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const { userData, setUserData } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
    alert("You have successfully logged out");
    localStorage.removeItem("userSession");
    setUserData(null);
    Cookies.remove("userSession");
  }

  return (
    <div className={styles.contNavbar}>
      <nav className={styles.navLink}>
        <Link className={styles.linkNavbar} href="/"><FaAppleAlt size={27}/></Link>
        <Link className={styles.linkNavbar} href="/">Home</Link>

        {!userData && (<>
          <Link className={styles.linkNavbar} href="/register">Register</Link>
          <Link className={styles.linkNavbar} href="/login"><FaRegUser size={24}/></Link>
        </>)}

        {userData && (<>
            <Link className={styles.linkNavbar} href="/dashboard">Dashboard</Link>
            <Link className={styles.linkNavbar} href="/shoppingCart"><FiShoppingCart size={24} /></Link>
            <button className={styles.linkNavbar} onClick={handleLogout}><IoLogOutOutline size={27} /></button>
        </>)}
      </nav>
    </div>
  )
}

export default Navbar
