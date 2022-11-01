import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout/Layout";
import PageNotFound from "./routes/PageNotFound";
import Home from "./routes/Home";
import TradeSwap from "./routes/TradeSwap";
import Limit from "./routes/Limit";
import Liquidity from "./routes/Liquidity";
import Farms from "./routes/Farms";
import Pools from "./routes/Pools";
import TradingCompetitionLatest from "./routes/TradingCompetitionFinished";
import Prediction from "./routes/Prediction";
import Lottery from "./routes/Lottery";
import Overview from "./routes/Overview";
import Collections from "./routes/Collections";
import Activity from "./routes/Activity";
import Blog from "./routes/Blog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/swap" element={<TradeSwap/>} />
            <Route path="/limit" element={<Limit/>} />
            <Route path="/liquidity" element={<Liquidity/>} /> 
            <Route path="/farms" element={<Farms/>} /> 
            <Route path="/pools" element={<Pools/>} /> 
            <Route path="/trading-competion" element={<TradingCompetitionLatest/>} /> 
            <Route path="/prediction" element={<Prediction/>} /> 
            <Route path="/lottery" element={<Lottery/>} /> 
            <Route path="/overview" element={<Overview/>} /> 
            <Route path="/collections" element={<Collections/>} /> 
            <Route path="/activity" element={<Activity/>} /> 
            <Route path="/blog" element={<Blog/>} /> 

            <Route path="*" element ={<PageNotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
