
import pancakeswapLogo from "../../assets/images/pancakeswap-logo.svg";
import "./style/HeaderLogo.scss";
import { Link } from "react-router-dom";

const HeaderLogo = (props) => {
  
    return (
        <div className="dropdown-logo">
            <Link to="/">
                <picture>
                    <source media="(min-width:968px)" srcSet={props.logo} alt="pancackeswap logo and title"></source>
                    <img src={pancakeswapLogo} className="pancake-logo" alt="pancackeswap logo image"></img>
                </picture>
            </Link>
        </div>
    )
}

export default HeaderLogo;