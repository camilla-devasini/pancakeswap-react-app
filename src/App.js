import './routes/Home/homepage.scss';
import './routes/Trading-Competition/trading-competition.scss';
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout/Layout";
import PageNotFound from "./routes/PageNotFound";
import Home from "./routes/Home/Home";
import TradeSwap from "./routes/TradeSwap";
import Limit from "./routes/Limit";
import Liquidity from "./routes/Liquidity";
import Farms from "./routes/Farms";
import Pools from "./routes/Pools";
import TradingCompetitionLatest from "./routes/Trading-Competition/TradingCompetitionLatest";
import Prediction from "./routes/Prediction";
import Lottery from "./routes/Lottery";
import Overview from "./routes/Overview";
import Collections from "./routes/Collections";
import Activity from "./routes/Activity";
import Blog from "./routes/Blog";
import ConnectYourWallet from './components/wallet/ConnectYourWallet';
import useLocalStorage from "use-local-storage";
import { useEffect } from 'react';



function App() {
  const pathname = window.location.pathname;
  console.log(pathname);

  //tema chiaro o scuro a seconda del dato salvato in localstorage sulla base
  // delle preferenze che sta già usando l'utente nel browser --> "theme", "light" oppure "theme", "dark"
  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [theme, setTheme] = useLocalStorage(
  //   "theme", defaultDark ? "dark" : "light"
  // )

  //tema chiaro o scuro tramite click sul button:
  // const switchTheme = () => {
  //   const newTheme = 
  //     theme === "light" ? "dark" : "light";
  //     setTheme(newTheme);
  // }

  // useEffect( () => {
    
  //   return () => {
  //     setTheme()
  //   }
  // },[theme], switchTheme)


 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/Swap" element={<TradeSwap/>} />
            <Route path="/Limit" element={<Limit/>} />
            <Route path="/Liquidity" element={<Liquidity/>} /> 
            <Route path="/Farms" element={<Farms/>} /> 
            <Route path="/Pools" element={<Pools/>} /> 
            <Route path="/Trading-competion" element={<TradingCompetitionLatest/>} /> 
            <Route path="/Prediction" element={<Prediction/>} /> 
            <Route path="/Lottery" element={<Lottery/>} /> 
            <Route path="/Overview" element={<Overview/>} /> 
            <Route path="/Collections" element={<Collections/>} /> 
            <Route path="/Activity" element={<Activity/>} /> 
            <Route path="/Blog" element={<Blog/>} /> 
            {/* <Route path="/connect-wallet" element={<ConnectYourWallet/>}></Route> */}

            <Route path="*" element ={<PageNotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
