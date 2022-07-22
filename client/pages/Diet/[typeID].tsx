export default function Type({diets}:any){
    return(
        <div>
                <ul>
            {diets.map((diet:any,index:number)=>(
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
            )
            )}
            </ul>
          </div>
    )
}
export async function getServerSideProps({params}:any) {
 const diets  = await fetch (`http://localhost:2000/api/diets/${params.typeID}`).then(response => response.json())
 return {
    props:{
        diets
    }
 }
}   
 



