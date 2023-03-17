import { Link } from "react-router-dom";
import '../404/Page404.css';

function Page404(){
    return(
        <div>
        <div id="notfound">
            <div className="notfound">
            <div className="notfound-404">
            <h3>Oops! Page not found</h3>
            <h1><span>4</span><span>0</span><span>4</span></h1>
            </div>
            <h2>we are sorry, but the page you requested was not found</h2>
            <Link className="linkstyle" to='/'>Go back to Home Page</Link>
            </div>
        </div>
        </div>
    );
}
export default Page404;