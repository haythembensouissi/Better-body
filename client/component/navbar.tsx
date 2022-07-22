

const Navbar =()=>{



  
const showNavbar =()=>{
  const userConnection=200
if (userConnection===200){
  return  ( <ul className="nav">
  <li><a href="/">Home</a></li>
  <li><a href="/Diet">Diet</a></li>
  <li><a href="/Workout">Workout</a></li>
  <li><a href="/Aboutus">About us</a></li>
  <li><a href="#">Contact</a></li>

  </ul>)

}else if(userConnection===0 ||userConnection===null){
  return<div>hola</div>
  

}
}
    return(<div>
     
      {showNavbar()}
      
      
  </div>) 
};
export default Navbar;
