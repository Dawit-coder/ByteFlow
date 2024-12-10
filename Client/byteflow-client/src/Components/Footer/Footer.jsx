import React from 'react'
import styles from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.social}>
          <a href="https://www.instagram.com/novawhisperer/" target='blank'><InstagramIcon/></a>
          <a href="https://www.linkedin.com/in/dawitteshome/" target='blank'><LinkedInIcon/></a>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} ByteFlow Forum. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
