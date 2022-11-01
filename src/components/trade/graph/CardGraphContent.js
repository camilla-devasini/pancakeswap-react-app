import "./style/CardGraphContent.scss";
import { useState, useEffect } from "react";
import closeicon from "../../../assets/images/close-icon.svg";

function CardGraphContent(props) {
    const [datetime, setDateTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateTime(new Date()), 1000);
 }, []);


    return (
        <div>
            <header>
                <button className="close-btn hover-active-class">
                        <img src={closeicon} onClick={props.onHandleCloseGraph}  alt="close icon"></img>
                </button>
                <span className="coin-comparison-title">bnb/cake</span>
             
                
                {/* <button className="hover-active-class">
                    <img className="arrow-img company-icons" src="images/exchange-icon.svg" alt="exchange arrows"/>
                </button> */}
            </header>
            <div class="values-content">
                <div class="mkt-value-updates">
                    <h2 class="numeric-value">76.13</h2>
                    <h3 class="coin-comparison-title">bnb/cake</h3>
                    <h3 class="percentage">+0.218 (0.29%)</h3>
                </div>

                <div class="date">
                    <span>{datetime.toLocaleString()}</span> 
                </div>

                <div class="timeframes">
                    <button>24H</button>
                    <button>1W</button>
                    <button>1M</button>
                    <button>1Y</button>
                </div>

                <div class="graphic">
                    <div class="graph-data"></div>
                </div>
            </div>
        </div>
    )
}

export default CardGraphContent;