import React, { useEffect, useState } from 'react'
import axios from '../../axiosConfig'
import { useParams } from 'react-router-dom';
import styles from './QuestionDetail.module.css'

function QuestionDetail() {
  const { questionId } = useParams();
  const [question, setQuestion] = useState([]);
  const [answers, setAnswer] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");

  console.log(question, "this is question state")
  console.log(answers, "this is answers state")

  const answerSubmit = () =>{

  }
  useEffect(()=>{
    const questionAnswer = async() => {
      try {
        const token = localStorage.getItem("token");
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
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/questions/:questionId/answer", newAnswer, {
        headers:{
          Authorization:`Bearer ${token}`,
        }
      })
    } catch (error) {
      console.log(error, "error at posting data to the backend")
    };
  };

  const handleTyping = (e) =>{
    setNewAnswer(e.target.value);
  }
  
  return (
    <div>
        <div>
          {
            question.map((question)=>(
              <div key={question.key} className={styles.header}>
                <h1>{question?.title}</h1>
                <hr />
                <h4>{question.description}</h4>
              </div>
            ))
          }
        </div>
        <div className={styles.answer_container}>
          <h1>Answers from the community</h1>
          <div className={styles.answers_container}>
            <div className={styles.answers_section}>
              {answers.length > 0 ? (
                answers.map((answer)=>(
                  <div className={answer_card} key={answer.key}>
                    <div className={styles.user}>
                      <p>user</p>
                    </div>
                    <div className={styles.answer}>
                      <p>{answer?.answer}</p>
                    </div>
                  </div>
                ))

              ) : (
                <p>No answer yet.</p>
              )};
              
            </div>
            <div className={styles.answer_input_container}>
              <form onSubmit={handleSubmit}>
                <textarea placeholder='Write your answer here' onChange={handleTyping} required></textarea>
                <button type='submit'>Post Answer</button>
              </form>
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default QuestionDetail
