export default function OneDiet({diet}:any){

    return(
        <div>
                <ul>
                <div key = {diet._id}>         
                    <ul className="cards">
                     <li className="cards__item">
                      <div className="card">
                         <img className="card__image card__image--fence" src={diet.image}/>
                         <div className="card__content">
                           <div className="card__title">{diet.nameReceipe}</div>
                           <p className="card__text">{diet.description} </p>
                           <button className="btn btn--block card__btn">Button</button>
                         </div>
                       </div>
                     </li>
               </ul> 
             </div>      
            </ul>
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
 



