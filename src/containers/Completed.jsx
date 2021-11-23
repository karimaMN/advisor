import React from "react"
import NavBar from "../components/NavBar"
import {useHistory} from 'react-router-dom'
import Listcourse from "../containers/Listcourse"
import { useState} from "react"
import {ButtonGroup,Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const buttonStyle = {
    marginTop: "100px",
    textAlign:'center'
}


const Completed = () => {
    const history=useHistory()
    const goBack = () => {
        history.goBack()
      }
      const [counter,setCounter] = useState(0)
    return (
        <div> 
            <NavBar />  
        <h4 style={{ paddingLeft:"30px", marginTop:'20px'}}> Transfer Courses:</h4>
        <p style={{paddingLeft:'30px'}}> UMSL welcomes transfer students, defined as a student transferring from another college or university.
        Here, the class may not have an equivalent course taught at UMSL, but the student will receive an equal number of “elective” hours to count towards the total 120 required for graduation.
       <br></br> Enter the number of transferred hours.
        </p>
        <ButtonGroup style= {{marginLeft:"60px"}}>
        <Button variant="primary" onClick = { () => {
              setCounter(counter - 1)            
          }}> - </Button>
          <Card >  
         <h4 style= {{marginLeft:"30px", marginRight:"30px"}}> {counter} </h4>
         </Card>
          <Button variant="primary" onClick = { () => {
              setCounter(counter +1)
          }}> + </Button>
        </ButtonGroup>
          <hr style= {{marginLeft:"30px"}} /> 
            <h4 style={{  paddingLeft:"30px"}}>Completed Courses:</h4>         
            <p style={{  paddingLeft:"30px"}}> Select the courses that you've already completed for gruadate credit that counts toward your degree.
            </p>
           <Listcourse />
           <div  style={{marginTop:'15px'}} class="d-grid gap-2 col-6 mx-auto">
           <div style ={buttonStyle}>
            <button class="btn btn-outline-primary btn-lg " type="button" onClick={goBack}>Go Back</button> {' '}
            <button class="btn btn-outline-primary btn-lg "  type="button" onClick={()=> history.push("/Waived")}>Next Step</button>
            <br></br> <a href="/" class="link-danger">Home</a>
        </div>     </div>
        </div>
         

    )
    }

export default Completed