import pancakeSwapLogo from "../assets/images/pancakeswap-logo.svg";
import { Link } from "react-router-dom";

function PageNotFound() {

    return (
        <div>
            <img src={pancakeSwapLogo}></img>
            <h2>404</h2>
            <p>Oops, page not found</p>
            <Link to="/">Back home</Link>

        </div>
    )
}
export default PageNotFound;