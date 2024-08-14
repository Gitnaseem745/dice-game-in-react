import React from 'react'
import styles from './Button.module.css'

const Button = ({btnText, isOutline, ...rest}) => {
  return (
    <button className={isOutline ? styles.oBtn : styles.btn} {...rest}>{btnText}</button>
  )
}

export default Button
