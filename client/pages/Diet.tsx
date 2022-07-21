// @ts-nocheck
import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Diet({ diets }: any) {
  const [formInput, setFormInput] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [oldDiets, setDiets] = useState(diets);

  const handleInput = (event: any) => {
    let { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
    setSearchTerm(event.target.value);
  };
  const search = async (event) => {
    event.preventDefault();
    let newDiets = await fetch(
      `http://localhost:2000/api/${formInput.searchTerm}`
    ).then((response) => response.json());
    setDiets(newDiets);
    console.log(newDiets);
  };
  return (
    <div>
      <Navbar />
    }
    const search = async (event) =>{
        event.preventDefault()
         let newDiets = await fetch(`http://localhost:2000/api/${formInput.searchTerm}`).then(response => response.json())
         setDiets(newDiets)
         console.log(newDiets)
    }
    return(

        <div>
            <div>
                <form onSubmit={search}>
                    <input className="search" name="searchTerm" value={searchTerm} onChange={handleInput} type ="text" required />
                    <button className='btn-search'>search</button>
                </form>
            </div>

            <div>
            <Link href="Diet/breakfast">
            <button>Breakfast</button>
             </Link>
             <Link href="Diet/lunch">
            <button>Lunch</button>
             </Link>
             <Link href="Diet/dinner">
            <button>Dinner</button>
             </Link>

            </div>
             <div className="search-container">
  </div>
            {oldDiets.map((diet:any,index:number)=>(
                    <div key={index}>
                    <h1>{diet.nameReceipe}</h1>
                    {/* <img src={diet.image} alt="" /> */}
                    <p>{diet.description}</p>
                    </div>
            )
            )}
    
          </div>
    )
}
export async function getStaticProps() {
  const diets = await fetch("http://localhost:2000/api/diets").then(
    (response) => response.json()
  );

  return {
    props: {
      diets,
    },
  };
}
