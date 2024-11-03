import React, { useContext } from 'react'
import styles from './Home.module.css'
import { Appstate } from '../../App'

function Home() {
  const {user} = useContext(Appstate)
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default Home
