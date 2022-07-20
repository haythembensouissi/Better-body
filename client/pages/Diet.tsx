/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */


import { ChangeEvent, useEffect, useState } from 'react'

export default function Diet(){
    const [data,setData]=useState([])
    interface OneDiet {
        name: string,
        img: string,
        description:string
    }
    

    
    useEffect(()=>{
        fetch("http://localhost:2000/api/diets").then(respone=>respone.json()).then(data=>setData(data))
    },[])
    const [newDiet,setnewDiet]=useState({name:"spaghetti",img:"qdqsdq",description:"spaghetti is healthy"})
    const [input,setInput]=useState('')

    return(
        <div>
            

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
 



