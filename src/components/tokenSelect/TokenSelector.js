import "./style/TokenSelector.scss";
import closeIcon from "../../assets/images/close-icon.svg";

function TokenSelector(props) {
  return (
    <div className="token-selector-wrapper">
      <div className="token-selector-header">
        <h2>Select a token</h2>
        <button>
          <img src={closeIcon} alt="close-icon"></img>
        </button>
      </div>
      <section className="token-selector-body">
        <div className="token-selection">
          <input type="text" placeholder="Search name"></input>
        </div>
        <div className="token-list"></div>
      </section>
    </div>
  );
}
export default TokenSelector;
