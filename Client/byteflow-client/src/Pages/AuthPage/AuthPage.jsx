import React, { useState } from 'react'
import Login from '../AuthForm/Login'
import Register from '../AuthForm/Register'
import { Link } from 'react-router-dom'
import styles from './AuthPage.module.css'

function AuthPage({defaultform}) {
    const [isRegister, setIsRegister] = useState(defaultform==='register')
    const toggleForm = () => {
        setIsRegister(!isRegister);
    }
  return (
    <section className={styles.section}>
        {/* left side background */}
        <div className={styles.left_side}>
            <div>
                <h3>ByteFlow <span className={styles.dot}>.</span></h3>
            </div>
            <div className={styles.about}>
                <h3>About Us</h3>
                <p>At ByteFlow, we're more than just a community – we’re a place for growth. Here, every discussion, every idea, and every individual matters. Our forum is dedicated to innovation, technology, entrepreneurship, creating a space where learning is endless and collaboration is key.
                    <br />
                    <br />
No matter your background or experience, there’s always room for your voice. So come, engage, and let's create something amazing together.</p>
            </div>
        </div>
        {/* Right side login/Register section */}
        <div className={styles.right_side}>
            <div className={`${styles.form_wrapper} ${isRegister?styles.slide_login:styles.register_slide}`}>
                <h2>{isRegister ? "Create an account" : "Welcome back"}</h2>
                <p>{!isRegister&&"Glad to see you again 👋 "}</p>
                <div className={styles.links}>
                    <p>{ isRegister?'Already have an account?' : 'Do not have an account?' }</p>
                    <Link to={isRegister? '/login' : '/register'}
                    onClick={toggleForm} className={styles.link}>
                        {isRegister ? 'Login' : 'Register' }
                    </Link>
                </div>
                <div>
                    {
                        isRegister ? <Register/> : <Login/>
                    }
                </div>
               
            </div>
        </div>
    </section>
  )
}

export default AuthPage
