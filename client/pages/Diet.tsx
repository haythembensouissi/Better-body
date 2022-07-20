/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
// import axios from 'axios'
// import { useEffect, useState } from 'react'
import Navbar from './Navbar'
export default function Diet({diets}:any){
    // const [data,setData]=useState([])
    
    // useEffect(()=>{
    //     fetch("http://localhost:2000/api/diets").then(respone=>respone.json()).then(data=>setData(data))
    // },[])
    return(
        <div>
            <Navbar />

                <ul>
            {diets.map((diet:any,index:number)=>(
                    <div key={index}>
                    <h1>{diet.name}</h1>
                    <img src={diet.image} />
                    <p>{diet.description}</p>
                    </div>
            )
            )}
            </ul>
          </div>
    )
}
export async function getStaticProps() {
    const diets = await fetch ("http://localhost:2000/api/diets").then(response => response.json())
    return {
        props:{
            diets
        }
    }
}   
 



