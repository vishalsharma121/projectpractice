import React, {useState} from "react";
function Ustate(){
   const [data, setData]=useState('Rahul');
    return(
        <div>
        <h1>Hello {data}</h1>
        <button onClick={()=>setData('Vishal')}>Click Me</button>
        </div>
    )
 }
 export default Ustate;