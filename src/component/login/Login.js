import '../login/Login.css'
import LogoImage from '../Images/logo.png'

function Login(){
    return(
        <>
        <section className="block-outer login">
        <div className="container">
            <div className="block-inner">
                <div className="center-logo"><a href=""><img src={LogoImage} /></a></div>

                <form action="/action_page.php">
                    <label htmlFor="lgemail">E-mail Address:</label>
                    <input type="email" id="lgemail" name="email" />
                    <div className="d-flex sp-bt">
                    <label htmlFor="lgpwd">Password:</label><span className="right-txt">Show Password</span>
                    </div>
                   <input type="password" id="lgpwd" name="pwd" minLength="8" />

                  <div className="forget">Forgot your password?</div>

                  <label className="container">
                    <input type="checkbox" defaultChecked="checked" />
                    Remember me
                    <span className="checkmark"></span>
                  </label>

                    <input type="submit" value="Sign in" />
                  </form>
                  <div className="bottom-content"><span className="color">Sign up</span> for practiceOS</div>
            </div>
        </div>
    </section>
        </>
    );
}
export default Login;