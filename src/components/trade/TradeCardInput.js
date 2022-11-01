
import downArrow from "../../assets/images/down-arrow.svg";
import "./style/TradeCardInput.scss";

function TradeCardInput(props) {

    return (
        <div className="trade-info">
            <div className="currency-select-container">
                {/* <button className="currency-select hover-active-class">
                    <img className="company-icons"src={props.currImage} alt="bnb icon"/>
                    <span>{props.curr}</span>
                    <img src={downArrow} alt="select arrow"/>
                </button>  MOMENTANEAMENTE SOSTITUTITO DA TAG SELECT */} 
                <select className="curr-selector"
                    value={props.currency}
                    onChange={event => props.onCurrencyChange(event.target.value)} >
                    {props.currencies.map((currency, index) => (
                        <option key={index} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>


            <div className="currency-insert">
                <input type="text" pattern="^[0-9]*[.,]?[0-9]*$" inputmode="decimal"
                minlenght="1" maxlenght="79" value={props.amount} onChange={event => props.onAmountChange(event.target.value)}/>
            </div>
        </div>
    )
}
export default TradeCardInput;
