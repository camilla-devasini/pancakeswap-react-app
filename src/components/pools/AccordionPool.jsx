import Accordion from "react-bootstrap/Accordion";
import MainButton from "../UI/MainButton";
import "./style/accordionPool.scss";
import iconFarm1 from "../../assets/images/iconFarm1.png";


import xIcon from "../../assets/images/xIcon.png" ;
import iconpi from "../../assets/images/iconpi.png"
import iconLeon from "../../assets/images/iconLeon.png"
import iconsr from "../../assets/images/iconsr.png"
import { poolsValue } from "../helpers/poolValueObj";


function AccordionPool() {
  return (
    <div className="total-cont-back">
      <Accordion>
        {poolsValue.map((info) =>(
        <Accordion.Item eventKey={info.eventkey} info= {info}>

          <div className="accordion-table-pool">
            <Accordion.Header>
              <div className="title-accordion-pool">
                <div className="title-icon-pool">
                  <div className="icon-acc2-pool">
                    <img src={info.imgFarm} alt="" />
                  </div>
                  <img src="" alt="" />
                </div>
                <div className="cont-title-p-pool">
                  <div className="title-p-pool">{info.title}</div>
                  <div className="title-p-pool2">{info.paraPool}</div>
                </div>
              </div>
              <div className="cont-core-boosted2-pool">
                <div className="p1-pool">{info.poolstaked}</div>
                <div className="p2-pool">{info.poolN}</div>
                <div className="p3-pool">{info.poolUsd}</div>
              </div>

              <div className="cont-earned-pool">
                <div className="earned-pool">{info.flexPool}</div>
                <div className="earned-pool-perc">{info.flexPerc}</div>
              </div>
              <div className="cont-apr-pool-up">
                <div className="cont-apr-pool">
                  <div className="apr-pool">{info.locked}</div>
                  <div className="number-pool">{info.upto}</div>
                </div>
              </div>
              <div className="cont-liqui-pool">
                <div className="liquidity-pool">{info.totalStaked}</div>
                <div className="price-cont-pool">
                  <div className="cash-svg-pool">{info.valueStaked} </div>
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
                  <div>{info.tLocked}</div>
                  <div>{info.lCake}</div>
                  </div>
                
                <div className="cont-ave">
                  <div>{info.average}</div>
                  <div>{info.week}</div>
                </div>
                <div className="cont-perf">
                  <div>{info.perfo} </div>
                  <div>{info.fee}</div>
                  </div>
                  <div className="hyper">
                  <a href="!*">See Token Info</a>
                  <a href="!*">View Tutorial</a>
                  <a href="!*">View Contract</a>
                  </div>
                  <button className={info.class}>{info.nameBtn}</button>
                
                
                </div>
                <div className="cont-coll">
                  <div className="double-cont">
                    <div className="cake-earned-cont">
                      <div className="cake-earned-title">
                        <div className="cake-title">{info.cake}</div>{" "}
                        <div className="earned-title">{info.earned}</div>
                      </div>
                      <div className="cont2">
                        <h2 className="cont-color">{info.zero}</h2>
                    
                      </div>
                    </div>
                    <div className="cont-btn">
                      <div className="title-cont-btn"> {info.start}</div>
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
        ))}
      

      </Accordion>
    </div>
  );
}

export default AccordionPool;
