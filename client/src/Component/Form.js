// form.js
import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Form.css'; 
import Display from "./Display";
import { Link, useNavigate } from "react-router-dom";


export default function Form({setlogin}){
  const navigate = useNavigate() ;
  const [user, setUser] = useState([]);
 const [input, setinput] = useState(" ");
    const  [password, setpassword] = useState(" ");
    const [LEmail, setLEmail] = useState(" ");
    const [Email,setEmail ] = useState(" ");
    const  [Lpassword, setLpassword] = useState(" ");
    const  [accessToken, setAccessToken] = useState(" ");
    


   useEffect(() => {
      const checkToken = async () => { console.log("cheecking token");
        try {
          const response = await axios.get('http://localhost:5000/display',{withCredentials:true});
          setlogin(response.data.user.input);
          navigate('/display');
        } catch (error) {
          
        console.log("error aa rhi hein"); 
        }
      };
  
      checkToken();
    }, [navigate, setlogin, accessToken]);



    
const collectdata =async (e) => { 
    console.log("registration started")
    await axios.post('http://localhost:5000/register',{input,password, Email},{withCredentials:true})
    .then((res)=>{console.log("collected")})
    .catch((err)=>{console.log("GADBAD HO GYA BHAIII ")})
}

// 
const Checkdata = async () => {
    console.log("checking");
   await axios.post('http://localhost:5000/login',{LEmail,Lpassword},{withCredentials:true})
   .then((users) => { setlogin(users.data.user);
   
    console.log(users.data.user.input);
   navigate('/display');


   
  
  })
   .catch((error) => {console.log("error")});
    console.log(user);
};
  
  

  
  return(


<>

	

	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<div class="form-group">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" value={LEmail} onChange = {(e)=>  setLEmail(e.target.value) } autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" value={Lpassword} onChange = {(e)=>  setLpassword(e.target.value) } autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<button  class="btn mt-4" onClick={Checkdata}>submit</button>
                            			
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Sign Up</h4>
											<div class="form-group">
												<input type="text" name="logname" class="form-style" placeholder="Your  Name" id="logname" value={input} onChange = {(e)=>  setinput(e.target.value) } autocomplete="off"/>
												<i class="input-icon uil uil-user"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" value={Email} onChange = {(e)=>  setEmail(e.target.value) } autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" value={password} onChange = {(e)=>  setpassword(e.target.value) } autocomplete="off" />
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<button onClick={collectdata}>submit</button>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>









</>























    )
}