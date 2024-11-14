import React, { useContext } from 'react'
import styles from './Home.module.css'
import { Appstate } from '../../App'
import Header from '../../Components/Header/Header'

function Home() {
  const {user} = useContext(Appstate)
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Home
