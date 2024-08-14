import React from 'react'
import styles from './Number.module.css'
const Number = ({num, isSelected, ...rest}) => {
  return (
    <button className={isSelected ?  styles.btnBlack : styles.btnWhite} {...rest}>{num}</button>
  )
}

export default Number
