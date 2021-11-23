import React from "react"
import NavBar from "../components/NavBar"
import { useHistory } from "react-router"
import {Card} from "react-bootstrap"

const buttonStyle = {
    marginTop: "100px",
    textAlign:'center'
}
const Prerequisite = () => {
    const history=useHistory()
    const goBack = () => {
        history.goBack()
      }
    return (
        <div>
                <NavBar />
                      <h4 style={{  paddingLeft:"30px"}}>Restricted Courses:</h4>
            <p style={{  paddingLeft:"30px"}}> Restricted Courses are those that cover undergruadate level computer science and mathematics skiils required to proceed with gruadate study. These courses will be stated in the admission letter from the Gruadate Office upon successful admission to the Gruadate School.
            </p>
            <div>
            <Card border="dark" style={{ width: '75rem', paddingLeft:"60px", marginLeft:"50px",paddingBottom:'10px',paddingTop:'10px' }}>
            <h6 >** NOTE</h6> 
            <p> <span style = {{backgroundColor: 'AntiqueWhite'}}> Credit hours in these courses will not count toward the 30 gruadate hours requirement</span> </p>
            <h6 style= {{textDecoration: 'underline'}}> COMPUTER SCIENCE</h6>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                1250 -Introduction to Computing
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label class="form-check-label" for="flexCheckChecked">
                2250 - Programming and Data structure 
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                2261 - Object-Oriented Programming
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                2700 - Computer Architecture and Organization
            </label>
            </div><div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                2750 - System Programming and Tools
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                3130 - Design and Analysis of Algorithms
            </label>
            </div>
            <h6 style= {{textDecoration: 'underline'}}> MATHEMATICS</h6>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                1320 - Applied Statistics I
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label class="form-check-label" for="flexCheckChecked">
                1800 - Analytic Geometry and Calculs I
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                3000 - Discrete Structures
            </label>
            </div>
</Card>
</div>
<div style ={buttonStyle}>
            <button class="btn btn-outline-primary btn-lg " type="button" onClick={goBack}>Go Back</button> {' '}
            <button class="btn btn-outline-primary btn-lg "  type="button" onClick={()=> history.push("/Completed")}>Next Step</button>
            <br></br> <a href="/" class="link-danger">Home</a>
        </div>
        
        </div>
    )
}

export default Prerequisite