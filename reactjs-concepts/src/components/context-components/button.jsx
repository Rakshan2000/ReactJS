import { useContext } from "react";
import { GlobalContext } from "../context";

function contextButtonComponent(){

    const {theme,setTheme} = useContext(GlobalContext);
    console.log(theme)
    return <button onClick={()=> setTheme(theme === 'light' ? 'Dark' : 'light')}>Change Theme</button>
}

export default contextButtonComponent;