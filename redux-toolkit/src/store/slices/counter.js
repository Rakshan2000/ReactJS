import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    countValue : 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        handleIncreaseCountAction: (state, actions) => {
            state.countValue+=1
            console.log(state.countValue);
            
        }
    }
});

export const {handleIncreaseCountAction} = counterSlice.actions;

export default counterSlice.reducer;