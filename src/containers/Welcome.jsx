import React from "react"
import Paper from '@material-ui/core/Paper'
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylepage.css'
import Footer from "../components/footer"
import { useHistory } from 'react-router-dom'



const stylepaper= {
    paddingTop: '50px',
    paddingRight: '30px',
    paddingBottom: '70px',
    paddingLeft: '80px',
}


const Welcome = () => {
    const history = useHistory();

    return( 
        <Paper elevation={12}>
    

    <div> 
    <div style={stylepaper}elevation ={24}>
    Welcome! The Department of Computer Science offers exciting and high quality graduate degree programs
    and certificates. In addition, computer Science department offer graduate certificates: Artificial Intelligence, Cybersecurity,
    Data Science, Internet and Web, and Mobile Apps and Computing. Certificates can be earned as part of a degree, or
   separately.

   </div>
   <br></br>      <br></br>

   <div  class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-outline-primary btn-lg " type="button" onClick={()=> history.push("/Prerequisite")}>Begin Degree Planning</button>
    </div>
     </div>
     <Footer />
     </Paper>
    

    )    

}

export default Welcome

