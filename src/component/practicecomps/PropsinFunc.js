
// Get Input Box Value

import React, {useState} from 'react';

function PropFunc(){
  const [inpvalue, setInpvalue]=useState (null)
  const [print, setPrint]=useState (false)


  function GetDeta(val){
    console.warn(val.target.value)
    setInpvalue(val.target.value)
    setPrint(false)
  }
  return(
    <div>
      {
        print?
        <h1>{inpvalue}</h1>
        :null
      }
      {/* <h1>{inpvalue}</h1> */}
      <input type="text" onChange={GetDeta} />
      <button onClick={()=>{setPrint(true)}}>Print Value</button>
    </div>
  )
}
export default PropFunc;
// function PropFunc(p){
//   return(
//         <div>
//         <h1>Name: {p.name}</h1> 
//          <h2>Email: {p.email}</h2>
//          <h4>Address {p.other.address}{p.other.mobile}</h4>
//         </div>
//     );
// }
// export default PropFunc;