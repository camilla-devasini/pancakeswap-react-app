import dollop from "../../../assets/images/trading-competition/dollop-1000.png";
import skull from "../../../assets/images/trading-competition/skull1.png";
import christmas from "../../../assets/images/trading-competition/pancake-christmas-2021-1000.png";
import bull from "../../../assets/images/trading-competition/bull1.png";
import punk from "../../../assets/images/trading-competition/pancake-squad-457-1000.png";
import sunny from "../../../assets/images/trading-competition/sunny-1000.png";
import fireball from "../../../assets/images/trading-competition/fireball.png";
import rock from "../../../assets/images/trading-competition/pancake-squad-6249-1000.png";
import lucky from "../../../assets/images/trading-competition/lucky-1000.png";
import sleepy from "../../../assets/images/trading-competition/sleepy-1000.png";
import syurp from "../../../assets/images/trading-competition/syrup-soak-1000.png";
import churro from "../../../assets/images/trading-competition/churro-1000.png";
import baby from "../../../assets/images/trading-competition/pancake-squad-1535-1000.png";
import purple from "../../../assets/images/trading-competition/pancake-squad-6812-1000.png";
import twinkle from "../../../assets/images/trading-competition/twinkle-1000.png";
import yellow from "../../../assets/images/trading-competition/pancake-squad-2918-1000.png";
import green from "../../../assets/images/trading-competition/pancake-squad-8335-1000.png";
import pirate from "../../../assets/images/trading-competition/pancake-squad-1191-1000.png";
import pipe from "../../../assets/images/trading-competition/pancake-squad-4993-1000.png";
import mask from "../../../assets/images/trading-competition/pancake-squad-2309-1000.png";
import moustache from "../../../assets/images/trading-competition/pancake-squad-1528-1000.png";
import teethy from "../../../assets/images/trading-competition/pancake-squad-9458-1000.png";
import flipsie from "../../../assets/images/trading-competition/flipsie-easter-21-1000.png";
import alien from "../../../assets/images/trading-competition/pancake-squad-315-1000.png";
import lottie from "../../../assets/images/trading-competition/lottie-1000.png";
import doubtful from "../../../assets/images/trading-competition/pancake-squad-9565-1000.png";
import { useEffect, useState } from "react";

const content = [
  {
    number1: "$2,734,120",
    number2: "$1,801,694",
    number3: "$1,653,915",
    number4: "$1,441,877",
    number5: "$1,162,805",
    img1: dollop,
    img2: christmas,
    img3: dollop,
    img4: punk,
    img5: sunny,
    description1: "0xd2...6b9A",
    description2: "0x6E...809b",
    description3: "0xAC...4f02",
    description4: "0xd5...037b",
    description5: "0xB1...Bf06",
    imgBg1: skull,
    imgBg2: bull,
    imgBg3: skull,
    imgBg4: skull,
    imgBg5: fireball,
  },

  {
    number1: "$1,801,694",
    number2: "$464,764",
    number3: "$462,938",
    number4: "$447,828",
    number5: "$418,354",
    img1: christmas,
    img2: churro,
    img3: sunny,
    img4: sunny,
    img5: purple,
    description1: "0x6E...809b",
    description2: "0x6E...9959",
    description3: "0xEE...D0Dc",
    description4: "0x81...5890",
    description5: "0xE0...933a",
    imgBg1: bull,
    imgBg2: bull,
    imgBg3: bull,
    imgBg4: bull,
    imgBg5: bull,
  },

  {
    number1: "$2,734,120",
    number2: "$1,653,915",
    number3: "$1,441,877",
    number4: "$1,109,779",
    number5: "$1,108,376",
    img1: dollop,
    img2: dollop,
    img3: punk,
    img4: rock,
    img5: sunny,
    description1: "0xd2...6b9A",
    description2: "0xAC...4f02",
    description3: "0xd5...037b",
    description4: "0xc8...212E",
    description5: "0x64...8AaE",
    imgBg1: skull,
    imgBg2: skull,
    imgBg3: skull,
    imgBg4: skull,
    imgBg5: skull,
  },

  {
    number1: "$1,162,805",
    number2: "$953,979",
    number3: "$349,890",
    number4: "$302,699",
    number5: "$295,907",
    img1: sunny,
    img2: dollop,
    img3: yellow,
    img4: sleepy,
    img5: green,
    description1: "0xB1...Bf06",
    description2: "0x36...5642",
    description3: "0xcE...Be57",
    description4: "0x5B...7D5F",
    description5: "0xFD...EeBD",
    imgBg1: fireball,
    imgBg2: fireball,
    imgBg3: fireball,
    imgBg4: fireball,
    imgBg5: fireball,
  },
];

export function TopTradersCard() {
  const [index, setIndex] = useState(0);
  const [classe, setClasse] = useState("total-card");

  const handleIndex = () => {
    setIndex(0);
    setClasse("total-card");
  };

  const handleIndex1 = () => {
    setIndex(1);
    setClasse("total-card-1");
  };

  const handleIndex2 = () => {
    setIndex(2);
    setClasse("total-card-2");
  };

  const handleIndex3 = () => {
    setIndex(3);
    setClasse("total-card-3");
  };

  useEffect(() => {
    console.log(content[index].number1);
  }, []);

  return (
    <>
      <div className={classe}>
        <div className="total-card">
          <div className="top-traders">
            <h2>Top Traders</h2>
            <h5>Since start of the competition</h5>
          </div>

          <div className="buttons-box">
            <div className="main-buttons">
              <div onClick={handleIndex} className="total">
                <h2>Total</h2>
              </div>

              <div onClick={handleIndex1} className="storm">
                <h2>Storm</h2>
              </div>

              <div onClick={handleIndex2} className="flippers">
                <h2>Flippers</h2>
              </div>

              <div onClick={handleIndex3} className="cakers">
                <h2>Cakers</h2>
              </div>
            </div>
          </div>

          <div className="data-box">
            <div className="box1">
              <h2>#1</h2>
              <h3>{content[index].number1}</h3>
              <img
                className="avatar-bunny"
                src={content[index].img1}
                alt="dollop"
              />
              <h4>{content[index].description1}</h4>
              <img className="skull" src={content[index].imgBg1} alt="skull1" />
            </div>

            <div className="box2">
              <h2>#2</h2>
              <h3>{content[index].number2}</h3>
              <img
                className="avatar-bunny"
                src={content[index].img2}
                alt="christmas"
              />
              <h4>{content[index].description2}</h4>
              <img className="bull" src={content[index].imgBg2} alt="bull" />
            </div>

            <div className="box3">
              <h2>#3</h2>
              <h3>{content[index].number3}</h3>
              <img
                className="avatar-bunny"
                src={content[index].img3}
                alt="dollop"
              />
              <h4>{content[index].description3}</h4>
              <img
                className="skull2"
                src={content[index].imgBg3}
                alt="skull2"
              />
            </div>

            <div className="box4">
              <h2>#4</h2>
              <h3>{content[index].number4}</h3>
              <img
                className="avatar-bunny"
                src={content[index].img4}
                alt="punk"
              />
              <h4>{content[index].description4}</h4>
              <img
                className="skull3"
                src={content[index].imgBg4}
                alt="skull3"
              />
            </div>

            <div className="box5">
              <h2>#5</h2>
              <h3>{content[index].number5}</h3>
              <img
                className="avatar-bunny"
                src={content[index].img5}
                alt="sunny"
              />
              <h4>{content[index].description5}</h4>
              <img
                className="fireball"
                src={content[index].imgBg5}
                alt="fireball"
              />
            </div>
          </div>
          <div className="hidden-section hide" id="hide1">
            <div className="box">
              <h5 className="number">#6</h5>
              <img className="avatars" src={rock} alt="rock" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={skull} alt="skull" />
            </div>
            <div className="box">
              <h5 className="number">#7</h5>
              <img className="avatars" src={sunny} alt="sunny" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={skull} alt="skull" />
            </div>
            <div className="box">
              <h5 className="number">#8</h5>
              <img className="avatars" src={dollop} alt="dollop" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={skull} alt="skull" />
            </div>
            <div className="box">
              <h5 className="number">#9</h5>
              <img className="avatars" src={dollop} alt="dollop" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={fireball} alt="fireball" />
            </div>
            <div className="box">
              <h5 className="number">#10</h5>
              <img className="avatars" src={lucky} alt="lucky" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={skull} alt="skull" />
            </div>
            <div className="box">
              <h5 className="number">#11</h5>
              <img className="avatars" src={sunny} alt="sunny" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={skull} alt="skull" />
            </div>
            <div className="box">
              <h5 className="number">#12</h5>
              <img className="avatars" src={sleepy} alt="sleepy" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={skull} alt="skull" />
            </div>
            <div className="box">
              <h5 className="number">#13</h5>
              <img className="avatars" src={syurp} alt="syurp" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={skull} alt="skull" />
            </div>
            <div className="box">
              <h5 className="number">#14</h5>
              <img className="avatars" src={sleepy} alt="sleepy" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={skull} alt="skull" />
            </div>
            <div className="box">
              <h5 className="number">#15</h5>
              <img className="avatars" src={churro} alt="churro" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={skull} alt="skull" />
            </div>
            <div className="box">
              <h5 className="number">#16</h5>
              <img className="avatars" src={baby} alt="baby" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={skull} alt="skull" />
            </div>
            <div className="box">
              <h5 className="number">#17</h5>
              <img className="avatars" src={churro} alt="churro" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={skull} alt="skull" />
            </div>
            <div className="box">
              <h5 className="number">#18</h5>
              <img className="avatars" src={churro} alt="churro" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={bull} alt="bull" />
            </div>
            <div className="box">
              <h5 className="number">#19</h5>
              <img className="avatars" src={sunny} alt="sunny" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={bull} alt="bull" />
            </div>
            <div className="box">
              <h5 className="number">#20</h5>
              <img className="avatars" src={sunny} alt="sunny" />
              <div className="texts-column">
                <h5 className="dollars">$1,109,779</h5>
                <h5 className="blue-data">0xc8...212E</h5>
              </div>
              <img className="skull" src={bull} alt="bull" />
            </div>
          </div>
          <div className="show-more-section">
            <div className="show-more" href="">
              Show More
            </div>
            <svg
              viewBox="0 0 24 24"
              color="primary"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow"
            >
              <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* <div className="storm-card">
        <div className="top-traders">
          <h2>Top Traders</h2>
          <h5>Since start of the competition</h5>
        </div>

        <div className="buttons-box">
          <div className="main-buttons">
            <div className="total">
              <h2>Total</h2>
            </div>

            <div className="storm">
              <h2>Storm</h2>
            </div>

            <div className="flippers">
              <h2>Flippers</h2>
            </div>

            <div className="cakers">
              <h2>Cakers</h2>
            </div>
          </div>
        </div>

        <div className="data-box">
          <div className="box1">
            <h2>#1</h2>
            <h3>$1,801,694</h3>
            <img className="avatar-bunny" src={christmas} alt="christmas" />
            <h4>0xd2...6b9A</h4>
            <img className="bull" src={bull} alt="bull" />
          </div>

          <div className="box2">
            <h2>#2</h2>
            <h3>$464,764</h3>
            <img className="avatar-bunny" src={churro} alt="churro" />
            <h4>0x6E...809b</h4>
            <img className="bull2" src={bull} alt="bull" />
          </div>

          <div className="box3">
            <h2>#3</h2>
            <h3>$462,938</h3>
            <img className="avatar-bunny" src={sunny} alt="sunny" />
            <h4>0xAC...4f02</h4>
            <img className="bull3" src={bull} alt="bull" />
          </div>

          <div className="box4">
            <h2>#4</h2>
            <h3>$447,828</h3>
            <img className="avatar-bunny" src={sunny} alt="sunny" />
            <h4>0xd5...037b</h4>
            <img className="bull4" src={bull} alt="bull" />
          </div>

          <div className="box5">
            <h2>#5</h2>
            <h3>$418,354</h3>
            <img className="avatar-bunny" src={purple} alt="purple" />
            <h4>0xB1...Bf06</h4>
            <img className="bull5" src={bull} alt="bull" />
          </div>
        </div>

        <div className="hidden-section hide" id="hide2">
          <div className="box">
            <h5 className="number">#6</h5>
            <img className="avatars" src={sunny} alt="sunny" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={bull} alt="bull" />
          </div>
          <div className="box">
            <h5 className="number">#7</h5>
            <img className="avatars" src={sleepy} alt="sleepy" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={bull} alt="bull" />
          </div>
          <div className="box">
            <h5 className="number">#8</h5>
            <img className="avatars" src={churro} alt="churro" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={bull} alt="bull" />
          </div>
          <div className="box">
            <h5 className="number">#9</h5>
            <img className="avatars" src={sunny} alt="sunny" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={bull} alt="bull" />
          </div>
          <div className="box">
            <h5 className="number">#10</h5>
            <img className="avatars" src={dollop} alt="dollop" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={bull} alt="bull" />
          </div>
          <div className="box">
            <h5 className="number">#11</h5>
            <img className="avatars" src={twinkle} alt="twinkle" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#12</h5>
            <img className="avatars" src={doubtful} alt="doubtful" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#13</h5>
            <img className="avatars" src={sunny} alt="sunny" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#14</h5>
            <img className="avatars" src={churro} alt="churro" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#15</h5>
            <img className="avatars" src={sunny} alt="sunny" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={bull} alt="bull" />
          </div>
          <div className="box">
            <h5 className="number">#16</h5>
            <img className="avatars" src={lucky} alt="lucky" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={bull} alt="bull" />
          </div>
          <div className="box">
            <h5 className="number">#17</h5>
            <img className="avatars" src={dollop} alt="dollop" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#18</h5>
            <img className="avatars" src={sunny} alt="sunny" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#19</h5>
            <img className="avatars" src={sunny} alt="sunny" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={bull} alt="bull" />
          </div>
          <div className="box">
            <h5 className="number">#20</h5>
            <img className="avatars" src={twinkle} alt="twinkle" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={bull} alt="bull" />
          </div>
        </div>

        <div className="show-more-section">
          <div className="show-more" href="">
            Show More
          </div>
          <svg
            viewBox="0 0 24 24"
            color="primary"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
          </svg>
        </div>
      </div>

      <div className="flippers-card">
        <div className="top-traders">
          <h2>Top Traders</h2>
          <h5>Since start of the competition</h5>
        </div>

        <div className="buttons-box">
          <div className="main-buttons">
            <div className="total">
              <h2>Total</h2>
            </div>

            <div className="storm">
              <h2>Storm</h2>
            </div>

            <div className="flippers">
              <h2>Flippers</h2>
            </div>

            <div className="cakers">
              <h2>Cakers</h2>
            </div>
          </div>
        </div>

        <div className="data-box">
          <div className="box1">
            <h2>#1</h2>
            <h3>$2,734,120</h3>
            <img className="avatar-bunny" src={dollop} alt="dollop" />
            <h4>0xd2...6b9A</h4>
            <img className="skull" src={skull} alt="skull" />
          </div>

          <div className="box2">
            <h2>#2</h2>
            <h3>$1,653,915</h3>
            <img className="avatar-bunny" src={dollop} alt="dollop" />
            <h4>0x6E...809b</h4>
            <img className="skull2" src={skull} alt="skull" />
          </div>

          <div className="box3">
            <h2>#3</h2>
            <h3>$1,441,877</h3>
            <img className="avatar-bunny" src={punk} alt="punk" />
            <h4>0xAC...4f02</h4>
            <img className="skull3" src={skull} alt="skull" />
          </div>

          <div className="box4">
            <h2>#4</h2>
            <h3>$1,109,779</h3>
            <img className="avatar-bunny" src={rock} alt="rock" />
            <h4>0xd5...037b</h4>
            <img className="skull4" src={skull} alt="skull" />
          </div>

          <div className="box5">
            <h2>#5</h2>
            <h3>$1,108,376</h3>
            <img className="avatar-bunny" src={sunny} alt="sunny" />
            <h4>0xB1...Bf06</h4>
            <img className="skull5" src={skull} alt="skull" />
          </div>
        </div>

        <div className="hidden-section hide" id="hide3">
          <div className="box">
            <h5 className="number">#6</h5>
            <img className="avatars" src={dollop} alt="dollop" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#7</h5>
            <img className="avatars" src={lucky} alt="lucky" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#8</h5>
            <img className="avatars" src={sunny} alt="sunny" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#9</h5>
            <img className="avatars" src={sleepy} alt="sleepy" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#10</h5>
            <img className="avatars" src={syurp} alt="syurp" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#11</h5>
            <img className="avatars" src={sleepy} alt="sleepy" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#12</h5>
            <img className="avatars" src={churro} alt="churro" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#13</h5>
            <img className="avatars" src={baby} alt="baby" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#14</h5>
            <img className="avatars" src={churro} alt="churro" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#15</h5>
            <img className="avatars" src={teethy} alt="teethy" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#16</h5>
            <img className="avatars" src={flipsie} alt="flipsie" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#17</h5>
            <img className="avatars" src={alien} alt="alien" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#18</h5>
            <img className="avatars" src={churro} alt="churro" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#19</h5>
            <img className="avatars" src={sunny} alt="sunny" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
          <div className="box">
            <h5 className="number">#20</h5>
            <img className="avatars" src={lottie} alt="lottie" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={skull} alt="skull" />
          </div>
        </div>

        <div className="show-more-section">
          <div className="show-more" href="">
            Show More
          </div>
          <svg
            viewBox="0 0 24 24"
            color="primary"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
          </svg>
        </div>
      </div>

      <div className="cakers-card">
        <div className="top-traders">
          <h2>Top Traders</h2>
          <h5>Since start of the competition</h5>
        </div>

        <div className="buttons-box">
          <div className="main-buttons">
            <div className="total">
              <h2>Total</h2>
            </div>

            <div className="storm">
              <h2>Storm</h2>
            </div>

            <div className="flippers">
              <h2>Flippers</h2>
            </div>

            <div className="cakers">
              <h2>Cakers</h2>
            </div>
          </div>
        </div>

        <div className="data-box">
          <div className="box1">
            <h2>#1</h2>
            <h3>$1,162,805</h3>
            <img className="avatar-bunny" src={sunny} alt="sunny" />
            <h4>0xd2...6b9A</h4>
            <img className="fireball" src={fireball} alt="fireball" />
          </div>

          <div className="box2">
            <h2>#2</h2>
            <h3>$953,979</h3>
            <img className="avatar-bunny" src={dollop} alt="dollop" />
            <h4>0x6E...809b</h4>
            <img className="fireball2" src={fireball} alt="fireball" />
          </div>

          <div className="box3">
            <h2>#3</h2>
            <h3>$349,890</h3>
            <img className="avatar-bunny" src={yellow} alt="yellow" />
            <h4>0xAC...4f02</h4>
            <img className="fireball3" src={fireball} alt="fireball" />
          </div>

          <div className="box4">
            <h2>#4</h2>
            <h3>$302,699</h3>
            <img className="avatar-bunny" src={sleepy} alt="sleepy" />
            <h4>0xd5...037b</h4>
            <img className="fireball4" src={fireball} alt="fireball" />
          </div>

          <div className="box5">
            <h2>#5</h2>
            <h3>$295,907</h3>
            <img className="avatar-bunny" src={green} alt="green" />
            <h4>0xB1...Bf06</h4>
            <img className="fireball5" src={fireball} alt="fireball" />
          </div>
        </div>

        <div className="hidden-section hide" id="hide4">
          <div className="box">
            <h5 className="number">#6</h5>
            <img className="avatars" src={lucky} alt="lucky" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#7</h5>
            <img className="avatars" src={pirate} alt="pirate" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#8</h5>
            <img className="avatars" src={sunny} alt="sunny" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#9</h5>
            <img className="avatars" src={pipe} alt="pipe" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#10</h5>
            <img className="avatars" src={churro} alt="churro" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#11</h5>
            <img className="avatars" src={churro} alt="churro" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#12</h5>
            <img className="avatars" src={twinkle} alt="twinkle" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#13</h5>
            <img className="avatars" src={mask} alt="mask" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#14</h5>
            <img className="avatars" src={churro} alt="churro" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#15</h5>
            <img className="avatars" src={churro} alt="churro" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#16</h5>
            <img className="avatars" src={sleepy} alt="sleepy" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#17</h5>
            <img className="avatars" src={moustache} alt="moustache" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#18</h5>
            <img className="avatars" src={churro} alt="churro" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#19</h5>
            <img className="avatars" src={syurp} alt="syurp" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
          <div className="box">
            <h5 className="number">#20</h5>
            <img className="avatars" src={sleepy} alt="sleepy" />
            <div className="texts-column">
              <h5 className="dollars">$1,109,779</h5>
              <h5 className="blue-data">0xc8...212E</h5>
            </div>
            <img className="skull" src={fireball} alt="fireball" />
          </div>
        </div>

        <div className="show-more-section">
          <div className="show-more" href="">
            Show More
          </div>
          <svg
            viewBox="0 0 24 24"
            color="primary"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
          </svg>
        </div>
      </div> */}
    </>
  );
}
