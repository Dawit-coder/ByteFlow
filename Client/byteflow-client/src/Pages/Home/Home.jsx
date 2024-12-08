import React, { useContext, useEffect, useState } from 'react'
import styles from './Home.module.css'
import { Appstate } from '../../App'
import Layout from '../../Components/Layout/Layout'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PopupModel from '../../Components/PopupModel/PopupModel'
import axios from '../../axiosConfig'
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Home() {
  const { user } = useContext(Appstate)
  const [showPopup, setShowPopup] = useState(false);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const handleQuestion = (questionid)=>{
    navigate(`${questionid}`)
  }
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
        console.log(response.data.response, "this is the question in home page")
      } catch (error) {
        console.log("Error fetching data", error)
      }
    }
    fetchQuestion();
  },[])
  return (
    <Layout>
      { showPopup && <PopupModel onClose={()=>setShowPopup(false)}/> }
      <div className={`${showPopup ? styles.blurred : ""}`}>
        <h2>Home page</h2>
        <button onClick={()=>setShowPopup(true)} className={styles.question_btn}>Ask Question</button>
      </div>
      <div className={styles.questions_container}>
        <h1></h1>
        {questions.map((question) => (
            <div key={question.id} className={styles.question_card} onClick={()=>{handleQuestion(question.questionid)}}>
              <div className={styles.avatar}>
                <h4>user</h4>
              </div>
              <div className={styles.content}>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
              </div>
            </div>
        ))}
      </div>
    </Layout>
  )
}

export default Home
