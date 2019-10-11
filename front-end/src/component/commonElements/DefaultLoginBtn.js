import React from 'react';
import {Link} from 'react-router-dom';

function DefaultLoginBtn(){
  return(
    <div className='defaultLoginBtn'>
      <Link to="/login">Log In</Link>
      </div>
  );
}

export default DefaultLoginBtn;