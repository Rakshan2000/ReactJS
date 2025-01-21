import { useEffect, useRef, useState } from "react";

function Hooks() {

    const number = useRef(0);
    const divElementsRef = useRef();
    const inputRefElement = useRef();


    const [count, setCount] = useState();
    
    function CountValue(){
       setCount(number.current++)
    }

    useEffect(()=>{

        const getCurretDivReference = divElementsRef.current
        inputRefElement.current.focus();

        getCurretDivReference.style.color = "red";

        setTimeout(() => {
            getCurretDivReference.style.color = "green";

            setTimeout(() => {
                getCurretDivReference.style.color = "blue";
            }, 5000);
        }, 5000);
    },[])

    return(<>
        <h1>Use ref, use callback and use memo hook</h1>
        <h1>{count}</h1>
        <button onClick={CountValue}>Count</button>
        <h1 ref={divElementsRef}>Rakshan C K</h1>
        <input name="Name" placeholder="Enter your Name" ref={inputRefElement}/>
    </>);
}

export default Hooks;