import React from "react"
import Paper from '@material-ui/core/Paper'
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylepage.css'
import Footer from "../components/footer"
import { useHistory } from 'react-router-dom'
import NavBar from '../components/NavBar'


const buttonStyle = {
    marginTop: "100px",
    textAlign:'center'
}
const stylepaper= {
    paddingTop: '50px',
    paddingRight: '30px',
    paddingBottom: '70px',
    paddingLeft: '80px',
}


const FinalPlan = () => {
    const history = useHistory();
    const goBack = () => {
        history.goBack()
      }

    return( 
        

        <Paper elevation={12}>
    
    <NavBar />
    <div> 
    <div style={stylepaper}elevation ={24}>
    Final Plan Here!
   </div>
   <br></br>      <br></br>



    <div style ={buttonStyle}>
            <button class="btn btn-outline-primary btn-lg " type="button" onClick={goBack}>Go Back</button> {' '}
            <button class="btn btn-outline-primary btn-lg "  type="button" onClick={()=> history.push("/")}>Display the Plan</button>
            <br></br> <a href="/" class="link-danger">Home</a>
        </div>

     </div>
     <Footer />
     </Paper>
    

    )    

}

export default FinalPlan
