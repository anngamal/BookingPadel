import React from "react";
import { Link } from "react-router-dom"

export default function Navbar(){
   
    return(

        <nav id="mainNavBar">
           
            <img  id="navLogo"src="https://1000logos.net/wp-content/uploads/2022/07/Logo-ATT.png" />
           
            <div id="navbar">
                <Link to="/">Home</Link>
                <Link  to="/scheduleApp" >Book Now</Link>
                <Link to="/ManagaApp" >Appointments</Link>
                <Link  to="/ContactUs"  >Contact Us</Link>
            </div>
        </nav>
       
    )
}


{/* <div>
<header class="header_wrap">
    <nav id="navbar">   
    <span className="navSpan">  
<ul className="horizontal-menu">
    <li>Book Now</li>
    <li>Contact Us</li>
    <li>Manage Your Appointment</li>
</ul>
</span>  
 </nav>
</header>
</div> */}