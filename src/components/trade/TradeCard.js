import { useState, useEffect } from "react";
import Wallet from "../wallet/Wallet";
import TradeCardWrapper from "./TradeCardWrapper";
import TradeCardHeader from "./TradeCardHeader";
import "./style/TradeCard.scss";
import { tradeImages } from "./tradeImages";
import TradeCardInput from "./TradeCardInput";
import bnbIcon from "../../assets/images/bnb-icon.svg";
import blueLogo from "../../assets/images/light-blue-logo.svg";
import MainButton from "../UI/MainButton";

// .filter(data => moment(data.close).month() === moment().month())
// data series data di chiusura del giorno.

function TradeCard(props) {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState(); // => questa da dove la passi?
  const [currency2, setCurrency2] = useState();
  const [rates, setRates] = useState([]);
  const [error, setError] = useState(null);

  // COMMENTATO PER LIMITARE LE CHIAMATE API (MAX 100/MONTH)
  useEffect(() => {
    fetch(
      `http://api.coinlayer.com/api/live?access_key=9327ae11e2eba3086a7ae3a0887483d9`
    )
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error("error occurred"));
        }
        return response.json();

        //     })
        //     .then(json => {
      })
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
        console.log(Object.keys(rates));
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(4);
  }

  const handleAmount1Change = (amount1) => {
    setAmount1(amount1);
    setAmount2(format((amount1 * rates[currency1]) / rates[currency2]));
  };

  const handleCurrency1Change = (currency1) => {
    setCurrency1(currency1);
    console.log("CURRENCY", currency1);
    setAmount2(format((amount1 * rates[currency1]) / rates[currency2]));
    console.log(rates[currency1]);
  };
  const handleAmount2Change = (amount2) => {
    setAmount2(amount2);
    setAmount1(format((amount2 * rates[currency2]) / rates[currency1]));
  };

  const handleCurrency2Change = (currency2) => {
    setCurrency2(currency2);
    setAmount1(format((amount2 * rates[currency2]) / rates[currency1]));
  };
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

  return (
    <>
      {walletShown && <Wallet onClose={hideWalletHandler} />}
      <TradeCardWrapper>
        <TradeCardHeader
          iconsTrade={tradeImages}
          onToggleGraph={props.onToggleGraph}
          cardTitle="Swap"
          cardSubtitle="Trade tokens in an instant"
        />
        <div className="trade-content">
          <TradeCardInput
            curr="bnb"
            currImage={bnbIcon}
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1}
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
          />

          <TradeCardInput
            curr="cake"
            currImage={blueLogo}
            currencies={Object.keys(rates)}
            amount={amount2}
            currency={currency2}
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
          />

          <MainButton
            onShowWallet={showWalletHandler}
            label="Connect Wallet"
            theme="secondary secondary-trade"
          />
        </div>
      </TradeCardWrapper>
    </>
  );
}
export default TradeCard;
