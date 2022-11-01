import { Fragment } from "react";
import "./style/TradeFooterContent.scss";
import goToIcon from "../../assets/images/go-to.svg";
import bubbleTail from "../../assets/images/bubble-tail.svg";
import helpBunny from "../../assets/images/help-bunny.png";

function TradeFooterContent() {
    return (
        <Fragment>
            <div className="conversion-link">
                <a href="https://docs.bnbchain.org/docs/bnbIntro">Convert ERC-20 to BEP-20</a>
                <img src={goToIcon}></img>
            </div>

            <div className="trade-help-box">
                <div className="trade-bubble-container">
                    <a href="https://docs.pancakeswap.finance/products/pancakeswap-exchange">Need help?</a>
                    <img src={bubbleTail}></img>
                </div>
                <button className="trade-help-bunny hover-active-class">
                    <img src={helpBunny} alt="pancakeswap bunny cooking pancakes"/>
                </button>
            </div>
        </Fragment>
    )
}
export default TradeFooterContent;

