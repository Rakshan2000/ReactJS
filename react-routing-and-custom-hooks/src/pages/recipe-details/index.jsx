import { useParams } from "react-router-dom";

function recipeDetails(){

    const params = useParams();

    console.log(params);
    const {id} = params;

    return(
        <h1>Recipe Details Page of {id}</h1>
    );
}
export default recipeDetails;