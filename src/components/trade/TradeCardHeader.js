import "./style/TradeCardHeader.scss";

function TradeCardHeader(props) {
    return (
    
    <header className="trade-card-header">
        <div className="trade-icons">
            <div className="trade-item">
                { props.iconsTrade?.graph ? (
                    <button className="hover-active-class" onClick={props.onToggleGraph}>
                        <img src={props.iconsTrade.graph}></img>
                    </button>
                    ): null }
              
            </div>
            
            <div className="trade-item-2">
                <h2>{props.cardTitle}</h2>
            </div>
          
            <div className="trade-icons-right">
                {props.iconsTrade?.settings ? (
                    <button className="hover-active-class">
                        <img src={props.iconsTrade.settings} alt="setting icon"></img>
                    </button>
                ) : null }
                
                <button className="hover-active-class">
                    <img src={props.iconsTrade.clock} alt="reload clock icon"></img>
                </button>
                {props.iconsTrade?.loop ? (
                    <button className="hover-active-class">
                        <img src={props.iconsTrade.loop} alt="reload icon"></img>
                    </button>
                    ) : null }
                
            </div>
        </div>
        <h3>{props.cardSubtitle}</h3>
    </header>
    )
}

export default TradeCardHeader;