import { useState } from "react";


const textContent = [
  {
  
    titleBlack: "Top",
    titlePurple: "Farms",
    subtitle1: "XCAD-CAKE",
    subtitle2: "CO-BUSD LP",
    subtitle3: "KRS-BUSD LP",
    subtitle4: "HOOP-BUSD LP",
    subtitle5: "MGP-BUSD LP",
    number1: "247.633%",
    number2: "187.321%",
    number3: "184.681%",
    number4: "160.303%",
    number5: "142.246%",
    apr:  "APR"
  },

  {
    
    titleBlack: "Top",
    titlePurple: "Syrup Pools",
    subtitle1: "Stake CAKE",
    subtitle2: "Stake CAKE - Earn XCAD",
    subtitle3: "Stake CAKE - Earn HOOP",
    subtitle4: "Stake CAKE - Earn MONI",
    subtitle5: "Stake CAKE - Earn MGP",
    number1: "Up to 60.042%",
    number2: "57.088%",
    number3: "9.396%",
    number4: "9.107%",
    number5: "9.102%",
    apr: "APR"
  },
];




export function TopTraders() {


  const [index, setIndex] = useState(0);

  const handleSetIndex = () => {
    const nextIndex = index + 1;
    if(nextIndex === textContent.length)setIndex(0)
    else setIndex(nextIndex)
  }


  return (
    <>
    
      <div className="background-content-data" >
        <div className="container-data">
          <div className="title">
          
            <h2>
            
               <span>{textContent[index].titleBlack}</span>  {textContent[index].titlePurple}
               
            </h2>
            

            <button onClick={handleSetIndex} className="button-data">
              <svg
                viewBox="0 0 24 25"
                height="24px"
                width="24px"
                color="textSubtle"
                xmlns="http://www.w3.org/2000/svg"
                className="arrows-button"
              >
                <path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"></path>
              </svg>
            </button>
          </div>

          <div className="group-section">
            <div className="group1">
              <h2>{textContent[index].subtitle1}</h2>
              <h3>{textContent[index].number1}</h3>
              <h4>{textContent[index].apr}</h4>
            </div>

            <div className="group-border">
              <h2>{textContent[index].subtitle2}</h2>
              <h3>{textContent[index].number2}</h3>
              <h4>{textContent[index].apr}</h4>
            </div>

            <div className="group-border">
              <h2>{textContent[index].subtitle3}</h2>
              <h3>{textContent[index].number3}</h3>
              <h4>{textContent[index].apr}</h4>
            </div>

            <div className="group-border fourth">
              <h2>{textContent[index].subtitle4}</h2>
              <h3>{textContent[index].number4}</h3>
              <h4>{textContent[index].apr}</h4>
            </div>

            <div className="group-border fifth">
              <h2>{textContent[index].subtitle5}</h2>
              <h3>{textContent[index].number5}</h3>
              <h4>{textContent[index].apr}</h4>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
