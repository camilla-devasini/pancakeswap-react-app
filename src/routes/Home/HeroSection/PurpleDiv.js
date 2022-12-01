import { useState } from "react";
import lottery from "../../../assets/images/homepage/lottery.webp";
import lotteryMobile from "../../../assets/images/homepage/lotteryMobile.webp";
import perpetual from "../../../assets/images/homepage/perpetual.webp";
import perpetualMobile from "../../../assets/images/homepage/perpetualMobile.webp";
import MainButton from "../../../components/UI/MainButton";
import { AiOutlineArrowRight } from "react-icons/ai";
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

            <MainButton
              style={{
                flexDirection: "row-reverse",
                width: 170,
                margin: 0,
                padding: 13,
              }}
              label={content[index].buttonTitle}
              theme="secondary"
            >
              <AiOutlineArrowRight style={{color: "var(--colors-contrast)"}}/>
            </MainButton>
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
