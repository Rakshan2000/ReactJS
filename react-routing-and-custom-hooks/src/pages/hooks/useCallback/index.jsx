import { useCallback, useState } from "react";
import Counter from "../../../components/Counter";

function useCallbackExample() {
const [count, setCount] = useState(0);

const memorizeSetCountOneFunc = useCallback(()=> setCount(count+1),[count]);

    return(
        <div>
            <h1>
                Use Callback
            </h1>
            <Counter countValue={count} onClick={memorizeSetCountOneFunc}/>
        </div>
    );
}

export default useCallbackExample;