import React, {useState, useEffect} from "react";
function Ueffect(){
  const  [count, setCount] = useState(0);
    useEffect(()=>{
        console.warn("useEffect")
    })
    return(
        <div>
            <h1>Ueffect Hooks {count}</h1>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}
export default Ueffect;