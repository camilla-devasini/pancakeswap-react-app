import downArrow from "../../assets/images/down-arrow.svg";
import "./style/TradeCardInput.scss";
import { useState } from "react";

function TradeCardInput(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = (value, index) => {
    setSelectedOption(value);
    setIsOpen(false);
    props.onCurrencyChange(props.currencies[index]);
  };

  return (
    <div className="trade-info">
      <div className="currency-select-ext" onClick={() => setIsOpen(!isOpen)}>
        <div className="currency-label">
          {selectedOption || "611"}
          <img src={downArrow}></img>
        </div>

        {isOpen && (
          <div className="currency-select-container">
            <ul className="curr-list">
              {props.currencies.map((currency, index) => (
                <li
                  value={currency}
                  onClick={() => onOptionClicked(currency, index)}
                  className="curr-list-item"
                  key={index}
                >
                  {currency}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="currency-insert">
        <input
          type="text"
          pattern="^[0-9]*[.,]?[0-9]*$"
          inputMode="decimal"
          minlenght="1"
          maxlenght="79"
          value={props.amount}
          onChange={(event) => props.onAmountChange(event.target.value)}
        />
      </div>
    </div>
  );
}
export default TradeCardInput;
