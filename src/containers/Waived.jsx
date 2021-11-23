import React from "react"
import NavBar from "../components/NavBar"
import {useHistory} from "react-router-dom"
import {Card} from "react-bootstrap"


const buttonStyle = {
    marginTop: "100px",
    textAlign:'center'
}

const Waived = () => {
    const history = useHistory()
    const goBack = () => {
        history.goBack()
      }
    return (
        <div>
            <NavBar />
            <h4 style={{  paddingLeft:"30px"}}>Waived Courses:</h4>
            <p style={{  paddingLeft:"30px"}}> Please select any core courses that are waived by the departement:
            </p>
            <Card border="dark" style={{ width: '75rem', paddingLeft:"60px", marginLeft:"50px",paddingBottom:'10px',paddingTop:'10px' }}>
            <h6>CORE COURSES</h6> 
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4250 - Programming Languages
            </label>
            </div>
        
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4760 - Operating Systems
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5130 - Advanced Data Structure and Agorithms
            </label>
            </div><div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5500 - Software engeneering
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5700 - Computer Systems
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5300 - Artificial Intelligence
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4730 - Computer Networks
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5702 - Cyber Threads and Defense
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5782 - Advanced Information Security
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4200 - Python for Scientific Programming and Data Science
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5340 - Machine Learning
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5342 - Data Mining
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4010 - Advanced Web Development with Java
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4011 - Web Developement with Advanced JavaScript
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5012 - Entreprise Web Development
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5020 - Android Apps: Android Fundamentals
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4220 - Introduction to iOs Programming and Apps
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5792 - Mobile Computing, Networking and Security
            </label>
            </div>
          </Card>
        <div style ={buttonStyle}>
            <button class="btn btn-outline-primary btn-lg " type="button" onClick={goBack}>Go Back</button> {' '}
            <button class="btn btn-outline-primary btn-lg "  type="button" onClick={()=> history.push("/Options")}>Next Step</button>
            <br></br> <a href="/" class="link-danger">Home</a>
        </div>
        </div>
    )
}

export default Waived

