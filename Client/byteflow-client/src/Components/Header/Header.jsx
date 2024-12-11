import React from 'react'
import styles from './Header.module.css'
import logo from '../../img/logo.png'


const logOut = (event) =>{
  event.preventDefault()
  //Remove the JWT from local storage
  localStorage.removeItem('token');

  //Redirect user to login page after logging out
  window.location.href = '/login';
}

function Header() {
  return (
    <div className={styles.header_container}>
        <div className={styles.inner_container}>
            <a href="/"><img src={logo} alt="" /></a>
            <nav className={styles.nav}>
              <a href="/">Home</a>
              <a href='/' onClick={logOut}>LogOut</a>
            </nav>
        </div>
      
    </div>
  )
}

export default Header
