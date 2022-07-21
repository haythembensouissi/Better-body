import Link from "next/link"
import Navbar from "./Navbar"
import Diet from "./Diet"
function Homepage(){
    return (
       
        <div>
    
        <Navbar/>  
 <Link href="/signup"><button  > signup </button></Link>
 <Link href="/login"><button > login </button></Link>
                   </div>
    )
}
export default Homepage