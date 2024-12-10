import React, { useContext, useEffect, useState } from 'react'
import axios from '../../axiosConfig'
import { useParams } from 'react-router-dom';
import styles from './QuestionDetail.module.css'
import { Appstate } from '../../App';
import Layout from '../../Components/Layout/Layout';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PersonIcon from '@mui/icons-material/Person';

function QuestionDetail() {
  const { user } = useContext(Appstate)
  console.log(user, "user conole")
  const { questionId } = useParams();
  const [question, setQuestion] = useState([]);
  const [answers, setAnswer] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");

  console.log(question, "this is question state")
  console.log(answers, "this is answers state")

  const token = localStorage.getItem("token");
  useEffect(()=>{
    const questionAnswer = async() => {
      try {
        const response = await axios.get(`questions/${questionId}`, {
          headers:{
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data, "sucessfully fetched")
        setQuestion(response.data.questions);
        setAnswer(response.data.answers);
      } catch (error) {
        console.log(error, "error at fetching data at question detail page")
      }
    };  
    questionAnswer();
  }, [questionId]);

  useEffect(()=>{
    const fetchAnswer = () => {
      try {
        const response = axios.get("/answer/get-answer", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAnswer(response.answer)
        console.log(response)
      } catch (error) {
        console.log("error at getting answer", error)
      }

    }
    fetchAnswer()
  }, [questionId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/answer/:questionId", newAnswer, {
        headers:{
          Authorization:`Bearer ${token}`,
        },
      })
      console.log(response)
      alert("you posted your answer successfully")
    } catch (error) {
      console.log(error, "error at posting data to the backend")
    };
  };

  const handleTyping = (e) =>{
    setNewAnswer(e.target.value);
  }
  
  return (
    <Layout>
        <div>
          {
            question.map((question)=>(
              <div key={question.questionid} className={styles.header}>
                <div className={styles.arrow}><ArrowRightAltIcon style={{fontSize:30}}/></div>
                <h1>{question?.title}</h1>
                <hr />
                <h4>{question.description}</h4>
              </div>
            ))
          }
        </div>
        <div className={styles.answer_container}>
          <hr />
          <h1>Answers from the community</h1>
          <hr />
          <div className={styles.answers_container}>
            <div className={styles.answers_section}>
              {answers?.length > 0 ? (
                answers.map((answer)=>(
                  <div className={styles.answer_card} key={answer.key}>
                    <div className={styles.user}>
                      <PersonIcon style={{fontSize:40}}/>
                      <p>{user.username}</p>
                    </div>
                    <div className={styles.answer}>
                      <p>{answer?.answer}</p>
                    </div>
                  </div>
                ))

              ) : (
                <p>No answer yet.</p>
              )}
            </div>
            <div className={styles.answer_input_container}>
              <form onSubmit={handleSubmit}>
                <textarea placeholder='Write your answer here' onChange={handleTyping} required></textarea>
                <button type='submit' className={styles.btn}>Post Answer</button>
              </form>
            </div>
          </div>
        </div>
    
    </Layout>
  )
}

export default QuestionDetail
