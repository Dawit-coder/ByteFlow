import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import logo from '../../img/logo.png'
import { Toggle } from '../Toggle/Toggle'
import '../../index.css'
import useLocalStorage from 'use-local-storage'

function Header() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  const logOut = (event) => {
    event.preventDefault()
    //Remove the JWT from local storage
    localStorage.removeItem('token');
  
    //Redirect user to login page after logging out
    window.location.href = '/login';
  };
  // Set the `data-theme` attribute on the `body` when the theme changes
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={styles.header_container}>
        <div className={styles.inner_container}>
            <a href="/"><img src={logo} alt="" /></a>
            <nav className={styles.nav}>
              <a href="/">Home</a>
            </nav>
            <div className={styles.right_section}>
              <a href='/' onClick={logOut}>LogOut</a>
              <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
            </div>
        </div>
      
    </div>
  )
}

export default Header
