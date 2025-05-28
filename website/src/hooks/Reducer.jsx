import React, { useReducer } from 'react'


const reducerFunction=(state,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return {count:state.count+1}
        case "DECREMENT":
            return {count:state.count-1}
        case "RESET":
            return {count:0}
        default:
            return {count}
    }
}
const Reducer = () => {
    const initialValue ={count:0}
    const [state,dispatch]=useReducer(reducerFunction,initialValue)
  return (
    <div>
        <h1>Count:{state.count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
    </div>
  )
}


export default Reducer