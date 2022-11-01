
import "./style/TradeCardWrapper.scss";

const TradeCardWrapper= (props) => {

    return (

            <section className="trade-card-wrapper">
                {props.children}
            </section>

    )
}

export default TradeCardWrapper;