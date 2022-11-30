import Accordion from "react-bootstrap/Accordion";
import MainButton from "../UI/MainButton";
import "./style/accordionPool.scss";
import iconFarm1 from "../../assets/images/iconFarm1.png";


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
                    <img src={iconFarm1} alt="" />
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
                  <div className="number-pool">Up to 59.84%</div>
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
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="left-link">
                  
                  <div className="tot-locked">
                  <div>Total locked: </div>
                  <div>198,171,208 CAKE</div>
                  </div>
                
                <div className="cont-ave">
                  <div>Average lock duration: </div>
                  <div>40 weeks</div>
                </div>
                <div className="cont-perf">
                  <div>Performance </div>
                  <div>Fee 0~2%</div>
                  </div>
                  <div className="hyper">
                  <a href="!*">See Token Info</a>
                  <a href="!*">View Tutorial</a>
                  <a href="!*">View Contract</a>
                  </div>
                  <button>Auto</button>
                
                
                </div>
                <div className="cont-coll">
                  <div className="double-cont">
                    <div className="cake-earned-cont">
                      <div className="cake-earned-title">
                        <div className="cake-title">CAKE</div>{" "}
                        <div className="earned-title">EARNED</div>
                      </div>
                      <div className="cont2">
                        <h2 className="cont-color">0.00000</h2>
                        <button className="btn-harvest">Harvest</button>
                      </div>
                    </div>
                    <div className="cont-btn">
                      <div className="title-cont-btn"> START FARMING</div>
                      <button>
                        {" "}
                        <MainButton label="Connect Wallet" />
                      </button>
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
                <div className="p1-pool">XCAD Staked</div>
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
                  <div className="number-pool">Up to 59.84%</div>
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
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="left-link">
                  
                  <div className="tot-locked">
                  <div>Total locked: </div>
                  <div>198,171,208 CAKE</div>
                  </div>
                
                <div className="cont-ave">
                  <div>Average lock duration: </div>
                  <div>40 weeks</div>
                </div>
                <div className="cont-perf">
                  <div>Performance </div>
                  <div>Fee 0~2%</div>
                  </div>
                  <div className="hyper">
                  <a href="!*">See Token Info</a>
                  <a href="!*">View Tutorial</a>
                  <a href="!*">View Contract</a>
                  </div>
                  <button>Auto</button>
                
                
                </div>
                <div className="cont-coll">
                  <div className="double-cont">
                    <div className="cake-earned-cont">
                      <div className="cake-earned-title">
                        <div className="cake-title">CAKE</div>{" "}
                        <div className="earned-title">EARNED</div>
                      </div>
                      <div className="cont2">
                        <h2 className="cont-color">0.00000</h2>
                        <button className="btn-harvest">Harvest</button>
                      </div>
                    </div>
                    <div className="cont-btn">
                      <div className="title-cont-btn"> START FARMING</div>
                      <button>
                        {" "}
                        <MainButton label="Connect Wallet" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <div className="accordion-table-pool">
            <Accordion.Header>
              <div className="title-accordion-pool">
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
              <div className="p1-pool">MGP earned</div>
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
                  <div className="number-pool">Up to 59.84%</div>
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
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="left-link">
                  
                  <div className="tot-locked">
                  <div>Total locked: </div>
                  <div>198,171,208 CAKE</div>
                  </div>
                
                <div className="cont-ave">
                  <div>Average lock duration: </div>
                  <div>40 weeks</div>
                </div>
                <div className="cont-perf">
                  <div>Performance </div>
                  <div>Fee 0~2%</div>
                  </div>
                  <div className="hyper">
                  <a href="!*">See Token Info</a>
                  <a href="!*">View Tutorial</a>
                  <a href="!*">View Contract</a>
                  </div>
                  <button>Auto</button>
                
                
                </div>
                <div className="cont-coll">
                  <div className="double-cont">
                    <div className="cake-earned-cont">
                      <div className="cake-earned-title">
                        <div className="cake-title">CAKE</div>{" "}
                        <div className="earned-title">EARNED</div>
                      </div>
                      <div className="cont2">
                        <h2 className="cont-color">0.00000</h2>
                        <button className="btn-harvest">Harvest</button>
                      </div>
                    </div>
                    <div className="cont-btn">
                      <div className="title-cont-btn"> START FARMING</div>
                      <button>
                        {" "}
                        <MainButton label="Connect Wallet" />
                      </button>
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
              <div className="p1-pool">WMX earned</div>
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
                  <div className="number-pool">Up to 59.84%</div>
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
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="left-link">
                  
                  <div className="tot-locked">
                  <div>Total locked: </div>
                  <div>198,171,208 CAKE</div>
                  </div>
                
                <div className="cont-ave">
                  <div>Average lock duration: </div>
                  <div>40 weeks</div>
                </div>
                <div className="cont-perf">
                  <div>Performance </div>
                  <div>Fee 0~2%</div>
                  </div>
                  <div className="hyper">
                  <a href="!*">See Token Info</a>
                  <a href="!*">View Tutorial</a>
                  <a href="!*">View Contract</a>
                  </div>
                  <button>Auto</button>
                
                
                </div>
                <div className="cont-coll">
                  <div className="double-cont">
                    <div className="cake-earned-cont">
                      <div className="cake-earned-title">
                        <div className="cake-title">CAKE</div>{" "}
                        <div className="earned-title">EARNED</div>
                      </div>
                      <div className="cont2">
                        <h2 className="cont-color">0.00000</h2>
                        <button className="btn-harvest">Harvest</button>
                      </div>
                    </div>
                    <div className="cont-btn">
                      <div className="title-cont-btn"> START FARMING</div>
                      <button>
                        {" "}
                        <MainButton label="Connect Wallet" />
                      </button>
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
              <div className="p1-pool">KRS earned</div>
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
                  <div className="number-pool">Up to 59.84%</div>
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
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="left-link">
                  
                  <div className="tot-locked">
                  <div>Total locked: </div>
                  <div>198,171,208 CAKE</div>
                  </div>
                
                <div className="cont-ave">
                  <div>Average lock duration: </div>
                  <div>40 weeks</div>
                </div>
                <div className="cont-perf">
                  <div>Performance </div>
                  <div>Fee 0~2%</div>
                  </div>
                  <div className="hyper">
                  <a href="!*">See Token Info</a>
                  <a href="!*">View Tutorial</a>
                  <a href="!*">View Contract</a>
                  </div>
                  <button>Auto</button>
                
                
                </div>
                <div className="cont-coll">
                  <div className="double-cont">
                    <div className="cake-earned-cont">
                      <div className="cake-earned-title">
                        <div className="cake-title">CAKE</div>{" "}
                        <div className="earned-title">EARNED</div>
                      </div>
                      <div className="cont2">
                        <h2 className="cont-color">0.00000</h2>
                        <button className="btn-harvest">Harvest</button>
                      </div>
                    </div>
                    <div className="cont-btn">
                      <div className="title-cont-btn"> START FARMING</div>
                      <button>
                        {" "}
                        <MainButton label="Connect Wallet" />
                      </button>
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
