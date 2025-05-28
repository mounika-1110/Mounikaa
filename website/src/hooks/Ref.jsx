

import React, { useEffect, useRef, useState } from 'react'


const Ref = () => {
    const count = useRef(0);
    const [value, setValue] = useState(0)
    useEffect(()=>{
        count.current= count.current+1;
        console.log(count.current);  
    })


  return (
    <div>
        <h1>count : {count.current}</h1>
        <h1>value : {value}</h1>
        <button onClick={()=>setValue(value+1)}>+</button>
    </div>
  )
}


export default Ref
