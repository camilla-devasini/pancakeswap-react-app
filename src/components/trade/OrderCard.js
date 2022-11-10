import questionBunny from "../../assets/images/question-bunny.svg";
import leftArrow from "../../assets/images/left-arrow-grey.svg";
import rightArrow from "../../assets/images/right-arrow-grey.svg";
import "./style/OrderCard.scss";

function OrderCard() {

    return (
        <section className="trade-orders-card positioned">
            <header>
                <button className="open-orders hover-active-class">Open Orders</button>
                <button className="order-history hover-active-class">Order History</button>
            </header>
            <div className="orders-content">
                <img src={questionBunny} alt="open orders and history section"/>
                <span>No Open Orders</span>
            </div>
            <div className="orders-scroll">
                <img src={leftArrow}/>
                <span>Page 1 of 1</span>
                <img src={rightArrow}/>
            </div>
        </section>
    )
}

export default OrderCard;