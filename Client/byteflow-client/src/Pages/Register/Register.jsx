import { useRef } from 'react'
import axios from '../../axiosConfig'
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css'

function Register() {
  const navigate = useNavigate();

  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();


  async function handleSubmit(e){
    e.preventDefault()

    const usernamevalue = usernameDom.current.value;
    const firstnamevalue = firstnameDom.current.value;
    const lastnamevalue = lastnameDom.current.value;
    const emailvalue = emailDom.current.value;
    const passwordvalue = passwordDom.current.value;

    if (!usernamevalue || !firstnamevalue || !lastnamevalue || !emailvalue || !passwordvalue){
      return alert("provide the required values")
    }
    try {
      await axios.post('/users/register', {
        username: usernamevalue,
        firstname: firstnamevalue,
        lastname: lastnamevalue,
        email: emailvalue,
        password: passwordvalue,
      })

      alert("registered successfully")

      navigate("/login")

    } catch (error) {
      alert('something went wrong')
      console.log(error)
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>username:--</span>
          <input ref={usernameDom} type="text" placeholder='username'/>
        </div>
        <div>
          <span>firstname:--</span>
          <input ref={firstnameDom} type="text" placeholder='firstname'/>
        </div>
        <div>
          <span>lastname:--</span>
          <input ref={lastnameDom} type="text" placeholder='lastname'/>
        </div>
        <div>
          <span>email:--</span>
          <input ref={emailDom} type="email" placeholder='email'/>
        </div>
        <div>
          <span>password:--</span>
          <input ref={passwordDom} type="password" placeholder='password'/>
        </div>
        <button type='submit'>submit</button>
      </form>
      <Link to={'/login'}>Login</Link>
    </section>
  )
}

export default Register
