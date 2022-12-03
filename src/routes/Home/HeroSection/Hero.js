import lunarbunny from "../../../assets/images/homepage/bunny@2x.webp";
import starL from "../../../assets/images/homepage/star-l@2x.webp";
import starR from "../../../assets/images/homepage/star-r@2x.webp";
import starT from "../../../assets/images/homepage/star-top-r@2x.webp";
import MainButton from "../../../components/UI/MainButton";
import { PurpleDiv } from "./PurpleDiv";
import fadeOut from "../../../assets/images/homepage/svgexport-16.svg";

export function Hero() {
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
              {/* <button className="connect-wallet">Connect Wallet</button> */}
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

              {/* <button className="trade-now">Trade Now</button> */}
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

         <svg src={fadeOut}className="svg-border"/>
        </div>
      </div>
    </>
  );
}
