import React from "react"
import NavBar from "../components/NavBar"
import {useHistory} from "react-router-dom"
import {Card} from "react-bootstrap"



const Traditional = () => {
    const history = useHistory()
    return (
        <div>
            <NavBar />
            <h4 style={{  paddingLeft:"30px"}}>Traditional Option:</h4>
            <Card border="dark" style={{ width: '75rem', paddingLeft:"60px", marginLeft:"50px",paddingBottom:'10px',paddingTop:'10px' }}>
            <h6 style= {{textDecoration: 'underline'}}>CORE COURSES</h6> 
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
          </Card>
          <div  class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-outline-primary btn-lg " type="button" onClick={()=> history.push("/Options")}>Go Back to Options</button>
    </div>
        </div>
    )
}
export default Traditional