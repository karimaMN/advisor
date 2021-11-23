import React from 'react'
import {Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';



class NavBarCer extends React.Component{
  render() {
    return (

        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/Traditional">Traditionnal</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/Certificate"  >Graduate Certificate</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/Traditional">Professional Option</Nav.Link>
            </Nav.Item>
        
    </Nav>
      
    )

  }
}


export default NavBarCer