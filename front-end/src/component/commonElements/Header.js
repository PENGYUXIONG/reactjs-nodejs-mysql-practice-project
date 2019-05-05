import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <ul>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/logout">Log Out</Link>
        </ul>
        <ul>
          <Link to="/signup">Sign Up</Link>
        </ul>
        <ul>
          <Link to="/accountInf">Account Information</Link>
        </ul>
        <ul>
          <Link to="/support">Support</Link>
        </ul>
    </ul>
  );
}
export default Header;