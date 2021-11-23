import React from "react"
import NavBar from "../components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'

import { prerequiste } from "../api/sixlevel"

const buttonStyle = {
    marginTop: "100px",
    textAlign:'center'
}

const SixLevel = () => {
    const history=useHistory()
    const goBack = () => {
        history.goBack()
      }
        return (
        <div >
            <NavBar />
            <table class ="table table-hover">
  <thead>
    <tr>
      <th scope="col">Prerequistie Courses</th>
      <th scope="col">Six - level courses</th>

    </tr>
  </thead>
  <tbody>
         {prerequiste.map((subject) => (
        <tr>
        <th scope = "row">
        <span class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
           <span >{subject.courseNumber +" - " + subject.course}<br></br>
           {subject.prereqNumber +" - " + subject.prereq} </span> 
           </label>
        </span>
           </th>
           <th scope = "row">
           <span class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
           <span >{subject.courseNumber +" - " + subject.course}</span>
           
           
        </label>
        </span>
        </th> 
        </tr>
        ))
        } 
         
   
   </tbody>
   </table>

   <div style ={buttonStyle}>
            <button class="btn btn-outline-primary btn-lg " type="button" onClick={goBack}>Go Back</button> {' '}
            <button class="btn btn-outline-primary btn-lg "  type="button" onClick={()=> history.push("/FinalPlan")}>Next Step</button>
            <br></br> <a href="/" class="link-danger">Home</a>
        </div>
    
    </div>


    )
        }

    
 export default SixLevel