import Accordion from "react-bootstrap/Accordion";
import MainButton from "../UI/MainButton";
import "./style/farmsAccordion.scss";


function FarmsAccordion(props) {

  return (
    <div className="total-cont">
      <Accordion>
        <Accordion.Item eventKey="0">
          <div className="accordion-table">
            <Accordion.Header>
              <div className="cont-t-c">
                <div className="title-accordion">
                  <div className="title-icon">
                    <img src={props.info.img} alt="" />
                    <img src="" alt="" />
                  </div>
                  <h2>{props.info.name}</h2>
                </div>
                <div className="cont-core-boosted">
                  <div className="core">
                    <img style={{ width: "20px" }} src={props.info.imgCore} alt="" />
                    {props.info.Core}
                  </div>
                  <div className="boosted">
                    <img style={{ width: "20px" }} src={props.info.imgBoosted} alt="" />
                    {props.info.Boosted}
                  </div>
                </div>
              </div>
              <div className="cont-media-2">
                <div className="cont-earned">
                  <div className="earned">{props.info.earned}</div>
                  <div className="earned-perc">{props.info.number}</div>
                </div>
                <div className="cont-apr-up">
                  <div className="cont-apr">
                    <div className="apr">{props.info.APR}</div>

                    <div className="number">{props.info.numberApr}</div>
                  </div>
                  <div className="cont-n-up-to">
                    <div className="up-to-perc">
                      <div className="up-to">
                        <img src={props.info.imgBoosted} alt="icon" />
                        {props.info.upto}
                      </div>
                      <div className="perc">{props.info.upPerc}</div>
                    </div>
                  </div>
                </div>
                <div className="cont-liqui">
                  <div className="liquidity">{props.info.liquidity}</div>
                  <div className="price-cont">
                    <div className="cash-svg">{props.info.value}</div>
                  </div>
                </div>
              </div>
              <div className="cont-multi">
                <div className="multi">{props.info.multi}</div>
                <div className="n-x-svg">{props.info.perc}</div>
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
                  <a href="#">
                  {props.info.ancorCake}
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    {props.info.ancorContract}
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                   {props.info.ancorInfo}
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                </div>
                <div className="cont-coll">
                  <div className="double-cont">
                    <div className="cake-earned-cont">
                      <div className="cake-earned-title">
                        <div className="cake-title">{props.info.titleCake}</div>{" "}
                        <div className="earned-title">{props.info.titleEarned}</div>
                      </div>
                      <div className="cont2">
                        <h2 className="cont-color">{props.info.numberdEarned}</h2>
                        <button className="btn-harvest">{props.info.btnHarvest}</button>
                      </div>
                    </div>
                    <div className="yield-boost">
                      <div className="title-yield">{props.info.titleYield}</div>
                      <div>
                        <h2>
                        {props.info.uptoh2}{" "}
                          <svg
                            viewBox="0 0 24 24"
                            width="20px"
                            height="20px"
                            color="text"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-8a800401-0 fGhPpn"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" />
                          </svg>
                        </h2>
                        <div className="title-para">
                        {props.info.paraYield}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cont-btn">
                    <div className="title-cont-btn">{props.info.nameBtn}</div>
                    <button>
                      {" "}
                      <MainButton label="Connect Wallet" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        {/* <Accordion.Item eventKey="1">
          <div className="accordion-table">
            <Accordion.Header>
              <div className="cont-t-c">
                <div className="title-accordion">
                  <div className="title-icon">
                    <img src={iconFarm1} alt="" />
                    <img src="" alt="" />
                  </div>
                  <h2>CAKE bnb</h2>
                </div>
                <div className="cont-core-boosted">
                  <div className="core">
                    <img src={iconCore} alt="" />
                    Core
                  </div>
                  <div className="boosted">
                    <img src={iconBoosted} alt="" />
                    Boosted
                  </div>
                </div>
              </div>
              <div className="cont-media-2">
                <div className="cont-earned">
                  <div className="earned">Earned</div>
                  <div className="earned-perc">0</div>
                </div>
                <div className="cont-apr-up">
                  <div className="cont-apr">
                    <div className="apr">apr</div>

                    <div className="number">24%</div>
                  </div>
                  <div className="cont-n-up-to">
                    <div className="up-to-perc">
                      <div className="up-to">
                        <img src={iconBoosted} alt="icon" />
                        up-to
                      </div>
                      <div className="perc">42%</div>
                    </div>
                  </div>
                </div>
                <div className="cont-liqui">
                  <div className="liquidity">Liquidity</div>
                  <div className="price-cont">
                    <div className="cash-svg">19999999</div>
                  </div>
                </div>
              </div>
              <div className="cont-multi">
                <div className="multi">multiplier</div>
                <div className="n-x-svg">2.5x</div>
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
                  <a href="#">
                    Get CAKE-BNB LP
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    View Contract
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    See Pair Info
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
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
                    <div className="yield-boost">
                      <div className="title-yield">YIELD BOOSTER</div>
                      <div>
                        <h2>
                          Up to x2{" "}
                          <svg
                            viewBox="0 0 24 24"
                            width="20px"
                            height="20px"
                            color="text"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-8a800401-0 fGhPpn"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" />
                          </svg>
                        </h2>
                        <div className="title-para">
                          Connect wallet to activate yield booster
                        </div>
                      </div>
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
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <div className="accordion-table">
            <Accordion.Header>
              <div className="cont-t-c">
                <div className="title-accordion">
                  <div className="title-icon">
                    <img src={iconFarm1} alt="" />
                    <img src="" alt="" />
                  </div>
                  <h2>CAKE bnb</h2>
                </div>
                <div className="cont-core-boosted">
                  <div className="core">
                    <img src={iconCore} alt="" />
                    Core
                  </div>
                  <div className="boosted">
                    <img src={iconBoosted} alt="" />
                    Boosted
                  </div>
                </div>
              </div>
              <div className="cont-media-2">
                <div className="cont-earned">
                  <div className="earned">Earned</div>
                  <div className="earned-perc">0</div>
                </div>
                <div className="cont-apr-up">
                  <div className="cont-apr">
                    <div className="apr">apr</div>

                    <div className="number">24%</div>
                  </div>
                  <div className="cont-n-up-to">
                    <div className="up-to-perc">
                      <div className="up-to">
                        <img src={iconBoosted} alt="icon" />
                        up-to
                      </div>
                      <div className="perc">42%</div>
                    </div>
                  </div>
                </div>
                <div className="cont-liqui">
                  <div className="liquidity">Liquidity</div>
                  <div className="price-cont">
                    <div className="cash-svg">19999999</div>
                  </div>
                </div>
              </div>
              <div className="cont-multi">
                <div className="multi">multiplier</div>
                <div className="n-x-svg">2x</div>
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
                  <a href="#">
                    Get CAKE-BNB LP
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    View Contract
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    See Pair Info
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
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
                    <div className="yield-boost">
                      <div className="title-yield">YIELD BOOSTER</div>
                      <div>
                        <h2>
                          Up to x2{" "}
                          <svg
                            viewBox="0 0 24 24"
                            width="20px"
                            height="20px"
                            color="text"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-8a800401-0 fGhPpn"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" />
                          </svg>
                        </h2>
                        <div className="title-para">
                          Connect wallet to activate yield booster
                        </div>
                      </div>
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <div className="accordion-table">
            <Accordion.Header>
              <div className="cont-t-c">
                <div className="title-accordion">
                  <div className="title-icon">
                    <img src={iconFarm1} alt="" />
                    <img src="" alt="" />
                  </div>
                  <h2>XCAD-CAKE</h2>
                </div>
                <div className="cont-core-boosted">
                  <div className="core">
                    <img src={iconCore} alt="" />
                    Core
                  </div>
                  <div className="boosted boosted2">
                    <img src={iconBoosted} alt="" />
                    Boosted
                  </div>
                </div>
              </div>
              <div className="cont-media-2">
                <div className="cont-earned">
                  <div className="earned">Earned</div>
                  <div className="earned-perc">0</div>
                </div>
                <div className="cont-apr-up">
                  <div className="cont-apr">
                    <div className="apr">apr</div>

                    <div className="number">24%</div>
                  </div>
                  <div className="cont-n-up-to">
                    <div className="up-to-perc ">
                      <div className="up-to up-to2 ">
                        <img src={iconBoosted} alt="icon" />
                        up-to
                      </div>
                      <div className="perc perc2">42%</div>
                    </div>
                  </div>
                </div>
                <div className="cont-liqui">
                  <div className="liquidity">Liquidity</div>
                  <div className="price-cont">
                    <div className="cash-svg">19999999</div>
                  </div>
                </div>
              </div>
              <div className="cont-multi">
                <div className="multi">multiplier</div>
                <div className="n-x-svg">0.5x</div>
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
                  <a href="#">
                    Get CAKE-BNB LP
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    View Contract
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    See Pair Info
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
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
                    <div className="yield-boost">
                      <div className="title-yield">YIELD BOOSTER</div>
                      <div>
                        <h2>
                          Up to x2{" "}
                          <svg
                            viewBox="0 0 24 24"
                            width="20px"
                            height="20px"
                            color="text"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-8a800401-0 fGhPpn"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" />
                          </svg>
                        </h2>
                        <div className="title-para">
                          Connect wallet to activate yield booster
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <div className="accordion-table">
            <Accordion.Header>
              <div className="cont-t-c">
                <div className="title-accordion">
                  <div className="title-icon">
                    <img src={iconGold} alt="" />
                    <img src="" alt="" />
                  </div>
                  <h2>BUSD-BNB</h2>
                </div>
                <div className="cont-core-boosted">
                  <div className="core">
                    <img src={iconCore} alt="" />
                    Core
                  </div>
                  <div className="boosted boosted2">
                    <img src={iconBoosted} alt="" />
                    Boosted
                  </div>
                </div>
              </div>
              <div className="cont-media-2">
                <div className="cont-earned">
                  <div className="earned">Earned</div>
                  <div className="earned-perc">0</div>
                </div>
                <div className="cont-apr-up">
                  <div className="cont-apr">
                    <div className="apr">apr</div>

                    <div className="number">24%</div>
                  </div>
                  <div className="cont-n-up-to">
                    <div className="up-to-perc ">
                      <div className="up-to up-to2 ">
                        <img src={iconBoosted} alt="icon" />
                        up-to
                      </div>
                      <div className="perc perc2">42%</div>
                    </div>
                  </div>
                </div>
                <div className="cont-liqui">
                  <div className="liquidity">Liquidity</div>
                  <div className="price-cont">
                    <div className="cash-svg">$167.686</div>
                  </div>
                </div>
              </div>
              <div className="cont-multi">
                <div className="multi">multiplier</div>
                <div className="n-x-svg">11x</div>
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
                  <a href="#">
                    Get CAKE-BNB LP
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    View Contract
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    See Pair Info
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
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
                    <div className="yield-boost">
                      <div className="title-yield">YIELD BOOSTER</div>
                      <div>
                        <h2>
                          Up to x2{" "}
                          <svg
                            viewBox="0 0 24 24"
                            width="20px"
                            height="20px"
                            color="text"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-8a800401-0 fGhPpn"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" />
                          </svg>
                        </h2>
                        <div className="title-para">
                          Connect wallet to activate yield booster
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <div className="accordion-table">
            <Accordion.Header>
              <div className="cont-t-c">
                <div className="title-accordion">
                  <div className="title-icon">
                    <img src={iconx} alt="" />
                    <img src="" alt="" />
                  </div>
                  <h2>CAKE bnb</h2>
                </div>
                <div className="cont-core-boosted">
                  <div className="core">
                    <img src={iconCore} alt="" />
                    Core
                  </div>
                  <div className="boosted boosted2">
                    <img src={iconBoosted} alt="" />
                    Boosted
                  </div>
                </div>
              </div>
              <div className="cont-media-2">
                <div className="cont-earned">
                  <div className="earned">Earned</div>
                  <div className="earned-perc">0</div>
                </div>
                <div className="cont-apr-up">
                  <div className="cont-apr">
                    <div className="apr">apr</div>

                    <div className="number">24%</div>
                  </div>
                  <div className="cont-n-up-to">
                    <div className="up-to-perc ">
                      <div className="up-to up-to2 ">
                        <img src={iconBoosted} alt="icon" />
                        up-to
                      </div>
                      <div className="perc perc2">42%</div>
                    </div>
                  </div>
                </div>
                <div className="cont-liqui">
                  <div className="liquidity">Liquidity</div>
                  <div className="price-cont">
                    <div className="cash-svg">$$351.663</div>
                  </div>
                </div>
              </div>
              <div className="cont-multi">
                <div className="multi">multiplier</div>
                <div className="n-x-svg">0.5x</div>
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
                  <a href="#">
                    Get CAKE-BNB LP
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    View Contract
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    See Pair Info
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
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
                    <div className="yield-boost">
                      <div className="title-yield">YIELD BOOSTER</div>
                      <div>
                        <h2>
                          Up to x2{" "}
                          <svg
                            viewBox="0 0 24 24"
                            width="20px"
                            height="20px"
                            color="text"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-8a800401-0 fGhPpn"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" />
                          </svg>
                        </h2>
                        <div className="title-para">
                          Connect wallet to activate yield booster
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <div className="accordion-table">
            <Accordion.Header>
              <div className="cont-t-c">
                <div className="title-accordion">
                  <div className="title-icon">
                    <img src={iconLion} alt="" />
                    <img src="" alt="" />
                  </div>
                  <h2>WMX-BUSD</h2>
                </div>
                <div className="cont-core-boosted">
                  <div className="core">
                    <img src={iconCore} alt="" />
                    Core
                  </div>
                  <div className="boosted boosted2">
                    <img src={iconBoosted} alt="" />
                    Boosted
                  </div>
                </div>
              </div>
              <div className="cont-media-2">
                <div className="cont-earned">
                  <div className="earned">Earned</div>
                  <div className="earned-perc">0</div>
                </div>
                <div className="cont-apr-up">
                  <div className="cont-apr">
                    <div className="apr">apr</div>

                    <div className="number">24%</div>
                  </div>
                  <div className="cont-n-up-to">
                    <div className="up-to-perc ">
                      <div className="up-to up-to2 ">
                        <img src={iconBoosted} alt="icon" />
                        up-to
                      </div>
                      <div className="perc perc2">42%</div>
                    </div>
                  </div>
                </div>
                <div className="cont-liqui">
                  <div className="liquidity">Liquidity</div>
                  <div className="price-cont">
                    <div className="cash-svg">$$351.663</div>
                  </div>
                </div>
              </div>
              <div className="cont-multi">
                <div className="multi">multiplier</div>
                <div className="n-x-svg">0.5x</div>
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
                  <a href="#">
                    Get CAKE-BNB LP
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    View Contract
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    See Pair Info
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
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
                    <div className="yield-boost">
                      <div className="title-yield">YIELD BOOSTER</div>
                      <div>
                        <h2>
                          Up to x2{" "}
                          <svg
                            viewBox="0 0 24 24"
                            width="20px"
                            height="20px"
                            color="text"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-8a800401-0 fGhPpn"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" />
                          </svg>
                        </h2>
                        <div className="title-para">
                          Connect wallet to activate yield booster
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <div className="accordion-table">
            <Accordion.Header>
              <div className="cont-t-c">
                <div className="title-accordion">
                  <div className="title-icon">
                    <img src={iconAr} alt="" />
                    <img src="" alt="" />
                  </div>
                  <h2>ARV-BNB</h2>
                </div>
                <div className="cont-core-boosted">
                  <div className="core">
                    <img src={iconCore} alt="" />
                    Core
                  </div>
                  <div className="boosted boosted2">
                    <img src={iconBoosted} alt="" />
                    Boosted
                  </div>
                </div>
              </div>
              <div className="cont-media-2">
                <div className="cont-earned">
                  <div className="earned">Earned</div>
                  <div className="earned-perc">0</div>
                </div>
                <div className="cont-apr-up">
                  <div className="cont-apr">
                    <div className="apr">apr</div>

                    <div className="number">24%</div>
                  </div>
                  <div className="cont-n-up-to">
                    <div className="up-to-perc ">
                      <div className="up-to up-to2 ">
                        <img src={iconBoosted} alt="icon" />
                        up-to
                      </div>
                      <div className="perc perc2">42%</div>
                    </div>
                  </div>
                </div>
                <div className="cont-liqui">
                  <div className="liquidity">Liquidity</div>
                  <div className="price-cont">
                    <div className="cash-svg">$91.679</div>
                  </div>
                </div>
              </div>
              <div className="cont-multi">
                <div className="multi">multiplier</div>
                <div className="n-x-svg">40x</div>
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
                  <a href="#">
                    Get CAKE-BNB LP
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    View Contract
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
                  <a href="#">
                    See Pair Info
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-8a800401-0 ennPYv"
                    >
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
                    </svg>
                  </a>
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
                    <div className="yield-boost">
                      <div className="title-yield">YIELD BOOSTER</div>
                      <div>
                        <h2>
                          Up to x2{" "}
                          <svg
                            viewBox="0 0 24 24"
                            width="20px"
                            height="20px"
                            color="text"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-8a800401-0 fGhPpn"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" />
                          </svg>
                        </h2>
                        <div className="title-para">
                          Connect wallet to activate yield booster
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item> */}
      </Accordion>
    </div>
  );
}

export default FarmsAccordion;
