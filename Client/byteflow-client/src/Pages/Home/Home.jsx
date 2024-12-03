import React, { useContext, useEffect, useState } from 'react'
import styles from './Home.module.css'
import { Appstate } from '../../App'
import Layout from '../../Components/Layout/Layout'
import PopupModel from '../../Components/PopupModel/PopupModel'
import axios from '../../axiosConfig'

function Home() {
  const { user } = useContext(Appstate)
  const [showPopup, setShowPopup] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/questions/all-questions", {
          headers:{
            Authorization: `Bearer ${token}`,
          },
        })
        setQuestions(response.data.response);
        console.log(response.data.response)
      } catch (error) {
        console.log("Error fetching data", error)
      }
    }
    fetchQuestion();
  },[])
  return (
    <Layout>
      <div className={`${showPopup ? styles.blurred : ""}`}>
        <h2>Home page</h2>
        <button onClick={()=>setShowPopup(true)} className={styles.question_btn}>Ask Question</button>
      </div>
      <div>
        {questions.map((question) => (
          <ul key={question.id}>
            <h2>{question.title}</h2>
            <h2>{question.description}</h2>
          </ul>
        ))}
      </div>
      { showPopup && <PopupModel onClose={()=>setShowPopup(false)}/> }
    </Layout>
  )
}

export default Home
