
import "./style/ConnectWallet.scss";
import learnBunny from "../../assets/images/learn-connect-bunny.png";
import MainButton from "../UI/MainButton";
import { Fragment } from "react";

function ConnectWallet(props) {
    return (
        <div className="main-container-wallet">

        
           <header>
                <button className="btn-violet-on-white">Connect Wallet</button>
                <button className="btn-white-on-violet">What's a Web3 Wallet?</button>
            </header>
            <div className="wallets-external">
                <div className="wallets-wrapper">
                    <h4>Connect Wallet</h4>
                    <p>Start by connecting with one of the wallets below.
                        Be sure to store your private keys or seed phrase
                        securely. Never share them with anyone.
                    </p>
                    <div className="wallets-container">
                        {props.wallets.map(wallet => (
                            <div className="wallet-icon hover-active-class">
                                <img src={wallet.img}></img>
                                <h6>{wallet.title}</h6>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="learn-container">
                    <h1>Haven’t got a wallet yet?</h1>
                    <img src={learnBunny} alt="pancakeswap bunny and its wallet"></img>
                    <a href="https://docs.pancakeswap.finance/get-started/connection-guide">
                        <MainButton theme="quaternary" label="Learn How to connect"></MainButton>
                    </a>
                
                </div>
            </div>
        </div>
    )
}
export default ConnectWallet;