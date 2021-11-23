import React from "react"
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from "react-bootstrap"

import { createSvgIcon } from '@mui/material/utils'

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);

const stylespam = {
    fontSize: '15px',
    merginLeft:'60px '
}


const Header = () => {
    return (
        <div>
            
            <div class="header-page">
                <h1 style ={{fontWeight: "bold"}}>UMSL| <spam style ={{fontSize: "20px",  fontWeight: "bold"}}> University of Missouri–St. Louis</spam> </h1>
            </div>
            <div class="sous-header">
            <HomeIcon fontSize="large"/>
                 <spam style={{verticalAlign: 'bottom'}}> MS Computer Science: Program Advising Tool </spam>
                  <div class='childdiv'>
                  <spam style={stylespam}> Need more information? </spam>
                  <Button type="button" class="btn btn-primary btn-sm" >Contact an Advisor</Button>
                    </div> 
            </div>
       
        </div>
        
    )
}

export default Header