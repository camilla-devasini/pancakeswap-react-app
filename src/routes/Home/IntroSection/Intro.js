import { Card } from "./Card";
import user from "../../../assets/images/homepage/svgexport-20.svg";
import trades from "../../../assets/images/homepage/svgexport-21.svg";
import staked from "../../../assets/images/homepage/svgexport-22.svg";

export function Intro() {
  return (
    <>
      <div className="background-content-1">
        <div className="container-1">
          <svg
            viewBox="0 0 48 48"
            height="48px"
            width="48px"
            color="text"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-8a800401-0 fLqPgg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9024 0C10.8947 0 7.87179 3.60289 8.60749 7.50271L10.3484 16.7306C4.45101 19.3061 0 23.7533 0 29.3333V32.7273C0 37.3405 3.08306 41.2029 7.39317 43.8102C11.7369 46.4379 17.6132 48 24 48C30.3868 48 36.2631 46.4379 40.6068 43.8102C44.9169 41.2029 48 37.3405 48 32.7273V29.3333C48 23.7236 43.5028 19.2593 37.5552 16.6889L39.2882 7.50271C40.0239 3.6029 37.001 0 32.9933 0C29.4567 0 26.5896 2.83809 26.5896 6.33904V14.147C25.7386 14.0899 24.8746 14.0606 24 14.0606C23.0897 14.0606 22.1908 14.0923 21.3061 14.1541V6.33904C21.3061 2.83809 18.4391 0 14.9024 0ZM17.8776 28.3637C17.8776 30.372 16.7811 32 15.4286 32C14.0761 32 12.9796 30.372 12.9796 28.3637C12.9796 26.3554 14.0761 24.7273 15.4286 24.7273C16.7811 24.7273 17.8776 26.3554 17.8776 28.3637ZM34.7757 28.3637C34.7757 30.372 33.6792 32 32.3267 32C30.9742 32 29.8777 30.372 29.8777 28.3637C29.8777 26.3554 30.9742 24.7273 32.3267 24.7273C33.6792 24.7273 34.7757 26.3554 34.7757 28.3637Z"
              fill="url(#paint0_linear)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="24"
                y1="0"
                x2="24"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7645D9"></stop>
                <stop offset="1" stop-color="#5121B1"></stop>
              </linearGradient>
            </defs>
          </svg>
          <h2>
            Used by millions <br /> Trusted with billions.
          </h2>
          <h4>
            PancakeSwap has the most users of any decentralized platform, ever.
            <br />
            And those users are now entrusing the platform with over $4 bilion
            in funds.{" "}
          </h4>
          <h3>Will you join them?</h3>
        </div>

        <div className="cards-section1">
          <Card
            img={user}
            text={{
              title: "2.2 Milion",
              target: "users",
              description: "in the last 30 days",
            }}
          />
          <Card
            img={trades}
            text={{
              title: "26 milion",
              target: "trades",
              description: "made in the last 30 days",
            }}
          />
          <Card
            img={staked}
            text={{
              title: "$3.7 billion",
              target: "staked",
              description: "Total Value Locked",
            }}
          />
        </div>
      </div>
      <div className="wrapper-svg">
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          class="sc-4ba21b47-0 IIbzK"
        >
          <path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path>
        </svg>

        
      </div>
    </>
  );
}
