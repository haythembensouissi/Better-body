/* eslint-disable @next/next/google-font-display */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
// @ts-nocheck
import getConfig from "next/config"
import Link from "next/link"
import { useState } from "react"
import Navbar from "./Navbar"
export default function Workout({workouts}:any){
    const [formInput,setFormInput] = useState([])
    const [searchTerm,setSearchTerm]= useState("")
    const [oldworkouts, setWorkouts] = useState(workouts)
    
    const handleInput =(event:any)=>{
        let {name,value} = event.target
        setFormInput({...formInput,[name]:value})
        setSearchTerm(event.target.value)

    }
    const search = async (event)=>{
        event.preventDefault()
        let newworkouts=await fetch(`/api/workouts/all/${formInput.searchTerm}`).then(response=>response.json())
        setWorkouts(newworkouts)
        
    }
   
    
    return(
        <div>
            <div className="content">
   
           <form onSubmit={search}>
  <div className="search">
    <input type="text" className="search__input" aria-label="search" value={searchTerm} onChange={handleInput} placeholder="enter your search"/>
    <button className="search__submit" aria-label="submit search"><span className="material-symbols-outlined">
search
</span></button>    
  </div>
</form>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</div>
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
                    <img className="images" src={workout.img}  />
                    <p>{workout.description}</p>
                </ul>
            ))}
        </div>
    )
}


export async function  getStaticProps(){
    const workouts= await fetch("http://localhost:2000/api/workouts/all").then(response=>response.json())
    return {
        props:{
            workouts
        }
    }
}
