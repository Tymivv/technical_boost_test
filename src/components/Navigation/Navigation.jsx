import React from 'react';
import {NavLink  } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav className='container'>      
        <NavLink  to="/technical_boost_test/" className={({ isActive }) =>
      isActive ? "activeLink" : "link"
    }>Home</NavLink>
        <NavLink  to="/technical_boost_test/tweets" 
      className={({ isActive }) =>
      isActive ? "activeLink" : "link"
    }>
        Tweets</NavLink>
    </nav>
  )
}
export default Navigation 