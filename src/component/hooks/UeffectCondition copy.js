import React, { useEffect } from "react";
function UeffectConcopy(props) {
  useEffect(() => {
    console.warn("called data state" + data);
  },[props.data]);
  useEffect(()=>{
    alert('called count state' + count)
  },[props.count])
  return (
    <div>
      <h1>Count:{props.count}</h1>
      <h1>Data: {props.data}</h1>
    </div>
  );
}
export default UeffectConcopy;
