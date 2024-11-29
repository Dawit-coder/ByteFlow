import React from 'react'
import styles from './PopupModel.module.css'
import { X } from 'lucide-react';

function PopupModel({onClose}) {
    
  return (
    <div className={styles.container}>
      <div className={styles.popup_container}>
        <button onClick={onClose} className={styles.close_btn}><X size={30}/></button>
        <h3>Post Your Question</h3>
        <div className={styles.input}>
            <input className={styles.title} type="text" name="title" id="" placeholder='Summerize your question in-one line title' />
            <textarea className={styles.description} name="describe" id="" placeholder='Describe your question in more detail'/>
        </div>
        <button className={styles.post_btn}>Post Question</button>
      </div>
    </div>
  )
}

export default PopupModel
