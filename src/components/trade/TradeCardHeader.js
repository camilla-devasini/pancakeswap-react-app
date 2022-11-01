import "./style/TradeCardHeader.scss";

function TradeCardHeader(props) {
    return (
    
    <header className="trade-card-header">
        <div className="trade-icons">
            <div className="trade-item">
                <button className="hover-active-class" onClick={props.onToggleGraph}>
                    <img src={props.iconsSwap.graph}></img>
                </button>
            </div>
            
            <div className="trade-item-2">
                <h2>{props.cardTitle}</h2>
            </div>
          
            <div className="trade-icons-right">
                <button className="hover-active-class">
                    <img src={props.iconsSwap.settings} alt="setting icon"/>
                </button>
                <button className="hover-active-class">
                    <img src={props.iconsSwap.clock} alt="reload clock icon"/>
                </button>
                <button className="hover-active-class">
                    <img src={props.iconsSwap.loop} alt="reload icon"/>
                </button>
            </div>
        </div>
        <h3>{props.cardSubtitle}</h3>
    </header>
    )
}

export default TradeCardHeader;