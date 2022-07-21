import Link from "next/link"

export default function Type({workouts}:any){
    return(
        <div>
           
                <ul>
            {workouts.map((workout:any,index:number)=>(
                    <div key={workout.id}>
                    <h1>{workout.name}</h1>
                    { <img src={workout.img} /> }
                    <p>{workout.description}</p>
                    </div>
            )
            )}
            </ul>
          </div>
    )
}
export async function getServerSideProps({params}:any) {
 const workouts  = await fetch (`http://localhost:2000/api/workouts/${params.typeID}`).then(response => response.json())
 return {
    props:{
        workouts
    }
 }
}   