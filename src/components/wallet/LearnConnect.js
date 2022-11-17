import "./style/LearnConnect.scss";
import MainButton from "../UI/MainButton";

function LearnConnect(props) {
    // const learnClasses = "learn-container " + props.className;
    
    return (
    
        <div className={`learn-container ${props.className || ""}`}>
            <h1>{props.walletObj[0].title}</h1>
            <img src={props.walletObj[0].img} alt="pancakeswap bunny and its wallet"></img>
            {props.walletObj[0].paragraph ? (
                <p>{props.walletObj[0].paragraph}</p>
                ) : null
            }
            <a href="https://docs.pancakeswap.finance/get-started/connection-guide">
                <MainButton theme="quaternary" label="Learn How to connect"></MainButton>
            </a>
        </div>
    )
}
export default LearnConnect;