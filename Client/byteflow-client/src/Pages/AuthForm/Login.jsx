import { useRef } from 'react'
import axios from '../../axiosConfig'
import { useNavigate } from 'react-router-dom';
import styles from './AuthForm.module.css'

function Login() {
  const navigate = useNavigate();

  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e){
    e.preventDefault()
    const emailvalue = emailDom.current.value;
    const passwordvalue = passwordDom.current.value;

    if ( !emailvalue || !passwordvalue){
      return alert("provide the required values")
    }
    try {
      const { data } = await axios.post('/users/register', {
        email: emailvalue,
        password: passwordvalue,
      })
      alert("login successfully completed")
      localStorage.setItem("token", data.token)
      navigate("/")

    } catch (error) {
      alert(error?.response?.data?.msg)
    }
  }
  return (
    <section className={styles.form_container}>
      <form onSubmit={handleSubmit} className={styles.login_form}>
        <div className={styles.input_box}> 
          <input ref={emailDom} type="email" placeholder='email'/>
        </div>
        <div className={styles.input_box}>
          <input ref={passwordDom} type="password" placeholder='password'/>
        </div>
        <button type='submit'>login</button>
      </form>
    </section>
  )
}

export default Login
