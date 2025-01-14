import { useEffect, useReducer } from "react";

const intialState = 0;
const initialName = '';

function reducer(state, action){
   
    switch(action.type){
        case 'increment':
            return {count :state.count + action.value}
        case 'decrement':
            return {count : state.count- 1}
        case 'Reset':
            return {count : intialState}
        default:
            return state;
    }
    
}

function changeName(State, action){
    switch(action.type){
        case 'Name' :
            return {Name : 'Rakshan C K'}
        case 'Reset' :
            return {Name : initialName}
        default :
            return State;
    }
    
}

export default function Count() {
    const [state, action] = useReducer(reducer, {count : intialState})
    const[NameState,NameAction] = useReducer(changeName, {Name : initialName})

    function increment(){
        action({type: 'increment',value : 2})
    }

    function decrement(){
        action({type : 'decrement',value : 1})
    }
    function reset(){
        action({type: 'Reset'})
    }

    function Name(){
        NameAction({type: 'Name'})
    }
    function ResetName(){
        NameAction({type: 'Reset'})
    }

    return (
        <>
    <h1>{state.count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>
        <div>
            <button onClick={Name}>Show Name</button>
            <button onClick={ResetName}>Reset</button>
            <h1>{NameState.Name}</h1>
        </div>
    </>);
}