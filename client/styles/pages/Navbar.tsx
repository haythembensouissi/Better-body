import Link from "next/link"

function Navbar(){
    return(
        <div>
       
           <nav className="navbar navbar-expand-sm bg-light">
           <div className="nav-header">
    <div className="nav-title">
      Better B
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
<ul className="navbar-nav">
  <li className="nav-item">
  <Link href="/User">user</Link>
  </li>
  <li className="nav-item">
  <Link href="/Diet">Diet</Link>
  </li>
  <li className="nav-item">
  <Link href="/Workout">workout</Link>
  </li>
  <li className="nav-item">
   <Link href="/Aboutus">about</Link>
  </li>
  <li className="nav-item">
   <Link href="/Blogging">blogging</Link>
  </li>
</ul>

</nav>
     </div>
    )
}
export default Navbar