import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

import React, {useState} from 'react';

const SubAlert = ({message, link, linkMessage, endMessage = null})=>{
  let subAlert = null;
  const [show, setShow] = useState(true);
  if (show){
    subAlert = 
    <Alert variant={"danger"} onClose={() => setShow(false)} dismissible>
      {message} {" "}
      <Alert.Link href={link}>{linkMessage}</Alert.Link> {" "} {endMessage}
    </Alert>
  }
  return(
    subAlert
  )
}

export default SubAlert;