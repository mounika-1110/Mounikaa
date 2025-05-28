import React, { useEffect, useState } from 'react'

const State = () => {
    const[count,setCount]=useState(0);
    const handleIncrement = () =>{
        setCount(count+1);
    }
    const handleDecrement = () =>{
        setCount(count-1);
    }
    useEffect(()=>{
      console.log("count changed");
    },[count])
    
  return (
    <div>
      <h1>usestate example</h1>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default State;
