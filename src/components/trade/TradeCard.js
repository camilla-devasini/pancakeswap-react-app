import { useState, useEffect } from "react";
import TradeCardWrapper from "./TradeCardWrapper";
import TradeCardHeader from "./TradeCardHeader";
import "./style/TradeCard.scss";
import { tradeImages, tradeImagesClose } from "./tradeImages";
import TradeCardInput from "./TradeCardInput";
import bnbIcon from "../../assets/images/bnb-icon.svg";
import blueLogo from "../../assets/images/light-blue-logo.svg";
import MainButton from "../UI/MainButton";
import TradeCardConversionBtn from "./TradeCardConversionBtn";

// .filter(data => moment(data.close).month() === moment().month())
// data series data di chiusura del giorno.

// sdk.exchange_rates_get_specific_rate("BTC", "USD", t).then(function (Exchange_rates_get_specific_rate) {
//     console.log('Exchange_rates_get_specific_rate:')
//     console.log(Exchange_rates_get_specific_rate) 

//   });
// sdk.ohlcv_list_all_periods().then(function (Ohlcv_list_all_periods) {
//     console.log('Ohlcv_list_all_periods:')
//     console.log('number: ', Ohlcv_list_all_periods.length)
//     Ohlcv_list_all_periods.forEach(x=> { console.log(x) })

//   });
// Patrizio Esposito09:20
// {
// open: 13080123,
// high: 23123939,
// low: 12238383,
// close: 31289398213, questo
// volume: 113.03029392,
// timestamp: 128913123
// }
function TradeCard(props) {

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState(); // => questa da dove la passi?
    const [currency2, setCurrency2] = useState();
    const [rates, setRates] = useState([]);
    const [error, setError] = useState(null);

   

    // COMMENTATO PER LIMITARE LE CHIAMATE API (MAX 100/MONTH)
    // useEffect( () => {
    //     fetch(`http://api.coinlayer.com/api/live?access_key=9327ae11e2eba3086a7ae3a0887483d9`)
    //     .then(response => {
    //         if (response.status !== 200) {
    //             setError(new Error("error occurred"))
    //         } 
    //         return response.json();
            
    //     })
    //     .then(json => {
            
    //         setRates(json.rates);
    //         console.log(json.rates);
    //         console.log(Object.keys(rates));
    //     })
    //     .catch(error => {
    //         setError(error)
    //     })

    // }, [])

    // useEffect(() => {
    //     if (!!rates) {
    //       function init() {
    //         handleAmount1Change(1);
    //       }
    //       init();
    //     }
    //   }, [rates]);

    function format(number) {
        return number.toFixed(4);
    }

    const handleAmount1Change = (amount1) => {
        setAmount1(amount1);
        setAmount2(format((amount1 * rates[currency1]) / rates[currency2]))
    }

    const handleCurrency1Change = (currency1)  => {
        setCurrency1(currency1);
        console.log('CURRENCY', currency1);
        setAmount2(format((amount1 * rates[currency1]) / rates[currency2]))
        console.log(rates[currency1]);
    }
    const handleAmount2Change = (amount2) => {
        setAmount2(amount2);
        setAmount1(format((amount2 * rates[currency2]) / rates[currency1]))
    }

    const handleCurrency2Change = (currency2) => {
        setCurrency2(currency2);
        setAmount1(format((amount2 * rates[currency2]) / rates[currency1]))
    }

   
    return (
       
            <TradeCardWrapper>
               <TradeCardHeader 
                    iconsTrade={tradeImages}
                    onToggleGraph={props.onToggleGraph}
                    cardTitle="Swap"
                    cardSubtitle="Trade tokens in an instant"
                />
                <div className="trade-content">
                    <TradeCardInput 
                        curr="bnb" currImage={bnbIcon}
                        currencies={Object.keys(rates)}
                        amount={amount1}
                        currency={currency1}
                        onAmountChange={handleAmount1Change}
                        onCurrencyChange={handleCurrency1Change}
                        
                    />
                    
                    <TradeCardConversionBtn />
                    
                    <TradeCardInput 
                        curr="cake"
                        currImage={blueLogo}
                        currencies={Object.keys(rates)} 
                        amount={amount2}
                        currency={currency2}
                        onAmountChange={handleAmount2Change}
                        onCurrencyChange={handleCurrency2Change}
                    />
                    
                    <MainButton label="Connect Wallet" theme="secondary secondary-trade" />
                </div>

            </TradeCardWrapper> 
    )
}
export default TradeCard;