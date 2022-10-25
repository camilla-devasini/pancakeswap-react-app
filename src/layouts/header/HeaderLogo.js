import pancakeswapLogoTitle from "../../assets/images/pancakeswap-logo-title.svg";
import pancakeswapLogo from "../../assets/images/pancakeswap-logo.svg";
import "./style/HeaderLogo.scss";

const HeaderLogo = () => {

    return (
        <div className="dropdown-logo">
            <a href="/">
                <picture>
                    <source media="(min-width:968px)" srcSet={pancakeswapLogoTitle} alt="pancackeswap logo and title"></source>
                    <img src={pancakeswapLogo} className="pancake-logo" alt="pancackeswap logo image"></img>
                </picture>
            </a>
        </div>
    )
}

export default HeaderLogo;