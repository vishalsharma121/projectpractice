import { useState } from "react";
function Usestate(){
  const [data, setData] = useState(0)
  function UpdateData()
{
    setData(data+1)
  }
  return(
    <div>
    <h1>{data}This is Page Heading</h1>
    <button onClick={UpdateData}>Click Me</button>
    </div>
  );
}
export default Usestate;