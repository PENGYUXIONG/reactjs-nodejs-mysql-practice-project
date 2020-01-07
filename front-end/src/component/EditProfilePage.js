import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import NavBar from './commonElements/Navbar';
import EditProfileForm from './commonElements/EditProfileForm';

class EditProfilePage extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const authenticate = localStorage.getItem('token');
    if (!authenticate){
      window.location.href = "/NoAccess";
    }
  }

  render(){
    return(
      <div className="editProfilePage">
        <NavBar/>
        <main className="pageContent">
          <div className="editProfileForm">
            <EditProfileForm/>
          </div>
        </main>
      </div>
    )
  }
}

export default EditProfilePage;