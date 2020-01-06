import React from 'react';
import {connect} from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import DrawerToggleBtn from '../commonElements/sideDrawer/DrawerToggleBtn';

import { logout } from '../../actions/logoutAction'


const NavBar = (props) =>{
  const onClick = () => {
    localStorage.removeItem("token");
    props.logout()
    window.location.href = "/";
  }

  let conditionalLink = <Link to="/signup">Sign Up</Link>;
  if (localStorage.getItem('token')){
    conditionalLink = <Link to="#" onClick={onClick}>Log Out</Link>
  }
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
            {conditionalLink}
            <Link to="/aboutus">About Us</Link>
          </ul>
        </div>
      </nav>
      </header>
  )
}

const mapDispatchToProps = dispatch => {
  return{
    logout: ()=>dispatch(logout())
  }
}

export default connect(mapDispatchToProps, {logout})(NavBar);
