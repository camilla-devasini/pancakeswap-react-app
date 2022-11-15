import { useState } from "react";
import TradeCard from "../components/trade/TradeCard";
import CardGraph from "../components/trade/graph/CardGraph";
import TradeFooter from "../components/trade/TradeFooter";
import PageWrapper from "../components/UI/PageWrapper";
import "./style/Trade.scss";
import { tradeImages, tradeImagesClose } from "../components/trade/tradeImages";

function TradeSwap() {

    const [showGraph, setShowGraph] = useState(false);
    const [graphOpen, setGraphOpen] = useState(true);

    const handlToggleGraph = () => {
        setShowGraph((prevState) => !prevState);
        setGraphOpen((prevState) => !prevState);

    }
   

    return (
        <PageWrapper>
            <div className="card-plus-graph-wrapper">
                {showGraph && <CardGraph onHandleCloseGraph={handlToggleGraph} className={!graphOpen ? "hide-graph" : "show-graph"}/> }
                <TradeCard iconsSwap={tradeImages} onToggleGraph={handlToggleGraph}/>
               
            </div>
            <TradeFooter />
        </PageWrapper>
    )
}
export default TradeSwap;