import React from 'react'
import styles from './GamePage.module.css'
import Number from '../Numbers/Number'
import Button from '../Button/Button'
import { diceOne } from '../../assets'

const GamePage = () => {
  return (
    <section className={styles.gamePage}>
        <div className={styles.scoreContainer}>
            <div className={styles.score}>
                <p className={styles.scoreCount}>0</p>
                <p className={styles.scoreText}>Total Score</p>
            </div>
            <div className={styles.choseNum}>
                <p className={styles.errorNum}>Trial Error</p>
                <div className={styles.nums}>
                <Number num={1} isOutline={true}/>
                <Number num={2} isOutline={true}/>
                <Number num={3} isOutline={true}/>
                <Number num={4} isOutline={true}/>
                <Number num={5} isOutline={true}/>
                <Number num={6} isOutline={true}/>
                </div>
                <p>Select Number</p>
            </div>
        </div>
        <div className={styles.diceContainer}>
            <img src={diceOne} />
            <p>Click on Dice to roll</p>
            <div className={styles.gameBtn}>
            <Button isOutline={true} btnText="Reset Score" />
            <Button btnText="Check Rules" />
            </div>
        </div>
        <div className={styles.gameRules}>
            <h2>How to play dice game</h2>
            <p>1. Select any number</p>
            <p>2. Click on dice image</p>
            <p>3. After click on  dice  if selected number is equal to dice number you will get same point as dice</p>
            <p>4. If you get wrong guess then  2 point will be dedcuted</p>
        </div>
    </section>
  )
}

export default GamePage
