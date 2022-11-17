import pancakeSwapLogo from "../../assets/images/pancakeswap-logo.svg";
import { Link } from "react-router-dom";
import "./style/NotFound.scss";
import MainButton from "./MainButton";

function NotFound() {

    return (
        <div className="error-wrapper">
            <img src={pancakeSwapLogo}></img>
            <h2>404</h2>
            <p>Oops, page not found</p>
            <Link to="/">
                <MainButton label="Back Home" />
            </Link>
        </div>

    )
   
}

export default NotFound;