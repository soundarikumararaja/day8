import React from "react";
import { useState } from "react";
function Calculate() {
    const [count, setCount] = useState(0);
    const[color, setColor] = useState("red");
    const incrCount=()=>{
         setCount(count + 1)
    }
    const decrCount=()=>{
         setCount(count - 1)
    }
     return (
        <div>
        <p>You clicked {count} times</p>
        <p> My favorite color is {color}</p> 
        <button onClick={incrCount}>
            Click me
       </button>
       <button onClick={decrCount}>
Reduce me
       </button>
        </div>
   );
}
export default Calculate;