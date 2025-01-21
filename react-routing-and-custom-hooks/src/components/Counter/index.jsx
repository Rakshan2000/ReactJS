import { memo } from "react";

function counter({countValue, onClick}){
    return(<>
        {
            console.log("First Try", onClick)
        }
        <div>
            <p>{countValue}</p>
            <button onClick={onClick}>Click</button>
        </div>

    </>);
}

export default memo(counter);