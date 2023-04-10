import {useState} from 'react'
function Hideshow(){
    const [status, setStatus]=useState(true)

    return(
        <div>
            {
                status?
                <h1>This is Toggle Hide Show button</h1>
                :null
            }
        <button onClick={()=>setStatus(!status)}>Toggle Button</button>
        </div>
    )
}
export default Hideshow;

/* Hide Show on Button Click */
// import {useState} from 'react'
// function Hideshow(){
//     const [status, setStatus]=useState(true)
//     return(
//         <div>
//             {   
//                 status?
//                 <h1>This is Hide Show Lesion</h1>
//                 :null
//             }
            
//             <button onClick={()=>setStatus(false)}>Hide Button</button>
//             <button onClick={()=>setStatus(true)}>Show Button</button>
//         </div>
//     )
// }
// export default Hideshow;