import ligthBlueLogo from "../../assets/images/light-blue-logo.svg";
import { Fragment } from "react";
import "./style/TradeButton.scss";

const TradeButton = (props) => {

    return (
        //da rendere link
        <Fragment>
            <div className="trade-value-wrapper">
                <div>
                    <img className="trade-logo-img" src={ligthBlueLogo}></img>
                    <span>{props.value}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default TradeButton;