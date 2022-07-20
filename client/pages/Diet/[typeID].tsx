export default function Type({diets}:any){
    return(
        <div>
                <ul>
            {diets.map((diet:any,index:number)=>(
                    <div key={diet.id}>
                    <h1>{diet.nameReceipe}</h1>
                    {/* <img src={diet.image} /> */}
                    <p>{diet.description}</p>
                    </div>
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
 



