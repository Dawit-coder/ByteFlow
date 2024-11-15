import React, { useContext } from 'react'
import styles from './Home.module.css'
import { Appstate } from '../../App'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function Home() {
  const {user} = useContext(Appstate)
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  )
}

export default Home
