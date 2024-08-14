import React from 'react'
import styles from './Number.module.css'
const Number = ({num, isOutline, ...rest}) => {
  return (
    <button className={isOutline ? styles.numberOut : styles.numberNorm} {...rest}>{num}</button>
  )
}

export default Number
