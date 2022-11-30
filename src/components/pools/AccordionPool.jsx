
import Accordion from "react-bootstrap/Accordion";

import "./style/accordionPool.scss";
import iconFarm1 from "../../assets/images/iconFarm1.png" ;
import xIcon from "../../assets/images/xIcon.png" ;
import iconpi from "../../assets/images/iconpi.png"
import iconLeon from "../../assets/images/iconLeon.png"
import iconsr from "../../assets/images/iconsr.png"
import iconNer from "../../assets/images/iconNer.png"
import iconOr from "../../assets/images/iconOr.png"
import iconGreen from "../../assets/images/iconGreen.png"







function AccordionPool() {
  return (
    <div className="total-cont-back">
    <Accordion>
      <Accordion.Item eventKey="0">
      <div className="accordion-table-pool">
        <Accordion.Header>
       
            <div className="title-accordion-pool">
              <div className="title-icon-pool">
                <div className="icon-acc2-pool">
                <img src={iconFarm1}  alt="" />
                </div>
                <img src="" alt="" />
              </div>
              <div className="cont-title-p-pool">
              <div className="title-p-pool">Stake-CAKE</div>
              <div className="title-p-pool2">Stake, Earn – And more!</div>
              </div>
            </div>
            <div className="cont-core-boosted2-pool">
            <div className="p1-pool">CAKE Staked</div>
            <div className="p2-pool">0.0</div>
            <div className="p3-pool">0 USD</div>
                </div>

            <div className="cont-earned-pool">
              <div className="earned-pool">Flexible APY</div>
              <div className="earned-pool-perc">2,79%</div>
            </div>
            <div className="cont-apr-pool-up">
              <div className="cont-apr-pool">
              <div className="apr-pool">Locked APY</div>
                <div className="number-pool">Up to
59.84%</div>
                </div>
              
            </div>
            <div className="cont-liqui-pool">
              <div className="liquidity-pool">Total staked</div>
              <div className="price-cont-pool">
              <div className="cash-svg-pool">244,762,974 CAKE</div>
              </div>
            </div>
           
         
        </Accordion.Header>
        </div>
        <Accordion.Body>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                           <div className="accordion-body2">
  <div className="left-cont">
   <div className="cont-total">
    <div>Total locked:</div>
    <div>198,171,208 CAKE</div>
   </div>
   <div className="cont-ave">
    <div>Average lock duration:</div>
    <div>40 weeks</div>
   </div>
   <div className="cont-perf">
    <div>Performance Fee</div>
    <div>0~2%</div>
   </div>
   <div className="cont-a">
    <a/>
    <a/>
    <a/>
   </div>
   <div>Auto</div>
  

  </div>
  <div className="cont-coll-pool">
    <div className="double-cont">
      <div className="cake-earned-pool-cont">
        <div>CAKE earned-pool</div>
        <div className="cont2">
          <h2 className="cont-color-pool">0.00000</h2>
          <button className="btn-harvest-pool">Harvest</button>
        </div>
      </div>
      <div className="yield-boost-pool">
        <div>YIELD BOOSTER</div>
        <div>
          <h2>Up to x2 <svg viewBox="0 0 24 24" width="20px" height="20px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 fGhPpn"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" /></svg></h2>
          <div>Connect wallet to activate yield booster</div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <div className="accordion-table-pool">
        <Accordion.Header> 
            <div className="title-accordion-pool">
              <div className="title-icon-pool">
                <div className="icon-acc2-pool">
                <img src={xIcon}  alt="" />
                </div>
                <img src="" alt="" />
              </div>
              <div className="cont-title-p-pool">
              <div className="title-p-pool">Earn XCAD</div>
              <div className="title-p-pool2">Stake CAKE</div>
              </div>
            </div>
            <div className="cont-core-boosted2-pool">
            <div className="p1-pool">XCAD earned-pool</div>
            <div className="p2-pool">0.0</div>
            <div className="p3-pool">0 USD</div>
                </div>

            <div className="cont-earned-pool">
              <div className="earned-pool">Flexible APY</div>
              <div className="earned-pool-perc">792,755 CAKE</div>
            </div>
            <div className="cont-apr-pool-up">
              <div className="cont-apr-pool">
              <div className="apr-pool">APR</div>
                <div className="number-pool">48.53%</div>
                </div>
              
            </div>
            <div className="cont-liqui-pool">
              <div className="liquidity-pool">Ends in</div>
              <div className="price-cont-pool">
              <div className="cash-svg-pool">2,556,954
blocks</div>
              </div>
            </div>
           
          </Accordion.Header>
          </div>
        <Accordion.Body>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
  <div className="left-link">
    <a href="#">Get CAKE-BNB LP
      <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">View Contract<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">See Pair Info<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
  </div>
  <div className="cont-coll-pool">
    <div className="double-cont">
      <div className="cake-earned-pool-cont">
        <div>CAKE earned-pool</div>
        <div className="cont2">
          <h2 className="cont-color-pool">0.00000</h2>
          <button className="btn-harvest-pool">Harvest</button>
        </div>
      </div>
      <div className="yield-boost-pool">
        <div>YIELD BOOSTER</div>
        <div>
          <h2>Up to x2 <svg viewBox="0 0 24 24" width="20px" height="20px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 fGhPpn"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" /></svg></h2>
          <div>Connect wallet to activate yield booster</div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</div>
        </Accordion.Body>
      </Accordion.Item>
 
     <Accordion.Item eventKey="2">
     <div className="accordion-table-pool">
     <Accordion.Header> <div className="title-accordion-pool">
            
              <div className="title-icon-pool">
              <div className="icon-acc2-pool">
                <img src={iconpi}  alt="" />
                </div>
                <img src="" alt="" />
              </div>
              <div className="cont-title-p-pool">
              <div className="title-p-pool">Earn MGP</div>
              <div className="title-p-pool2">Stake CAKE</div>
              </div>
            </div>
            <div className="cont-core-boosted2-pool">
            <div className="p1-pool">MGP earned-pool</div>
            <div className="p2-pool">0.0</div>
            <div className="p3-pool">0 USD</div>
                </div>

            <div className="cont-earned-pool">
              <div className="earned-pool">Flexible APY</div>
              <div className="earned-pool-perc">5,432,798 CAKE</div>
            </div>
            <div className="cont-apr-pool-up">
              <div className="cont-apr-pool">
              <div className="apr-pool">Apr</div>
                <div className="number-pool">48.53%</div>
                </div>
              
            </div>
            <div className="cont-liqui-pool">
              <div className="liquidity-pool">Ends in</div>
              <div className="price-cont-pool">
              <div className="cash-svg-pool">3,056,222
blocks</div>
              </div>
            </div>
           
          </Accordion.Header>
          </div>
     <Accordion.Body>
     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
  <div className="left-link">
    <a href="#">Get CAKE-BNB LP
      <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">View Contract<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">See Pair Info<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
  </div>
  <div className="cont-coll-pool">
    <div className="double-cont">
      <div className="cake-earned-pool-cont">
        <div>CAKE earned-pool</div>
        <div className="cont2">
          <h2 className="cont-color-pool">0.00000</h2>
          <button className="btn-harvest-pool">Harvest</button>
        </div>
      </div>
      <div className="yield-boost-pool">
        <div>YIELD BOOSTER</div>
        <div>
          <h2>Up to x2 <svg viewBox="0 0 24 24" width="20px" height="20px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 fGhPpn"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" /></svg></h2>
          <div>Connect wallet to activate yield booster</div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</div>
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="3">
   <div className="accordion-table-pool">
     <Accordion.Header> 
            <div className="title-accordion-pool">
              <div className="title-icon-pool">
              <div className="icon-acc2-pool">
                <img src={iconLeon}  alt="" />
                </div>
                <img src="" alt="" />
              </div>
              <div className="cont-title-p-pool">
              <div className="title-p-pool">Earn WMX</div>
              <div className="title-p-pool2">Stake CAKE</div>
              </div>
            </div>
            <div className="cont-core-boosted2-pool">
            <div className="p1-pool">WMX earned-pool</div>
            <div className="p2-pool">0.0</div>
            <div className="p3-pool">0 USD</div>
                </div>

            <div className="cont-earned-pool">
              <div className="earned-pool">Total staked</div>
              <div className="earned-pool-perc">4,389,799 CAKE</div>
            </div>
            <div className="cont-apr-pool-up">
              <div className="cont-apr-pool">
              <div className="apr-pool">APR</div>
                <div className="number-pool">8.34%</div>
                </div>
              
            </div>
            <div className="cont-liqui-pool">
              <div className="liquidity-pool">Ends in</div>
              <div className="price-cont-pool">
              <div className="cash-svg-pool">1,072,203
blocks</div>
              </div>
            </div>
           
         </Accordion.Header>
         </div>
     <Accordion.Body>
     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
  <div className="left-link">
    <a href="#">Get CAKE-BNB LP
      <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">View Contract<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">See Pair Info<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
  </div>
  <div className="cont-coll-pool">
    <div className="double-cont">
      <div className="cake-earned-pool-cont">
        <div>CAKE earned-pool</div>
        <div className="cont2">
          <h2 className="cont-color-pool">0.00000</h2>
          <button className="btn-harvest-pool">Harvest</button>
        </div>
      </div>
      <div className="yield-boost-pool">
        <div>YIELD BOOSTER</div>
        <div>
          <h2>Up to x2 <svg viewBox="0 0 24 24" width="20px" height="20px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 fGhPpn"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" /></svg></h2>
          <div>Connect wallet to activate yield booster</div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</div>
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="4">
   <div className="accordion-table-pool">
     <Accordion.Header> 
            <div className="title-accordion-pool">
              <div className="title-icon-pool">
                <div className="icon-acc2-pool">
                <img src={iconsr}  alt="" />
                </div>
                <img src="" alt="" />
              </div>
              <div className="cont-title-p-pool">
              <div className="title-p-pool">Earn KRS</div>
              <div className="title-p-pool2">Stake CAKE</div>
              </div>
            </div>
            <div className="cont-core-boosted2-pool">
            <div className="p1-pool">KRS earned-pool</div>
            <div className="p2-pool">0.0</div>
            <div className="p3-pool">0 USD</div>
                </div>

            <div className="cont-earned-pool">
              <div className="earned-pool">Total staked</div>
              <div className="earned-pool-perc">2,964,615 CAKE</div>
            </div>
            <div className="cont-apr-pool-up">
              <div className="cont-apr-pool">
              <div className="apr-pool">APR</div>
                <div className="number-pool">7.78%</div>
                </div>
              
            </div>
            <div className="cont-liqui-pool">
              <div className="liquidity-pool">Ends in</div>
              <div className="price-cont-pool">
              <div className="cash-svg-pool">901,072
blocks</div>
              </div>
            </div>
           
          </Accordion.Header>
          </div>
     <Accordion.Body>
     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
  <div className="left-link">
    <a href="#">Get CAKE-BNB LP
      <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">View Contract<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">See Pair Info<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
  </div>
  <div className="cont-coll-pool">
    <div className="double-cont">
      <div className="cake-earned-pool-cont">
        <div>CAKE earned-pool</div>
        <div className="cont2">
          <h2 className="cont-color-pool">0.00000</h2>
          <button className="btn-harvest-pool">Harvest</button>
        </div>
      </div>
      <div className="yield-boost-pool">
        <div>YIELD BOOSTER</div>
        <div>
          <h2>Up to x2 <svg viewBox="0 0 24 24" width="20px" height="20px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 fGhPpn"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" /></svg></h2>
          <div>Connect wallet to activate yield booster</div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</div>
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="5">
   <div className="accordion-table-pool">
     <Accordion.Header> 
            <div className="title-accordion-pool">
              <div className="title-icon-pool">
              <div className="icon-acc2-pool">
                <img src={iconNer}  alt="" />
                </div>
                <img src="" alt="" />
              </div>
              <div className="cont-title-p-pool">
              <div className="title-p-pool">Earn CO</div>
              <div className="title-p-pool2">Stake CAKE</div>
              </div>
            </div>
            <div className="cont-core-boosted2-pool">
            <div className="p1-pool">CO earned-pool</div>
            <div className="p2-pool">0.0</div>
            <div className="p3-pool">0 USD</div>
                </div>

            <div className="cont-earned-pool">
              <div className="earned-pool">Total staked</div>
              <div className="earned-pool-perc">3,115,591 CAKE</div>
            </div>
            <div className="cont-apr-pool-up">
              <div className="cont-apr-pool">
              <div className="apr-pool">APR</div>
                <div className="number-pool">7.77%

</div>
                </div>
              
            </div>
            <div className="cont-liqui-pool">
              <div className="liquidity-pool">Ends in</div>
              <div className="price-cont-pool">
              <div className="cash-svg-pool">514,572
blocks</div>
              </div>
            </div>
           
          </Accordion.Header>
          </div>
     <Accordion.Body>
     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
  <div className="left-link">
    <a href="#">Get CAKE-BNB LP
      <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">View Contract<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">See Pair Info<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
  </div>
  <div className="cont-coll-pool">
    <div className="double-cont">
      <div className="cake-earned-pool-cont">
        <div>CAKE earned-pool</div>
        <div className="cont2">
          <h2 className="cont-color-pool">0.00000</h2>
          <button className="btn-harvest-pool">Harvest</button>
        </div>
      </div>
      <div className="yield-boost-pool">
        <div>YIELD BOOSTER</div>
        <div>
          <h2>Up to x2 <svg viewBox="0 0 24 24" width="20px" height="20px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 fGhPpn"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" /></svg></h2>
          <div>Connect wallet to activate yield booster</div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</div>
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="6">
   <div className="accordion-table-pool">
     <Accordion.Header> 
            <div className="title-accordion-pool">
              <div className="title-icon-pool">
              <div className="icon-acc2-pool">
                <img src={iconOr}  alt="" />
                </div>
                <img src="" alt="" />
              </div>
              <div className="cont-title-p-pool">
              <div className="title-p-pool">Earn HOOP</div>
              <div className="title-p-pool2">Stake CAKE</div>
              </div>
            </div>
            <div className="cont-core-boosted2-pool">
            <div className="p1-pool">HOOP earned-pool</div>
            <div className="p2-pool">0.0</div>
            <div className="p3-pool">0 USD</div>
                </div>

            <div className="cont-earned-pool">
              <div className="earned-pool">Total staked</div>
              <div className="earned-pool-perc">1,490,475 CAKE</div>
            </div>
            <div className="cont-apr-pool-up">
              <div className="cont-apr-pool">
              <div className="apr-pool">APR</div>
                <div className="number-pool">8.56%</div>
                </div>
              
            </div>
            <div className="cont-liqui-pool">
              <div className="liquidity-pool">Ends in</div>
              <div className="price-cont-pool">
              <div className="cash-svg-pool">314,768
blocks</div>
              </div>
            </div>
           
        </Accordion.Header>
        </div>
     <Accordion.Body>
     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
  <div className="left-link">
    <a href="#">Get CAKE-BNB LP
      <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">View Contract<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">See Pair Info<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
  </div>
  <div className="cont-coll-pool">
    <div className="double-cont">
      <div className="cake-earned-pool-cont">
        <div>CAKE earned-pool</div>
        <div className="cont2">
          <h2 className="cont-color-pool">0.00000</h2>
          <button className="btn-harvest-pool">Harvest</button>
        </div>
      </div>
      <div className="yield-boost-pool">
        <div>YIELD BOOSTER</div>
        <div>
          <h2>Up to x2 <svg viewBox="0 0 24 24" width="20px" height="20px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 fGhPpn"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" /></svg></h2>
          <div>Connect wallet to activate yield booster</div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</div>
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="7">
   <div className="accordion-table-pool">
     <Accordion.Header>
            <div className="title-accordion-pool">
              <div className="title-icon-pool">
                <div className="icon-acc2-pool">
                <img src={iconGreen}  alt="" />
                </div>
                <img src="" alt="" />
              </div>
              <div className="cont-title-p-pool">
              <div className="title-p-pool">Earn MONI</div>
              <div className="title-p-pool2">Stake CAKE</div>
              </div>
            </div>
            <div className="cont-core-boosted2-pool">
            <div className="p1-pool">MONI earned-pool</div>
            <div className="p2-pool">0.0</div>
            <div className="p3-pool">0 USD</div>
                </div>

            <div className="cont-earned-pool">
              <div className="earned-pool">Total staked</div>
              <div className="earned-pool-perc">2,174,231 CAKE</div>
            </div>
            <div className="cont-apr-pool-up">
              <div className="cont-apr-pool">
              <div className="apr-pool">APR</div>
                <div className="number-pool">8.61%</div>
                </div>
              
            </div>
            <div className="cont-liqui-pool">
              <div className="liquidity-pool">Ends in</div>
              <div className="price-cont-pool">
              <div className="cash-svg-pool">167,271
blocks</div>
              </div>
            </div>
           
         </Accordion.Header>
         </div>
     <Accordion.Body>
     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                           <div className="accordion-body">
  <div className="left-link">
    <a href="#">Get CAKE-BNB LP
      <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">View Contract<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
    <a href="#">See Pair Info<svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 ennPYv"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" /></svg></a>
  </div>
  <div className="cont-coll-pool">
    <div className="double-cont">
      <div className="cake-earned-pool-cont">
        <div>CAKE earned-pool</div>
        <div className="cont2">
          <h2 className="cont-color-pool">0.00000</h2>
          <button className="btn-harvest-pool">Harvest</button>
        </div>
      </div>
      <div className="yield-boost-pool">
        <div>YIELD BOOSTER</div>
        <div>
          <h2>Up to x2 <svg viewBox="0 0 24 24" width="20px" height="20px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-8a800401-0 fGhPpn"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" /></svg></h2>
          <div>Connect wallet to activate yield booster</div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</div>
     </Accordion.Body>
   </Accordion.Item>
   </Accordion>
   </div>

  );
}

export default AccordionPool;
