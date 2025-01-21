import { useLocation } from "react-router-dom";
import useFetch from '../../hooks/use-fetch'
import useWindowResize from "../../hooks/use-window-resize";


function Receipe(){
const location = useLocation();

const resultFromCustomUseFetchHook = useFetch('https://dummyjson.com/recipes');
const WidowSize = useWindowResize();

console.log(resultFromCustomUseFetchHook);
const data = resultFromCustomUseFetchHook.data;
console.log(location);

    return(<>
        <div>
            <h1>Recipe List Pages</h1>
            <h2>Current Window Width is {WidowSize.width} and Current widow hieght is {WidowSize.height}</h2>
            <ul>
                {
                    data && data.recipes.map(recipe => <div>
                        <img src={recipe.image}/>
                        <label>{recipe.name}</label>
                    </div>)
                }
            </ul>
        </div>
    </>);
}

export default Receipe;