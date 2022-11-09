import lunarbunny from "../../../assets/images/homepage/bunny@2x.webp";
import starL from "../../../assets/images/homepage/star-l@2x.webp";
import starR from "../../../assets/images/homepage/star-r@2x.webp";
import starT from "../../../assets/images/homepage/star-top-r@2x.webp";
import { PurpleDiv } from "./PurpleDiv";


export function Hero() {
  return (
    <>
      <div className="hero-content">
        <div className="background-hero"></div>
        <PurpleDiv/>
        <div className="hero-container">
          <div className="container-1">
            <h2 className="h2-hero">The moon is made of pancakes.</h2>
            <h3 className="h3-hero">
              Trade, earn, and win crypto, on the most popular decentralized
              platform in the galaxy{" "}
            </h3>

            <section className="buttons">
              <button className="connect-wallet">Connect Wallet</button>

              <button className="trade-now">Trade Now</button>
            </section>
          </div>

          <div className="container-2">
            <div className="bunny-container">
              <img src={starL} className="star" alt="star-l" />
              <img src={starR} className="star" alt="star-r" />
              <img src={starT} className="star" alt="star-top" />
              <img src={lunarbunny} className="lunar-bunny" alt="lunar-bunny" />
            </div>
          </div>

          <svg
            className="svg-border"
            viewBox="0 0 1660 339"
            width="100%"
            color="text"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z"
              fill="url(#paint0_linear_light)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_light"
                x1="830"
                y1="84"
                x2="830"
                y2="339"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.48"></stop>
                <stop
                  offset="0.566389"
                  stop-color="white"
                  stop-opacity="0.35"
                ></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
