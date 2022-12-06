import astronautbunny from "../../../assets/images/homepage/astronaut-bunny.webp";
// import lunarbunny from "../../../assets/images/homepage/bunny@2x.webp";
import starL from "../../../assets/images/homepage/star-l@2x.webp";
import starR from "../../../assets/images/homepage/star-r@2x.webp";
import starT from "../../../assets/images/homepage/star-top-r@2x.webp";
import MainButton from "../../../components/UI/MainButton";
import { PurpleDiv } from "./PurpleDiv";
import { useTheme } from "../../../context/ColorThemeContext";

export function Hero() {
  const { theme } = useTheme();
  return (
    <>
      <div className="hero-content">
        <div className="background-hero"></div>
        <PurpleDiv />
        <div className="hero-container">
          <div className="container-1">
            <h2 className="h2-hero">The moon is made of pancakes.</h2>
            <h3 className="h3-hero">
              Trade, earn, and win crypto, on the most popular decentralized
              platform in the galaxy{" "}
            </h3>

            <section className="buttons-section">
              <MainButton
                style={{ width: 170, margin: 0, padding: 13 }}
                label="Connect Wallet"
                theme="secondary"
              ></MainButton>

              <MainButton
                style={{ width: 130, margin: 0, padding: 13 }}
                label="Trade Now"
                theme="tertiary"
              ></MainButton>
            </section>
          </div>

          <div className="container-2">
            <div className="bunny-container">
              <img src={starL} className="star" alt="star-l" />
              <img src={starR} className="star" alt="star-r" />
              <img src={starT} className="star" alt="star-top" />
              <img
                src={astronautbunny}
                className="lunar-bunny"
                alt="lunar-bunny"
              />
            </div>
          </div>
        </div>
        <div className="svg-wrapper">
          {theme === "light" ? (
            <svg
              className="lt-svg"
              viewBox="0 0 1660 339"
              class="sc-4ba21b47-0 IIbzK slide-svg-light"
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
          ) : (
            <svg
              className="dk-svg"
              viewBox="0 0 1660 339"
              width="100%"
              color="text"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
                fill="url(#paint0_linear_dark)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_dark"
                  x1="830"
                  y1="83.5"
                  x2="830"
                  y2="338.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#08060B" stop-opacity="0.2"></stop>
                  <stop
                    offset="0.545554"
                    stop-color="#08060B"
                    stop-opacity="0.5"
                  ></stop>
                  <stop offset="1" stop-color="#08060B"></stop>
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
