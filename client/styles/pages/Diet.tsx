/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'

import { ChangeEvent, useEffect, useState } from 'react'

export default function Diet(){
    const [data,setData]=useState([])
    interface OneDiet {
        name: string,
        img: string,
        description:string
    }
    const handletextchange=(event:ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)
        console.log(event.target.value)
    }

    
    useEffect(()=>{
        fetch("http://localhost:2000/api/diets").then(respone=>respone.json()).then(data=>setData(data))
    },[])
    const [newDiet,setnewDiet]=useState({name:"spaghetti",img:"qdqsdq",description:"spaghetti is healthy"})
    const [input,setInput]=useState('')
    const adddiet:any=async()=>{

        const res = await fetch ('/api/diets',{
            method:"POST",
            body:JSON.stringify({newDiet}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data= await res.json()
        console.log(data)
    }
    return(
        <div>
            
            <form >
                <input type="text" onChange={handletextchange}/>
                <button onClick={adddiet}>add diet</button>
            </form>
            {data.map((diet:any,index:number)=>(
                <ul>
                    <div key={index}>
                    <h1>{diet.name}</h1>
                    <img src={diet.img} />
                    <p>{diet.description}</p>
                    </div>
                </ul>
            )
            
            )}
          </div>
    )
}
 



