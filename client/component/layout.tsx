import Navbar from "./navbar"
const Layout= ({children}:any)=>{
return (
    <>
    <div > 
        <Navbar />
        <div>{children}</div>
    </div>
    </>
)
}
export default Layout