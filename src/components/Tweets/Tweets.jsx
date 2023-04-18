import React from 'react'
import style from './tweets.module.css';
import goit from '../../images/goit.svg';
import ellipse from '../../images/ellipse.png';
import AvatarFoto from '../../images/avatarFoto.png';


function Tweets({users, handleChange}) {
  return (
    (users?.map(({user, tweets, follovers, avatar, id}) => {
      return (
        <div className={style.wrapper} key={id} name = "id">
          <div className={style.item}>
            <img className={style.goit} src={goit} alt="goit"/>
            <div className={style.line}></div>
            <div className={style.boy}>
              <img className={style.ellipse} src={ellipse} alt="hansel"/>
              <img className={style.hansel} src={avatar==='avatar'? AvatarFoto : avatar } alt="hansel"/>
            </div>
            <p className={style.tweets}>{tweets} tweets</p>
            <p className={style.followers} name = "followers">{follovers.toLocaleString('en-US')} </p>
            <div className={follovers===100501?style.btm :  style.btm_color} 
              onClick ={handleChange} id={id} data-follovers={follovers} >
            <p className={style.btm_text} id={id} data-follovers={follovers}>{follovers===100500?'FOLLOW':'FOLLOWING'}</p>
          </div>
        </div>
      </div>
    )}))
  )
}
export default Tweets 