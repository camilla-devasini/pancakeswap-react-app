import PageWrapper from "../../UI/PageWrapper";
import TradeCardWrapper from "./../TradeCardWrapper";
import TradeCardHeader from "./../TradeCardHeader";
import LiquidityBody from "./LiquidityBody";
import { liquidityImages } from "./../tradeImages";
import MainButton from "../../UI/MainButton";
import plusSymbol from "../../../assets/images/plus-symbol.svg";
import TokenSelector from "../../tokenSelect/TokenSelector";
import { useState, useEffect } from "react";

function LiquidityCard(props) {
  const [tokenSelectorShown, setTokenSelectorShown] = useState(false);

  const showTokenSelector = () => {
    setTokenSelectorShown(true);
  };
  const hideTokenSelector = () => {
    setTokenSelectorShown(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = tokenSelectorShown ? "hidden" : "auto";
  }, [tokenSelectorShown]);

  return (
    <>
      {tokenSelectorShown && <TokenSelector onClose={hideTokenSelector} />}
      <TradeCardWrapper className="liquidity-wrapper">
        <TradeCardHeader
          iconsTrade={liquidityImages}
          cardTitle="Your Liquidity"
          cardSubtitle="Remove liquidity to receive tokens back"
        />

        <LiquidityBody />
        <MainButton
          onClick={showTokenSelector}
          label="Add Liquidity"
          theme="secondary"
        >
          <img src={plusSymbol} alt="plus"></img>
        </MainButton>
      </TradeCardWrapper>
    </>
  );
}

export default LiquidityCard;
