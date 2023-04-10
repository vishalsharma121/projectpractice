import { useState } from "react";
function Ifcondition(){
    // const [logedin, setLogedin]=useState(true)
    // return(
    //     <div class="text-center">
    //           <h1>if else Condition Use</h1>
    //         {
    //         logedin?
    //             <h1>User Loged In</h1>
    //         :
    //         <h1>User Not Loged In</h1>
    //         }
    //     </div>
    // )

    // if 1,2,3

    const [logedin, setLogedin]=useState(3)
    return(
        <div>
            <h1>If else 1,2,3</h1>
            {logedin==1?
            <h1>User 1 Logedin</h1>
            :logedin==2?
            <h1>User 2 Logedin</h1>  
            :
            <h1>User 3 Logedin</h1>   
        }
        </div>
    )
}
export default Ifcondition;