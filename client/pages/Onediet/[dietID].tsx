import { Dirent } from "fs"
import { useState } from "react"

export default function OneDiet({diet}:any){
  const [view ,setview] = useState(true);
  const changeView:any =()=>{
if (view===true){
  return(
  <ul className="recipe-card__ingredients" >
  {diet.ingredients.split(";").map((ingredient:String) => (
    <li>
                {ingredient}
       </li>

            ) 
              )}
</ul>)
}else{
  return <p className="recipe-text">{diet.recipe}</p>
}
  }
    return(
        <div>
 <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>

<div className='recipe-card'>
  <div>
    <img src={diet.image}/>
  </div>
  <div className="recipe-card__body">
    <h1 className="recipe-card__heading">{diet.nameReceipe}</h1>
    <h2 className="recipe-card__subhead">{diet.description}. </h2>
    
    <ul className="recipe-card__nav">
      <li className="list-recipe">
        <h3 className="active"onClick={()=>{
          setview(true)
        }}>Ingredients</h3>
      </li>
      <li className="list-recipe">
        <h3 onClick={()=>{
          setview(false)
        }}>Recipe</h3>
      </li>
    </ul>
    
    {changeView()}
    

  </div>
  
</div>
     </div>
    )
}
export async function getServerSideProps({params}:any) {
  console.log(params)
 const diet  = await fetch (`http://localhost:2000/api/oneDiet/${params.dietID}`).then(response => response.json())
 return {
    props:{
        diet
    }
 }
}   
 



