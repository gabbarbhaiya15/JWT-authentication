// display.j

import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Display.css'

export default function Display({setlogin}){
const navigate = useNavigate();
   const Logout = async ()=>{
    console.log("Logout");
 await axios.get('http://localhost:5000/logout',{withCredentials:true})
 
.then((user)=>{
console.log("User logged out");
navigate('/')
    }) 
    .catch((error)=>{
        console.log("Error in logging out");
})  


}
   
   
    return(
        <div>

<div class="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
        
        <div class="book">
    <div class="d-flex flex-column">
    <p>Hello </p>
    <p>{setlogin}</p>
    </div>
    <div class="cover">
        <p>Hover Me</p>
    </div>
   </div>
   <div >
         <button 
         className="logout"
         id="Logout"
         onClick={Logout}
         >  Logout   </button>
         
         </div>
        </div>
    )
}