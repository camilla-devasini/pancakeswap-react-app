import { useState } from "react";
import lottery from "../../../assets/images/homepage/lottery.webp";
import lotteryMobile from "../../../assets/images/homepage/lotteryMobile.webp";
import perpetual from "../../../assets/images/homepage/perpetual.webp";
import perpetualMobile from "../../../assets/images/homepage/perpetualMobile.webp";
import MainButton from "../../../components/UI/MainButton";
import { Countdown } from "./Countdown";

const content = [
  {
    image: perpetual,
    imageMobile: perpetualMobile,
    title: "Perpetual Futures",
    description: "UP TO 100X LEVARAGE",
    buttonTitle: "Trade Now",
  },

  {
    image: lottery,
    imageMobile: lotteryMobile,
    title: "Win $98.647 in Lottery",
    description: <Countdown />,
    buttonTitle: "Play Now",
  },
];

export function PurpleDiv() {
  const [index, setIndex] = useState(0);

  const [classe1, setClasse1] = useState("main-banner-container");

  const handleClassChange = () => {
    setIndex(0);
    setClasse1("main-banner-container");
  };

  const handleClassChange2 = () => {
    setIndex(1);
    setClasse1("main-banner-container-2");
  };

  return (
    <>
      <section className={classe1}>
        <div className="main-banner-sub-container">
          <div className="main-banner-content-container">
            <h2 className="main-banner-title mbt-a1">{content[index].title}</h2>
            <div className="counter-container">
              <h2 className="main-banner-title mbt-a2">
                {content[index].description}
              </h2>
            </div>

            <a href="#" className="link-aquagreen ">
              <MainButton
                style={{ width: 170, margin: 0, padding: 13 }}
                label={content[index].buttonTitle}
                theme="secondary"
              ></MainButton>

              {/* <button className="button-aquagreen buttons-home main-banner-button-a"> */}

              <svg
                className="mbb-svg-a"
                viewBox="0 0 24 24"
                color="invertedContrast"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
              </svg>
              {/* </button> */}
            </a>
          </div>

          <div className="swiper-slide">
            <div onClick={handleClassChange} className="swiper swpr-a"></div>
            <div onClick={handleClassChange2} className="swiper swpr-b"></div>
          </div>

          <div className="bunny-container-a bunny-container-a-desktop">
            <img
              src={content[index].image}
              className="perpetual-bunny-desk"
              alt="Panckake Swap Bunny"
            />
          </div>

          <div className="bunny-container-a bunny-container-a-mobile">
            <img src={content[index].imageMobile} alt="Panckake Swap Bunny" />
          </div>
        </div>
      </section>
    </>
  );
}
