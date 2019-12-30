import React from 'react';

const Sidedrawer = (props)=> {
  return(
    <nav className='side-drawer'>
        <ul>
          <li><a href='/friendList'>Friend List</a></li>
          <li><a href='/roomList'>Room List</a></li>
          <li><a href='/logout'>LogOut</a></li>
        </ul>
      </nav>
  )
}

export default Sidedrawer;