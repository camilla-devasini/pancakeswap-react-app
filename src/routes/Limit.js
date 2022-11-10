import { useState } from "react";
import LimitCard from "../components/trade/LimitCard";
import CardGraph from "../components/trade/graph/CardGraph";
import OrderCard from "../components/trade/OrderCard";
import TradeFooter from "../components/trade/TradeFooter";
import PageWrapper from "../components/UI/PageWrapper";
import GraphOrderContainer from "../components/trade/graph/GraphOrderContainer";
import "./style/Trade.scss";

function Limit() {

    const [showGraph, setShowGraph] = useState(false);
    const [graphOpen, setGraphOpen] = useState(true);

    const handlToggleGraph = () => {
        setShowGraph((prevState) => !prevState)

    }

    const HandleCloseGraph = () => {
       setGraphOpen(false);
    }
 
    
    return (
        <PageWrapper>
            <div className="card-plus-graph-wrapper">
                {showGraph && 
                    <GraphOrderContainer>
                        <OrderCard className="positioned"/>
                        <CardGraph onHandleCloseGraph={HandleCloseGraph} className={!graphOpen ? "hide-graph" : "show-graph"}/>
                        </GraphOrderContainer>
                }
                
                
                <LimitCard onToggleGraph={handlToggleGraph}/>
               
            </div>
           
            <TradeFooter />
        </PageWrapper>
    )
}
export default Limit;