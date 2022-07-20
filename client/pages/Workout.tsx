/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"

export default function Workout(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:2000/api/workouts").then(response=>response.json()).then(data=>setData(data))
    },[])
    return(
        <div>
            {data.map((workout:any,index:number)=>(
                <ul>
                    <div key={index}></div>
                    <h1>{workout.name}</h1>
                    <img src={workout.img} alt="" />
                    <p>{workout.description}</p>
                </ul>
            ))}
        </div>
    )
}
