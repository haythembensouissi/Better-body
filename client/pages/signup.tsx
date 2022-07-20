import { useState } from "react"
const  Signup =()=>{
    //sign up 
 const [emails,setEmail] = useState("")
 const [passwords,setPassword] = useState("")


 const signup:any= async () =>{
try{
    await fetch("http://localhost:2000/api/user/signup",{
     method:"POST",
     headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({email:emails,password:passwords})
    })
    
}catch (error) {
    console.log(error);
 }

 }
    return(
        <div className="container">
          <div className="login-card">
      
            <div className="login-card-items">
      
            </div>
      
          </div>
          <div className="login-signup-cards">
          <div className="signup-card">
      
            <div className="signup-card-items">
      
              <h1 className="signup-tag">Sign Up</h1>
      
              <form className="form-items"> 
      
                <input className="email-item" type="email" placeholder="E-Mail" onChange={(e)=>{
                      setEmail(e.target.value);
                }}/>
      
                <input className="password-item" type="password" placeholder="Password" onChange={(e)=>{
                    setPassword(e.target.value);
                }} />
      
                <button className="button-item" type="button" onClick={()=>{return signup()}}>Sign Up</button>
      
                <div className="have-account-item">
      
                 <a href="/login">Have already an account? <span>Log In</span></a>
      
                </div>
                </form>
      
            </div>
      
          </div>
      
        </div>
     
      </div>
  
    )
}
export default Signup