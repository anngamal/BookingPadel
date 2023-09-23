import Advertising from "./Advertising"
export default function Appointment({email, name, phoneNum, dropDown , date}){
    return(
        <div>
          {/* <h1 id="appointmentDetails">Appointment Details</h1>     */}
        <div id="manageApp">
       
            <form id="manageForm">
           
           <div id="manageDiv">
           
            <input type="text" id="name2" name="name" placeholder="your name"  value={name} />
            <input type="text" id="email2"name="email" placeholder="email"  value={email} />
            <input type="number" id="phoneNum2" name="phoneNum" placeholder="your number"  value={phoneNum} />
            <input type="date" id="dropdown" name="dropDown"  value={date} />
            <input type="text" id="dropDown2" name="dropDown" placeholder="appointment-time"   value={dropDown} />
            
          
            <button id="editBtn">Edit</button>
            </div>
            </form>   
        </div>
      
        </div>
       

    )
}