import "./style/ConnectYourWallet.scss";
import { Fragment, useState } from "react";
import LearnConnect from "./LearnConnect";
import { learning, learning2 } from "./walletObj";

function ConnectWallet(props) {
  const [showLearnCard, setShowLearnCard] = useState(false);
  const showLearnHandler = () => {
    setShowLearnCard(true);
  };

  const backToConnect = () => {
    setShowLearnCard(false);
  };

  return (
    <div className="main-container-wallet">
      <header>
        <button onClick={backToConnect} className="btn-violet-on-white">
          Connect Wallet
        </button>
        <button onClick={showLearnHandler} className="btn-white-on-violet">
          What's a Web3 Wallet?
        </button>
      </header>
      <div className="wallets-external">
        {!showLearnCard ? (
          <div className="wallets-wrapper">
            <h4>Connect Wallet</h4>
            <p>
              Start by connecting with one of the wallets below. Be sure to
              store your private keys or seed phrase securely. Never share them
              with anyone.
            </p>
            <div className="wallets-container">
              {props.wallets.map((wallet, index) => (
                <div key={index} className="wallet-icon hover-active-class">
                  <img src={wallet.img}></img>
                  <h6>{wallet.title}</h6>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {!showLearnCard ? (
          <LearnConnect walletObj={learning} />
        ) : (
          <LearnConnect className="learning-card-two" walletObj={learning2} />
        )}
      </div>
    </div>
  );
}
export default ConnectWallet;
