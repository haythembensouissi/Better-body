import Link from 'next/link'
import Navbar from './Navbar'
export default function Diet({diets}:any){

    return(
        <div>
            <Navbar />
           <Link href ='/breakfast'> <button >Breakfast </button></Link>
           
            {diets.map((diet:any,index:number)=>(
                    <div key={index}>
                    <h1>{diet.nameReceipe}</h1>
                    {/* <img src={diet.image} alt="" /> */}
                    <p>{diet.description}</p>
                    </div>
            )
            )}
    
          </div>
    )
}
export async function getStaticProps() {
    const diets = await fetch ("http://localhost:2000/api/diets").then(response => response.json())
    return {
        props:{
            diets
        }
    }
}   
 



