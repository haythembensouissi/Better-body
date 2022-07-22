export default function Type({newworkouts}:any){
    return(
        <div>
                <ul>
            {newworkouts.map((workout:any,index:number)=>(
                     // eslint-disable-next-line react/jsx-key
                     <ul className="cards">
                     <li className="cards__item">
                      <div className="card">
                         <img className="card__image card__image--fence" src={workout.img}/>
                         <div className="card__content">
                           <div className="card__title">{workout.name}</div>
                           <p className="card__text">{workout.description} </p>
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
 const workouts  = await fetch (`http://localhost:2000/api/workouts/all/one/${params.typeID}`).then(response => response.json())
const newworkouts=[workouts]
 return {
    props:{
        newworkouts
    }
 }
}   
 



