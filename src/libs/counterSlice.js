import { createSlice } from "@reduxjs/toolkit";

let initialState ={
    counter:0,
    fname:'ali',
    list :[]
}

export let counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increase:(state,action)=>{
         state.counter+=1   
        },
        decrease:(state)=>{
          state.counter-=1;
        },
        changeName:(state)=>{
            state.fname = 'omar'
        },
        increaseByAmount:(state,action)=>{
           console.log('action:',action)
           state.counter+=action.payload   //action.payload => 5
        },
        addMe:(state,action)=>{
            state.list.push(action.payload)
        }
    }
})


export let counterReducer = counterSlice.reducer;
export let {increase,decrease,changeName,increaseByAmount,addMe} =counterSlice.actions;