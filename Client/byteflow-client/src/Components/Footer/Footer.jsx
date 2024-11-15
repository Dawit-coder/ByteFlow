import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contact}>
            <h3>Contact</h3>
            <p>09......</p>
            <p>dawit@gmail.com</p>
        </div>
        <div className={styles.service}>
            <h3>Services</h3>
            <a href="#">About</a>
        </div>
        <div className={styles.social}>
            <h3>Social</h3>
            <a href="https://www.instagram.com/novawhisperer/" target='blank'>instagram</a>
            <a href="https://www.linkedin.com/in/dawitteshome/" target='blank'>linkedin</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} ByteFlow Forum. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
