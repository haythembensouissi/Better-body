import Link from 'next/link'
import Navbar from './Navbar'
export default function Diet({diets}:any){

    return(
        <div>
            <Navbar />
            <Link href="Diet/breakfast">
            <button>Breakfast</button>
             </Link>
             <Link href="Diet/lunch">
            <button>Lunch</button>
             </Link>
             <Link href="Diet/dinner">
            <button>Dinner</button>
             </Link>
             <div className="search-container">
         <form >
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
            {diets.map((diet:any,index:number)=>(
                    <div key={index}>
                    <h1>{diet.nameReceipe}</h1>
                    <img src={diet.image} alt="" />
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
 



