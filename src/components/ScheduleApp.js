import React, {useState} from "react"
import Advertising from "./Advertising"

export default function ScheduleApp({setInfo, setCurrentUser , info}){
    const[schedule , setSchedule] = useState(true)
    // function handleToogleScheduleClick(){
    //     setSchedule(!schedule)
    // }
   
    const resetForm = {
    'name' : "",
        'dropDown' : "",
        'email' : "",
        'phoneNum':"",
        'date':""
    }
    const [formData, setFormData] = useState(
        resetForm
    )
    function handleChange(event){
        setFormData(prev =>{
            return{
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch(" http://localhost:8085/info",{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            setInfo(prevInfos =>[...prevInfos, data])
        })
        setCurrentUser({ email: formData.email })
        setFormData(resetForm)

    }
    return(
        <div> 
        {/* <div id="scheduleImg">
            <img src="https://img1.wsimg.com/isteam/ip/3c88d52b-9885-4fd4-a59e-36b753049eb2/IMG_3909-min.jpg/:/" alt="oadel"  id="scheduleImg"/>
        </div> */}
        <div id="ScheduleApp">    
        <h1 id="h1ScheduleApp">Book Now</h1>
        <form id="formInfo" onSubmit={handleSubmit}> 
        
        <div id="divFormInfo">
            <input type="text" id="name" name="name" placeholder="Name"  onChange={handleChange}  value={formData.name} />
            <input type="date" id="date" name="date" onChange={handleChange} value={formData.date} />
            <select id="dropdown"  name="dropDown" onChange={handleChange}  value={formData.dropDown} >
        <option value="">--Select--</option>
        <option value="1:00">01:00</option>
        <option value="2:00">02:00</option>
        <option value="3:00">03:00</option>
        <option value="4:00">04:00</option>
         </select>
            {/* <input type="text" id="apptTime"  name="apptTime" placeholder="appointment time" onChange={handleChange}  value={formData.apptTime} /> */}
            <input type="text" id="email"name="email" placeholder="Email"onChange={handleChange}  value={formData.email} />
            <input type="number" id="phoneNum" name="phoneNum" placeholder="Number" onChange={handleChange}  value={formData.phoneNum} />
        </div>
        <input className="" type="submit" value="Schedule" id="submitBtn"/>
        </form>
        </div>
       
        {/* <img id="scheduleimg" src="https://padel.wsbsport.com/wp-content/uploads/2020/05/LOGO-PADEL.png"/> */}
        </div>
    )
}

