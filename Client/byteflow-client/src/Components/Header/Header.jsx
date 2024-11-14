import React from 'react'
import styles from './Header.module.css'
import logo from '../../img/logo.png'

function Header() {
  return (
    <div className={styles.header_container}>
        <div className={styles.inner_container}>
            <a href="/"><img src={logo} alt="" /></a>
            <nav className={styles.nav}>
              <a href="/">Home</a>
              <a href="">LogOut</a>
            </nav>
        </div>
      
    </div>
  )
}

export default Header
