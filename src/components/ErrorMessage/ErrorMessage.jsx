import React from 'react'
import style from './errorMessage.module.css';


function ErrorMessage({error}) {
  return (
    (<h1 className={style.wrapper}>error:{error}</h1>)
  )
}
export default ErrorMessage 