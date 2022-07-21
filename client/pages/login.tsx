/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import {useState,useEffect} from 'react'
import Homepage from "./index"
import axios from "axios";



function login (){
        //log in
 const [emails,setEmail] = useState("")
 const [passwords,setPassword] = useState("")

 const [curentuser,setCurrentUser] = useState("")
 const [connected,setConnected] = useState(0)

 useEffect(() => {
 
   let connect :any = localStorage.getItem("connected");
   const loggedInUser:any= localStorage.getItem("userName");
setCurrentUser(loggedInUser)
   setConnected(connect)
}, []);



 const Login:any= async () =>{
  const  res = await axios.post("http://localhost:2000/api/user/login",{email:emails,password:passwords});
  localStorage.setItem("token", res.data.token);
localStorage.setItem("userName", res.data.userName)
  localStorage.setItem("userId", res.data.userId);
  localStorage.setItem("connected", res.data.connected);
console.log(res)
 
 
 
};


const Logout = () => {
  setCurrentUser("");
  setEmail("");
  setPassword("");
  setConnected(0)
  localStorage.clear();
};
const UserIsLogged:any=  ()=>{
  // const loggedInUser :any= localStorage.getItem("userName");
  
//  let connect :any = localStorage.getItem("connected");

  // console.log(connect)
 if( connected==200){
    
       return ( 
       <div>  <Homepage />welcome back  {curentuser} 
       
       <button onClick={()=>{return Logout()}}>Logout</button>
       </div>
       )
    }else {
  return (

<div className="container">

<div className="login-signup-cards">

  <div className="login-card">

    <div className="login-card-items">

      <h1 className="login-tag">Log In</h1>

      <form className="form-items">

        <input className="email-item" type="email" placeholder="E-Mail" onChange={(e)=>{
                      setEmail(e.target.value);
                }}/>

        <div className="password-item">

          <input type="password" placeholder="Password" onChange={(e)=>{
                      setPassword(e.target.value);
                }}/>

          <div className="forgot-password-item">

            <a href="#">Forgot password?</a>

          </div>

        </div>

        <button className="button-item" type="button" onClick={()=>{return Login()}}>Log In</button>

        <div className="create-account-item">

     <a href="/signup"> Don't have an account? <span>Sign Up</span></a>

        </div>

      </form>

    </div>

  </div>


</div>

</div>
  )
              }
}


    return(
<div>
  
{ UserIsLogged()}
</div>
    )
}
export default login