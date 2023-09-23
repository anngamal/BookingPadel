import reactRouterDom from "react-router-dom"
import {useState} from "react"
import ScheduleApp from "./ScheduleApp"
import Appointment from "./Appointment"
import Advertising from "./Advertising"

export default function ManagaApp({setInfo, setCurrentUser, currentUser , info}){

    console.log("this is info", info)
    console.log("currentUser", currentUser)
    const userAppointments = info.filter(appt=> {
        return appt.email === currentUser.email
        })
        
        
        return(
           
        <div id="manageMainDiv">
            <div>
                <h2 id="manageApph2">Let's play PADEL</h2>
                <h4  id="manageApph4">Book First To Manage Your Appointment</h4>
            <div>
           
              {userAppointments.map((info)=>{
    
                return <Appointment key={info.id} {...info} setInfo={setInfo}/>
              })}
           
            </div>
            <div id="manageAppointmentImgDiv">
             {/* <img id="scheduleimg" src="https://padel.wsbsport.com/wp-content/uploads/2020/05/LOGO-PADEL.png"/> */}
             </div>
        </div>
    </div>
    
    )
}