import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
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
            <Link to="/signup">Sign Up</Link>
            <Link to="/aboutus">About Us</Link>
          </ul>
        </div>
      </nav>
      </header>
  )
}

export default NavBar;
