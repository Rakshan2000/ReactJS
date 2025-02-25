import { useSelector } from "react-redux";



function CounterValue() {

    const state = useSelector((state) => state);
    const {counter} = state;
    console.log(state)
    
    return <p>Counter value is {counter.countValue}</p>
}

export default CounterValue;