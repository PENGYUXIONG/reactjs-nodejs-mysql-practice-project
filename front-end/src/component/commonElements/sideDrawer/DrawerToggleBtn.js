import React from 'react';
import '../../../stylesheet/style.css';

const DrawerToggleBtn = (props) => {
  return(
    <button className = "toggleBtn">
      <div className='toggleBtn-line'/>
      <div className='toggleBtn-line'/>
      <div className='toggleBtn-line'/>
    </button>
  )
}

export default DrawerToggleBtn;