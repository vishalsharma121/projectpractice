import '../login/Login.css'
import LogoImage from '../Images/logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login(){
    const [userid, setUserId] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const [usererr, setUserErr] = useState (false);
    const [passworderr, setPasswordErr] = useState (false);
    const [usereq, setUserReq] = useState (false);
    const [passwordreq, setPasswordReq] = useState (false);
    const [isChecked, setIsChecked] = useState (false);
    const [errormsg, setErrormsg] = useState (false)
    // Checkbox
    const HandleCheckbox = (e)=>{
        setIsChecked(!isChecked);
        setErrormsg('')
    }
    // Form Submit
    function LoginHandler(e){
        e.preventDefault()
        // User on submit
        let userReq = false;
        if(userid.length===0){
            setUserReq(true)
            userReq = true;
        }
        else{
            setUserReq(false)
        }
        // Password on submit
        let passwordReq = false;
        if(userpassword.length===0){
            setPasswordReq(true)
            passwordReq = true;
        }
        else{
            setPasswordReq(false)
        }
        // Checkbox on submit
        let isCheckedReq = false;
        if (!isChecked) {
            setErrormsg('Checkbox is required');
            isCheckedReq = true;
          } else {
            setErrormsg('');
          }
        // if value not fill not showing in console
          if(usererr || passworderr || !isChecked){
            return; // stop the function here if the username or password is invalid
        }
        console.log(userid,userpassword,isChecked)
        
        // if all form value not filled button disabled
        if (!userReq && !passwordReq && !isCheckedReq) {
            // Submit the form if all required fields are filled
            console.log("Submitting the form...");
        }
    }
    // User
    
    function UserHandler(e){
        let item = e.target.value;
        setUserId(item); 
        if(item.length<6){
            setUserErr(true);
        }
        else{
            setUserErr(false);
        }
        if(item.length===0){
            setUserReq(true);
        }
        else{
            setUserReq(false);
        }
        if(!item){
            setUserErr(false);
            setUserReq(false);
        }
    }
    // Password
    function PasswordHandler(e){
        let item = e.target.value;
        setUserPassword(item);
        if(item.length<6){
            setPasswordErr(true);
        }
        else{
            setPasswordErr(false);
        }
        if(item.length===0){
            setPasswordReq(true)
        }
        else{
            setPasswordReq(false)
        }
        if(!item){
            setPasswordErr(false);
            setPasswordReq(false);
        }
    }
    
    return(
        <>
        <section className="block-outer login">
        <div className="container">
            <div className="block-inner">
                <div className="center-logo"><Link to='/'><img src={LogoImage} alt="logo" /></Link></div>
                <form onSubmit={LoginHandler}>
                    <label htmlFor="lgemail">E-mail Address:</label>
                    <input type="text" id="lgemail" name="email" value={userid} onChange={UserHandler} />
                    {usereq?
                    <div className='error'>User name is requerd</div>  
                    :'' 
                    }
                    {usererr?
                    <div className='error'>Username must have at least 6 characters</div>  
                    :'' 
                    }
                    <div className="d-flex sp-bt">
                    <label htmlFor="lgpwd">Password:</label><span className="right-txt">Show Password</span>
                    </div>
                   <input type="password" id="lgpwd" name="pwd" value={userpassword} onChange={PasswordHandler} />
                   {passwordreq?
                    <div className='error'>Password is requerd</div>  
                    :''
                   }
                   {passworderr?
                    <div className='error'>Password must have at least 6 characters</div>  
                    :'' 
                    }
                  <div className="forget">Forgot your password?</div>
                  <label className="container">
                    <input type="checkbox" checked={isChecked} onChange={HandleCheckbox} />
                    Remember me
                    <span className="checkmark"></span>
                  </label>
                  {errormsg?
                    <div className="error">{errormsg}</div>
                    : ''
                }
                    <input type="submit" value="Sign in" />
                  </form>
                  <div className="bottom-content"><Link to='/register'><span className="color">Sign up</span></Link> for practiceOS</div>
            </div>
        </div>
    </section>
        </>
    );
}
export default Login;