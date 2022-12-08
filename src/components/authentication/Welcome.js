import { AccountContext } from "../../context/AccountContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Welcome.scss";
import PageWrapper from "../UI/PageWrapper";
import MainButton from "../UI/MainButton";
import bunny from "./../../assets/images/main-bunny.webp";

function Welcome() {
  const value = useContext(AccountContext);
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("user");
    navigate("/auth/login");
  };
  const welcome = "Welcome ";
  const loginConfirm = "You are logged in";
  return (
    <PageWrapper>
      <div className="welcome-wrapper">
        <img
          className="main-bunny-img"
          src={bunny}
          alt="pancakeswap bunny"
        ></img>
        <h2>
          {welcome}
          {localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : null}
        </h2>
        <h3> {loginConfirm}</h3>
        <div className="nav-btn">
          <MainButton
            label="Go to Home"
            onClick={() => navigate("/")}
          ></MainButton>
          <MainButton label="Log out" onClick={logOutHandler}></MainButton>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Welcome;
