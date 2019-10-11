import React from 'react';
import DrawerToggleBtn from '../commonElements/sideDrawer/DrawerToggleBtn';

const NavBar = (props) =>{
  return(
    <header className="navBar">
      <nav className="toolbar_navigation">
        <div className="drawer">
          <DrawerToggleBtn />
        </div>
        <div className='toolbarLogo'><a href="/"> LOGO</a></div>
        <div className='space' />
        <div className="navList">
          <ul>
            <li><a href = '/AddFriend'>Add New Friend</a></li>
            <li><a href = '/CreateRoom'>Create Room</a></li>
          </ul>
        </div>
      </nav>
      </header>
  )
}

export default NavBar;