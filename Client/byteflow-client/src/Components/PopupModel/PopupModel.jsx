import React, { useState } from 'react'
import styles from './PopupModel.module.css'
import { X } from 'lucide-react';
import axios from '../../axiosConfig'

function PopupModel({onClose}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handlePost = async() => {
      if(title && description){
        const newQuestion = {title, description};
        const token = localStorage.getItem("token");
        try {
          await axios.post('/questions/ask-question', newQuestion, {
            headers:{
              Authorization: `Bearer ${token}`,
            },
          });
          alert("posted successfully")
          onClose()
        } catch (err) {
          console.log("error posting question", err.value)
        }
      }else{
        alert("please fill in required fields")
      }
    }
  return (
    <div className={styles.container}>
      <div className={styles.popup_container}>
        <button onClick={onClose} className={styles.close_btn}><X size={30}/></button>
        <h3>Post Your Question</h3>
        <div className={styles.input}>
            <input className={styles.title} type="text" name="title" onChange={(e)=>{setTitle(e.target.value)}} placeholder='Summerize your question in-one line title' />
            <textarea className={styles.description} name="describe" onChange={(e)=>{setDescription(e.target.value)}} placeholder='Describe your question in more detail'/>
        </div>
        <button className={styles.post_btn} onClick={handlePost}>Post Question</button>
      </div>
    </div>
  )
}

export default PopupModel
