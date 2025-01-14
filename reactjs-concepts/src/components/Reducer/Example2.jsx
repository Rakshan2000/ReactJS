import React, { useReducer } from 'react'

const initalState = {
    initalText: '',
ChangeTextStyle : false}

function Reducer(state, action){
    switch(action.type){
        case 'ShowText' :
            return {Text : 'Rakshan C K'}
        case 'HideText' :
            return {Text: initalState.initalText}
        case 'ChangeTextStyle' :
            console.log(state,action);
            return{
                ...state, 
                ChangeTextStyle : !initalState.ChangeTextStyle,
            }
        default :
        return state;
    }
    
}

function Example2() {

    const [state,action]= useReducer(Reducer,{Text : initalState.initalText, ChangeTextStyle : initalState.ChangeTextStyle});

    function showText(){
        action({type : 'ShowText'});
    }

    function HideText(){
        action({type : 'HideText'})
    }

    function ChangeTextStyle(){
        action({type: 'ChangeTextStyle'})
    }

  return (
    <div>
        <h1 style={{color: state.ChangeTextStyle === true ? 'Red' : 'blue' }}>{state.Text}</h1>
        <button onClick={HideText}>Hide</button>
        <button onClick={showText}>Show Text</button>
        <button onClick={ChangeTextStyle}>Toogle Text</button>
    </div>
  )
}

export default Example2
