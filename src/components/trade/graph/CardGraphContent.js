import "./style/CardGraphContent.scss";
import { buttonsData } from "./buttonsData";
import MainButton from "../../UI/MainButton";
import { useState, useEffect } from "react";
import closeicon from "../../../assets/images/close-icon.svg";
import { SingleCoin } from "../../../api/api";
import { HistoricalChart } from "../../../api/api";
import { Line } from "react-chartjs-2";
import { CircularProgress } from "@mui/material";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);






function CardGraphContent(props) {
    const [datetime, setDateTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateTime(new Date()), 1000);
    }, []);

    const [searchInput, setSearchInput] = useState("");

    const [coin, setCoin] = useState(null);

    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    
    const fetchCoin = async() => {
        try {
            setLoading(true);
            const response = await fetch(SingleCoin(searchInput));
            if (response.status !== 200) {
                alert("Crypto currency not found, please type a new currency");
                setSearchInput("");
            } else {
                const json = await response.json();
                setCoin(json);
                console.log(json);
        } } catch(error) {
            setError(new Error("An error occurred"))
        } finally {
            setLoading(false);
        }

        fetchHistoricData();
      
    }

    const fetchHistoricData = async() => {
        try {
            setLoading(true);
            const response = await fetch(HistoricalChart(searchInput, days));
            const json = await response.json();
            setHistoricData(json.prices);
            console.log(json.prices);
        } catch(error) {
            setError(new Error("An error occurred"))
        }finally {
            setLoading(false);
        }
        
    }


    useEffect ( () => {
        fetchHistoricData(searchInput)
        }, [days])

    // dati per grafico
    const data = {
    
        labels: historicData && historicData.map((coin) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
          }),
        datasets: [
            {
                data: historicData && historicData.map((item) => item[1]),
                label: `USD Price in the last ${days} days`,
                borderColor: "rgb(31, 199, 212)",
                fill: true,
                backgroundColor: "rgb(31, 199, 212, 0.1)" 
            }
        ]

    }
    const options = {
        type: "line",
        elements: {
              point: {
                radius: 0,
              },
        },
      
        scales: {
            x: {
                grid: {
                display: false      
                }
            },
            y: {
                grid: {
                display: false      
                }
            }
        },
        animations: {
            tension: {
              duration: 3000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
        }
          
    }
   
    

    return (
        <div className="content-external">
            <header>
                <button className="close-btn hover-active-class">
                        <img src={closeicon} onClick={props.onHandleCloseGraph}  alt="close icon"></img>
                </button>
            </header>
            <div className="values-content">
                <div className="mkt-value-updates">
                    <input className="search-input-currency" type="text"
                           placeholder="Type a CryptoCurrency"
                           value={searchInput}
                           onChange={e => setSearchInput(e.target.value)}>
                    </input>
                    <MainButton style={{width: 80, marginLeft: 10}} label="Search" onClick={fetchCoin}></MainButton>
                    
                    {error && <p>{error.message}</p>} 
                    {coin && 
                        <div className="coin-details"> 
                            <img src={coin.image.thumb}></img>
                        </div>
                    }
                </div>

                <div className="graph">
                        {loading && <CircularProgress color="secondary" variant="indeterminate" size="30px"  />}
                        {error && <p>{error.message}</p>}
                        {historicData && 
                        <>
                            <div className="timeframes">
                            {buttonsData.map((item) => (
                                <button 
                                    key={item.value}
                                    onClick={() => {setDays(item.value)}}>
                                    
                                    {item.label}
                                
                                </button>)
                            )}
                            </div>
                            <div className="date">
                                <span>{datetime.toLocaleString()}</span> 
                            </div>
                            
                            <Line  className="graph-canva" data={data} options={options} /> 
                         
                            
                        </>
                    }

                    
                </div>
            </div>
        </div>
    )
}

export default CardGraphContent;