import React from "react"
import {fourcourses, fivecourses,sixcourses} from "../api/courses"
import './ListCourse.css'

        
const Listcourse = () => {
    return (
        <div class="container-fluid">
        <div class="row flex-row flex-nowrap">
            <div class="col-3">
                <div class="card card-block" style= {{scrollBehavior: 'smooth' , overflow: 'scroll'}}>
                <h5 style= {{textDecoration: 'underline'}}> 4XXXLevel Courses</h5>
                {fourcourses.map((course) => (
            <span class="form-check">
            <input class="form-check-input" type="checkbox" value= {course.number} id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
               <span >{course.number +" - " + course.name}</span> <br></br>
             
            </label>
            </span>
            ))
            }   
                </div>
            </div>

        <div class="col-3">
            <div class="card card-block" style= {{scrollBehavior: 'smooth' , overflow: 'scroll'}}>
            <h5 style= {{textDecoration: 'underline'}}> 5XXXLevel Courses</h5>
            {fivecourses.map((course) => (
        <span class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
           <span >{course.number +" - " + course.name}</span> <br></br>
         
        </label>
        </span>
        ))
        }   
            </div>
        </div>

        <div class="col-3">
            <div class="card card-block" style= {{scrollBehavior: 'smooth' , overflow: 'scroll'}}>
            <h5 style= {{textDecoration: 'underline'}}> 6XXXLevel Courses</h5>
            {sixcourses.map((course) => (
        <span class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
           <span >{course.number +" - " + course.name}</span> <br></br>
         
        </label>
        </span>
        ))
        }   
            </div>
        </div>
        </div>
    </div>
    )
}




export default Listcourse

