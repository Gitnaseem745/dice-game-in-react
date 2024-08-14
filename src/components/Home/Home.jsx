import React from 'react'
import styles from './Home.module.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { heroImg } from '../../images'

const Home = () => {
  return (
    <section className={styles.heroSection}>
        <div className={styles.heroImg}>
            <img src={heroImg} />
        </div>
        <div className={styles.heroText}>
            <h1>DICE GAME</h1>
            <Link to={"/game-page"}> <Button btnText="Play Now"/> </Link>
        </div>
    </section>
  )
}

export default Home
