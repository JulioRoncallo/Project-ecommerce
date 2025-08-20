import React from 'react'
import styles from './menu.module.css'
import SearchBar from '../searchbar/SearchBar'

const Menu = () => {
  return (
    <div className={styles.contMenu}>
      <SearchBar/>
    </div>
  )
}

export default Menu
