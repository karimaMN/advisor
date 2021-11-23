import React from "react"
import NavBar from "../components/NavBar"
import {useHistory} from "react-router-dom"
import {useState} from 'react'

const buttonStyle = {
    marginTop: "100px",
    textAlign:'center'
}


const Certificate = () => {
    const history = useHistory()
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)
    const [checked6, setChecked6] = useState(false)
    const [checked7, setChecked7] = useState(false)

    const goBack = () => {
        history.goBack()
      }

    return (
        <div>
            <NavBar />
            <div style={{  paddingLeft:"30px",marginTop:"15px"}}> The M.S. in Computer Science has three different options to choose from, offering a wide range of
             career opportunities. All graduates will have a broad computing background and will be exposed to a
             wide range of technologies. </div>
            <div style = {{marginLeft:'30px', marginTop: '20px'}}>
            <div>
                <span>Required core courses for all three options</span>
            <ul> 
            <li>4250 - Programming Languages</li>
            <li>5130 - Advanced Data Structure and Agorithms</li>
            <li>5500 - Software engeneering</li>
           </ul>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked6(!checked6)} checked={checked6} />
            <label style ={{ fontWeight: 'bold'}}class="form-check-label" for="flexCheckDefault">
                Traditional Option
            </label>
            </div>
            { checked6 ? (
             <div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio" value="" id="flexCheckDefault" checked= 'checked'/>
            <label class="form-check-label" for="flexCheckDefault">
                4760 - Operating Systems
            </label>
            </div>
            
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio" value="" id="flexCheckDefault" checked= 'checked'/>
            <label class="form-check-label" for="flexCheckDefault">
                5700 - Computer Systems
            </label>
            </div>
         </div>) : (<div></div>)
}
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked7(!checked7)} checked={checked7} />
            <label style ={{ fontWeight: 'bold'}}class="form-check-label" for="flexCheckDefault">
                Professional Option
            </label>
            </div>
            { checked7 ? (
             <div>
                 <h7 style = {{marginLeft:'20px'}}>Pending</h7>
            </div>) : (<div></div>)
}
<span style= {{textDecoration: 'underline',fontSize:'20px', fontFamily:'Italic', color:'#991e33'}}>Graduate Certificates</span> 

            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked1(!checked1)} checked={checked1} />
            <label style ={{ fontWeight: 'bold'}}class="form-check-label" for="flexCheckDefault">
                Artificial Intelligence
            </label>
            </div>
            { checked1 ? (
             <div>
            <div class="form-check" style = {{marginLeft:'20px'}} >
            <input class="form-check-input" type="radio" value="" checked = 'checked' id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
                5130 - Advanced Data Structures and Algorithms 
            </label>
            </div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio"  checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5300 - Artificial Intelligence
            </label>
            </div>
         </div>) : (<div></div>)
}

            <div class="form-check" variant="secondary" >
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked2(!checked2)} checked={checked2}/>
            <label style ={{ fontWeight: 'bold'}}class="form-check-label" for="flexCheckDefault">
                Cyber Security
            </label>
            </div>
            { checked2 ? (
            <div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio" checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4730 - Computer Networks
            </label>
            </div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio"  checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5702 - Cyber Threads and Defense 
            </label>
            </div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio"  checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5782 - Advanced Information Security 
            </label>
            </div>
            </div>) : (<div></div>)
}
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked3(!checked3)} checked={checked3}/>
            <label style ={{ fontWeight: 'bold'}}class="form-check-label" for="flexCheckDefault">
                Data Science
            </label>
            </div>
            { checked3 ? (
            <div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio" checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4200 - Python for Scientific Programming and data Science
            </label>
            </div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio"  checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5340 - Machine Learning
            </label>
            </div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio"  checked= 'checked' value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
                5342 - Data Mining
            </label>
            </div>
            </div>) : (<div></div>)
}
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked4(!checked4)} checked={checked4}/>
            <label style ={{ fontWeight: 'bold'}}class="form-check-label" for="flexCheckDefault">
                Internet and Web
            </label>
            </div>
            {checked4 ? (
            <div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio" checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4010 - Advanced Web Development with Java
            </label>
            </div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio"  checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4011 - Web Development with Advanced JavaScript
            </label>
            </div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio"  checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5012 - Enterprise Web Development
            </label>
            </div>
            </div>) : (<div></div>)
}
     
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setChecked5(!checked5)} checked={checked5}/>
            <label style ={{ fontWeight: 'bold'}}class="form-check-label" for="flexCheckDefault">
               Mobile Apps and Computing
            </label>
            </div>
            {checked5 ? (
            <div> 
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio" checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5020 - Android Apps: Android Fundamentals
            </label>
            </div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio"  checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                4220 - Introduction to iOS Programming and Apps
            </label>
            </div>
            <div class="form-check" style = {{marginLeft:'20px'}}>
            <input class="form-check-input" type="radio"  checked= 'checked' value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                5792 - mobile Computing, Networking and Security
            </label>
            </div>
            </div>) : (<div></div>)
}




</div>
            
<div style ={buttonStyle}>
            <button class="btn btn-outline-primary btn-lg " type="button" onClick={goBack}>Go Back</button> {' '}
            <button class="btn btn-outline-primary btn-lg "  type="button" onClick={()=> history.push("/SixLevel")}>Next Step</button>
            <br></br> <a href="/" class="link-danger">Home</a>
        </div>
        </div>
    )
}
export default Certificate