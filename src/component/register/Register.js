import { useState } from 'react';
import '../register/Register.css'
import LogoImage from '../Images/logo.png'
function Register(){
    return(
        <>
        <section className="block-outer register">
        <div className="container">
           <div className="block-inner">
                <div className="center-logo"><a href=""><img src={LogoImage} alt="logo" /></a></div>
                <div className="title"><h1>It’s great to meet you.</h1></div>
                <p>Before you dive in, let's get the rest of your account details in order.
                </p>

                <form action="/action_page.php">

                    <label htmlFor="fname">First name</label><br />

                    <input type="text" id="fname" name="fname" placeholder="Manoj" /><br />
                     
                    <label htmlFor="lname">Last name</label><br />
                     <input type="text" id="lname" name="lname" placeholder="Rawat" />
              <div className="d-flex sp-bt">
              <label htmlFor="pwd">New password</label><span className="right-txt">Show Password</span>
              </div>
                   <input type="password" id="pwd" name="pwd" minLength="8" defaultValue="FakePSWrd" />
<div className="checkbox-data">
            <p>
              <input type="checkbox" id="test1" />
              <label htmlFor="test1">Atleast 8 characters long</label>
            </p>
            <p>
              <input type="checkbox" id="test2" defaultChecked="checked" />
              <label htmlFor="test2">One lowercase character</label>
            </p>
            <p>
              <input type="checkbox" id="test3" defaultChecked="checked" />
              <label htmlFor="test3">One uppercase character</label>
            </p>
            <p>
              <input type="checkbox" id="test4" defaultChecked="checked" />
              <label htmlFor="test4">One number, symble, or whitespace character</label>
            </p>
          
    </div> 

                    <input type="submit" defaultValue="Continue" />
                  </form>
                  <div className="bottom-content">Go back to <span className="color">practiceOS Login</span></div>

            </div>
        </div>
    </section>
    </>
    );
}
export default Register;