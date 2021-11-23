import React from 'react'

const stylefooter ={
    backgroundColor: 'rgb(58, 57, 57)',
    fontFamily: '"Times New Roman", Times, serif',
    color: '#fff',
    fontSize: '15px',
    position: 'relative',
    textAlign: 'center',
    marginTop: '100px'

}
    


const Footer = () =>{
    return(
        <div style={stylefooter}>
            <spam  style ={{ fontSize: "20px", fontWeight: "bold", color:"hsl(350, 67%, 36%) "}}> UMSL</spam> <br></br>
                University of Missouri—St. Louis <br></br>
                1 University Blvd.<br></br>
                St. Louis, MO 63121-4400 <br></br>
                Office Number:
                314-516-5000 <br></br>
                Admissions Toll-Free
                1-888-GO-2-UMSL
        </div>
    )
    
}

export default Footer 
