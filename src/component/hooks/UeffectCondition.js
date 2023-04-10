import React, { useState, useEffect } from "react";
function UeffectCon() {
 const [count, setCount] = useState(10)  
 const [data, setDatat] = useState(100)
  useEffect(() => {
    console.warn("called data state" + data);
  },[data]);
  useEffect(()=>{
    alert('called count state' + count)
  },[count])
  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Data: {data}</h1>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setDatat(data+1)}>Update Data</button>
    </div>
  );
}
export default UeffectCon;
