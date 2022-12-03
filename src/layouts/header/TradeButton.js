import ligthBlueLogo from "../../assets/images/light-blue-logo.svg";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./style/TradeButton.scss";

const TradeButton = (props) => {

    return (
        //da rendere link
        <Fragment>
            <div className="trade-value-wrapper">
                <div>
                    <Link to="/Swap">
                    <img className="trade-logo-img" src={ligthBlueLogo}></img>
                    <span>{props.value}</span>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default TradeButton;