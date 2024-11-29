import React, { useContext, useState } from 'react'
import styles from './Home.module.css'
import { Appstate } from '../../App'
import Layout from '../../Components/Layout/Layout'
import PopupModel from '../../Components/PopupModel/PopupModel'

function Home() {
  const { user } = useContext(Appstate)
  const [showPopup, setShowPopup] = useState(false);


  return (
    <Layout>
      <div className={`${showPopup ? styles.blurred : ""}`}>
        <h2>Home page</h2>
        <button onClick={()=>setShowPopup(true)} className={styles.question_btn}>Ask Question</button>
      </div>
      { showPopup && <PopupModel onClose={()=>setShowPopup(false)}/> }
    </Layout>
  )
}

export default Home
