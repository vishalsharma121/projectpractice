import { useState } from "react";

function Login(){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [usererr, setUserErr] = useState(false);
    const [passworderr, setPasswordErr] = useState(false)
    
    function LoginHandler(e){
        // if(user.length<6 || password.length<8  ){
        //     alert('input not valid');
        // }
        // else{
        //   alert('Looking all good !!!')  
        // }
        e.preventDefault()
        console.log(user,password)
    }
    function UserHandler(e){
        let item = e.target.value
        if(item.length<6){
            // console.warn('invalid error');
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }     
        // setUser(item)
    }
    function PassHandler(e){
        
        let item = e.target.value
        if(item.length<8){
            setPasswordErr(true)
        }
        else{
            setPasswordErr(false)
        }
        setPassword(item)
    }
    return(
        <div className="text-center">
            <br />
            <h1>Login Form</h1>
            <br />
            <form onSubmit={LoginHandler}>
                <input type="text" placeholder="Enter your name" onChange={UserHandler} />
                {usererr?
                <div>This is not valid</div>
            :''    
            }
                <br />
                <br />
                <input type="text" placeholder="Enter your password" onChange={PassHandler} />
                {passworderr?
                <div>This Password is not valid</div>
                :''
                }
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;

// Get Value In Console 

// import { useState } from "react"; 
// function Login(){
//     const [name, setName] = useState();
//     const [password, setPassword] = useState();
//     // const [error, setError] = useState()

//     function LoginHandler(e){
//         e.preventDefault()
//         console.log(name,password)
//     }
//     return(
//         <div className="text-center">
//             <h1>This is login Page</h1>
//             <form onSubmit={LoginHandler}>
//                 <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>   
//                 <br /><br />
//                 <input type="text" placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} />
//                 <br /><br />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     )
// }
// export default Login;