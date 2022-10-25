import { useState, useEffect, Fragment } from "react";
import "./style/Header.scss";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import HeaderLogo from "./HeaderLogo";
import { languageListObj } from "../../components/helpers/languageListObj";
import LanguagePicker from "./LanguagePicker";
import Settings from "./Settings";
import MainButton from "../../components/UI/MainButton";
import TradeButton from "./TradeButton";


const Header = () => {
    //useffect to control the window event resize
    const [screenSize, setScreenSize] = useState({
        dynamicWidth: window.innerWidth
    });

    const screenSizeHandler = () => {
        setScreenSize({dynamicWidth: window.innerWidth})
    }

    useEffect(() => {
        window.addEventListener("resize", screenSizeHandler);
        
        return () => {
            window.removeEventListener("resize", screenSizeHandler);
        }

    }, [screenSize])

    return (
        <Fragment>
            <div className="header-wrapper">
                <nav className="main-menu-nav">
                    <HeaderLogo />
                    {window.innerWidth > 575 ? <Navbar /> : <NavbarMobile />}
                
                </nav>

                <div className="icons-container">
                    {window.innerWidth > 851 ? <TradeButton value="$4.443"/> : null }
                    <LanguagePicker langList={languageListObj} />
                    <Settings />
                    {window.innerWidth > 851 ? <MainButton label="Connect Wallet"/> : <MainButton label="Connect"/>  }
    
                    
                </div>
            </div>
           
        </Fragment>
    )
}

export default Header;