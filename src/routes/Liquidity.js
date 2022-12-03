import TokenSelector from "../components/tokenSelect/TokenSelector";
import LiquidityCard from "../components/trade/liquidity/LiquidityCard";
import TradeFooter from "../components/trade/TradeFooter";
import PageWrapper from "../components/UI/PageWrapper";
function Liquidity() {
  return (
    <PageWrapper>
      <LiquidityCard />
      <TokenSelector></TokenSelector>
      <TradeFooter />
    </PageWrapper>
  );
}
export default Liquidity;
