import React from 'react'
import  './filter.css';


function Filter({name,onClick}) {
  return (
  <div className='filter' onClick={onClick}>{name}</div>
  )
}
export default Filter 