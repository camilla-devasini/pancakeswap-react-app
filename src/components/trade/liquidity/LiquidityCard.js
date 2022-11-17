import PageWrapper from "../../UI/PageWrapper";
import TradeCardWrapper from "./../TradeCardWrapper";
import TradeCardHeader from "./../TradeCardHeader";
import LiquidityBody from "./LiquidityBody";
import { liquidityImages } from "./../tradeImages";
import MainButton from "../../UI/MainButton";
import plusSymbol from "../../../assets/images/plus-symbol.svg";

function LiquidityCard() {

    return (
        
            <TradeCardWrapper className="liquidity-wrapper">
                    <TradeCardHeader 
                        iconsTrade={liquidityImages}
                        cardTitle="Your Liquidity"
                        cardSubtitle="Remove liquidity to receive tokens back"
                    />
                   
                    <LiquidityBody />
                    <MainButton label="Add Liquidity" theme="secondary">
                        <img src={plusSymbol}></img>
                    </MainButton>
            </TradeCardWrapper>
    )
}

export default LiquidityCard;