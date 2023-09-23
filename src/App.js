import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar.js"
import MainVid from './components/MainVid';
import Footer from './components/Footer';
import ScheduleApp from './components/ScheduleApp';
import ContactUs from './components/ContactUs';


import { Switch, Route } from "react-router";
import ManagaApp from './components/ManagaApp';
import Advertising from './components/Advertising';
import ScheduleImg from './components/ScheduleImg';

function App() {
  const [infos, setInfo] = useState([])
  const [currentUser, setCurrentUser] = useState({ email: "" }) 
  useEffect(() =>{
    fetch(" http://localhost:8085/info")
    .then((res) => res.json())
    .then((infos)=>setInfo(infos))
    
  },[])

  const [page,setPage] = useState("/")

  return (
    <div className="App">
      <header className="App-header">
        <Navbar SetPage={setPage}/>
        <Switch>
          <Route exact path="/">
 
            <ImageGallery />
            <MainVid />
            <Footer />
          </Route>
          <Route path="/scheduleApp">
            <div id="scheduleAppAndAdv">
            <ScheduleApp setInfo={setInfo} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
            <ScheduleImg />
            </div>
           </Route>
           <Route path="/managaApp">
            <div id="manageAppAndAdv">
            <ManagaApp setInfo={setInfo} setCurrentUser={setCurrentUser} info={infos} currentUser={currentUser} />
            <Advertising />
            </div>
           </Route>
           <Route path="/contactUs">
            <ContactUs />
           </Route>
         
        </Switch>
  
       
       
        
      </header>
    </div>
  );
}


export default App;
