import { useState, useEffect, Fragment } from "react";
import "./style/Header.scss";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import HeaderLogo from "./HeaderLogo";
import userLogout from "./../../assets/images/user-logout.svg";
import { languageListObj } from "../../components/helpers/languageListObj";
import LanguagePicker from "./LanguagePicker";
import Settings from "./Settings";
import MainButton from "../../components/UI/MainButton";
import TradeButton from "./TradeButton";
import Wallet from "../../components/wallet/Wallet";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  // const value = useContext(AccountContext);
=======

const Header = (props) => {
>>>>>>> develop
  //useffect to control the window event resize
  const [screenSize, setScreenSize] = useState({
    dynamicWidth: window.innerWidth,
  });

  const screenSizeHandler = () => {
    setScreenSize({ dynamicWidth: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", screenSizeHandler);

    return () => {
      window.removeEventListener("resize", screenSizeHandler);
    };
  }, [screenSize]);

  const [walletShown, setWalletShown] = useState(false);

  const showWalletHandler = () => {
    setWalletShown(true);
  };

  const hideWalletHandler = () => {
    setWalletShown(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = walletShown ? "hidden" : "auto";
  }, [walletShown]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("auth/login");
  };

  return (
    <Fragment>
      {walletShown && <Wallet onClose={hideWalletHandler} />}
      <div className="header-wrapper">
        <nav className="main-menu-nav">
          <HeaderLogo logo={props.logo} />
          {window.innerWidth > 575 ? <Navbar /> : <NavbarMobile />}
        </nav>

        <div className="icons-container">
          {localStorage.getItem("user") ? (
            <div className="user-wrapper">
              <button onClick={handleLogout}>
                <img
                  className="user-icon"
                  src={userLogout}
                  alt="user icon"
                ></img>
              </button>
              <p className="user-name">
                {JSON.parse(localStorage.getItem("user"))}
              </p>
            </div>
          ) : null}
          {window.innerWidth > 851 ? <TradeButton value="$4.443" /> : null}
          <LanguagePicker langList={languageListObj} />
          <Settings />
          {window.innerWidth > 851 ? (
            <MainButton
              onShowWallet={showWalletHandler}
              label="Connect Wallet"
            />
          ) : (
            <MainButton onShowWallet={showWalletHandler} label="Connect" />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
