/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
import Link from "next/link"
import Homepage from "./index"
import axios from "axios";

function login (){
        //log in
 const [emails,setEmail] = useState("")
 const [passwords,setPassword] = useState("")
 const [status,setStatus] = useState(0)

 const Login:any= async () =>{
  const  res = await axios.post("http://localhost:2000/api/user/login",{email:emails,password:passwords},{
    headers: {
    'Content-Type': 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem("access_token")}`
    }});
  localStorage.setItem("token", res.data.token);
  console.log(localStorage)
  setStatus(res.status)
 console.log(res)
 
};

// const Login:any= async () =>{

//   await fetch("http://localhost:2000/api/user/login",{
//    method:"POST",
//    headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//   },
//   body: JSON.stringify({email:emails,password:passwords})
//   }).then(resp=>{
// console.log(resp)
//   setStatus(resp.status)
//   }).then ((data)=>{
//     console.log(data)
//   })
//   .catch(err=>{ console.log(err); });
  
// }
//chack if the user is logged in to direct him to the home page
const UserIsLogged:any=()=>{
    if(status===200){
        return <Homepage />
    }else if(status===2001 || status===0){
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
{UserIsLogged()}
</div>
    )
}
export default login