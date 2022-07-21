/* eslint-disable react/jsx-key */

import Link from "next/link"
import Navbar from "./Navbar"

export default function Workout({workouts}:any){
   
   
    return(
        <div>
           <Link href="Workout/legs">
            <button>legs</button>
             </Link>
             <Link href="Workout/push">
            <button>push</button>
             </Link>
             <Link href="Workout/core">
            <button>core</button>
             </Link>
         
          
            {workouts.map((workout:any,index:number)=>(
                <ul>
                    <div key={index}></div>
                    <h1>{workout.name}</h1>
                    <img src={workout.img}  />
                    <p>{workout.description}</p>
                </ul>
            ))}
        </div>
    )
}
export async function  getStaticProps(){
    const workouts= await fetch("http://localhost:2000/api/workouts").then(response=>response.json())
    return {
        props:{
            workouts
        }
    }
}
