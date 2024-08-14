import React, { useState } from 'react'
import styles from './GamePage.module.css'
import Number from '../Numbers/Number'
import Button from '../Button/Button'
import { diceOne } from '../../assets'

const GamePage = () => {

    const [score, setScore] = useState(10);
    const [showRules, setShowRules] = useState(false);
    const [selectedNum, setSelectedNum] = useState();
    const [visible, setVisible] = useState("hidden");
    const [currentImg, setCurrentImg] = useState(1);

    const onClickReset = () => {
        setScore(0);
    }
    const onClickShowRules = () => {
        setVisible("visible");
        setShowRules(true);
    }
    const onClickHideRules = () => {
        setVisible("hidden");
        setShowRules(false);
    }
    const onClickChangeCurrentImg = () => {
        let currentImgIndex = Math.floor(Math.random() * 6 + 1);
        setCurrentImg(currentImgIndex);
    }

  return (
    <section className={styles.gamePage}>
        <div className={styles.scoreContainer}>
            <div className={styles.score}>
                <p className={styles.scoreCount}>{score}</p>
                <p className={styles.scoreText}>Total Score</p>
            </div>
            <div className={styles.choseNum}>
                <p className={styles.errorNum}>Select Any Number To Play The Game</p>
                <div className={styles.nums}>
                {nums.map((n, index) => (
                    <Number num={n} key={index} onClick={() => setSelectedNum(n)} isSelected={n === selectedNum}/>
                ))}
                </div>
                <p>Select Number</p>
            </div>
        </div>
        <div className={styles.diceContainer}>
            <img src={`/src/assets/dice_${currentImg}.png`} onClick={onClickChangeCurrentImg} />
            <p>Click on Dice to roll</p>
            <div className={styles.gameBtn}>
            <Button isOutline={true} btnText="Reset Score" onClick={onClickReset} />
            <Button btnText="Check Rules" onClick={showRules ? onClickHideRules : onClickShowRules}/>
            </div>
        </div>
        <div className={visible}>
        <div className={`${styles.gameRules}`}>
            <h2>How to play dice game</h2>
            <p>1. Select any number</p>
            <p>2. Click on dice image</p>
            <p>3. After click on  dice  if selected number is equal to dice number you will get same point as dice</p>
            <p>4. If you get wrong guess then  2 point will be dedcuted</p>
        </div>
        </div>
    </section>
  )
}

const nums = [1, 2, 3, 4, 5, 6];

export default GamePage
