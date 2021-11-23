import React from 'react'
import {Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';



class NavBar extends React.Component{
  render() {
    return (

        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/Prerequisite">Restricted courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/Completed"  >Completed </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/Waived">Waived Courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/Certificate" >Certificates </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/SixLevel" >6XXXLevel </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/FinalPlan" >Planning </Nav.Link>
        </Nav.Item>
       </Nav>
      
    )

  }
}


export default NavBar