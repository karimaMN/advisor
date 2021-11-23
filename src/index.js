import React from "react"
import Welcome from "./containers/Welcome"
import ReactDOM from "react-dom"
//import {Nav } from "react-bootstrap"
import Header from "./components/header"
import Prerequisite from "./containers/Prerequisite"
//import Listcourse from "./containers/Listcourse"
import Completed from "./containers/Completed"
import Traditional from "./containers/Traditional"
import Certificate from "./containers/Certificate"
import SixLevel from "./containers/SixLevel"
import Waived from "./containers/Waived"
import FinalPlan from "./containers/FinalPlan"
//import {Route,BrowserRouter, Link} from "react-router-dom"
//import NavBar from './components/NavBar'


import {BrowserRouter, Route} from 'react-router-dom'

const AppContainer = () => { // contains all your individual pages 
  return (
      <div>
    <Header />  

    <BrowserRouter>
    <Route component={Welcome} exact path='/' / >
    <Route component={Prerequisite} path='/Prerequisite' / >
      <Route component={Completed} path='/Completed' />
      <Route component={Waived} exact path='/waived' / >
      <Route component={Traditional} path='/Traditional' />
      <Route component={Certificate} path='/Certificate' />
      <Route component={SixLevel} path='/SixLevel' />
      <Route component={FinalPlan} path='/FinalPlan' />




    </BrowserRouter>
    </div>
  )

}







ReactDOM.render(<AppContainer />, document.querySelector('#root'))