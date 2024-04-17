import React from 'react'
import './styles.css'

const Button = ({ text , onClick, outline }) => {
  return (
    <div className={outline ? "outline-btn":'btn'} onClick={()=>onClick}>{text}</div>
  )
}

export default Button


