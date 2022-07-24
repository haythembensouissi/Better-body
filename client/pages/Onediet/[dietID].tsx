export default function OneDiet({diet}:any){

    return(
        <div>
            <ol>
              {diet.ingredients.split(";").map((ingredient:String) => (
                <li>
                  {ingredient}
                </li>

              ) 
                )}
            </ol>
          </div>
    )
}
export async function getServerSideProps({params}:any) {
  console.log(params)
 const diet  = await fetch (`http://localhost:2000/api/oneDiet/${params.dietID}`).then(response => response.json())
 return {
    props:{
        diet
    }
 }
}   
 



