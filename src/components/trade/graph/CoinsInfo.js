// import { HistoricalChart } from "../../../api/api";
// import { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";

// function CoinsInfo() {
//     const [historicData, setHistoricData] = useState();
//     const [days, setDays] = useState(1);
//     const [searchInput, setSearchInput] = useState("");

//     const fetchHistoricData = async() => {
//         const response = await fetch(HistoricalChart(searchInput));
//         const json = await response.json();
//         setHistoricData(json.prices);
//         console.log(json.prices);
//     }
//     useEffect( () => {
//         fetchHistoricData(searchInput);
//     }, [searchInput]);

//     return (
//         <div>
//             {!historicData? <p>Error</p>
//             : (
//                 <Line
//                 data={
//                     {
//                   labels: historicData.map((coin) => {
//                     let date = new Date(coin[0]);
//                     let time =
//                       date.getHours() > 12
//                         ? `${date.getHours() - 12}:${date.getMinutes()} PM`
//                         : `${date.getHours()}:${date.getMinutes()} AM`;
//                     return days === 1 ? time : date.toLocaleDateString();
//                   }),
  
//                   datasets: [
//                     {
//                       data: historicData.map((coin) => coin[1]),
//                       label: `Price ( Past ${days} Days )`,
//                       borderColor: "#EEBC1D",
//                     },
//                   ],
//                 }}
//                 options={{
//                   elements: {
//                     point: {
//                       radius: 1,
//                     },
//                   },
//                 }}
//               />
                
//             )}

//         </div>
//     )


// }
// export default CoinsInfo;