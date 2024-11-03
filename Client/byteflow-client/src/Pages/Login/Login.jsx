import { useRef } from 'react'
import axios from '../../axiosConfig'
import { useNavigate, Link } from 'react-router-dom';
import styles from './Login.module.css'

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
      alert(error?.response?.data?.msg))
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>email:--</span>
          <input ref={emailDom} type="email" placeholder='email'/>
        </div>
        <div>
          <span>password:--</span>
          <input ref={passwordDom} type="password" placeholder='password'/>
        </div>
        <button type='submit'>login</button>
      </form>
      <Link to={'/register'}>Register</Link>
    </section>
  )
}

export default Login
