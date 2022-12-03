import earn1 from "../../../assets/images/homepage/folder@2x.webp";
import earn2 from "../../../assets/images/homepage/pie@2x.webp";
import earn3 from "../../../assets/images/homepage/stonks@2x.webp";
import MainButton from "../../../components/UI/MainButton";
import { TopTraders } from "./TopTraders";

export function Earn() {
  return (
    <>
      <div className="background-content-3">
        <svg
          className="svg-border-grey"
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z"></path>
        </svg>

        <div className="container-3">
          <div className="container-text">
            <h2>
              <span className="earn">Earn</span> passive income
            </h2>
            <h2>with crypto.</h2>
            <h4>
              PancakeSwap makes it easy to make your crypto work for <br /> you.
            </h4>

            <div className="buttons-earn">
              {/* <button>Explore</button> */}
              <MainButton
                style={{ width: 140, margin: 0, padding: 13 }}
                label="Explore"
                theme="secondary"
              ></MainButton>

              <a className="link-learn" href="">
                Learn
              </a>
            </div>
          </div>

          <div className="img-container">
            <img src={earn1} className="earn-1" alt="earn-1" />
            <img src={earn2} className="earn-2" alt="earn-2" />
            <img src={earn3} className="earn-3" alt="earn-3" />
          </div>
        </div>
      </div>
      <TopTraders />
    </>
  );
}
