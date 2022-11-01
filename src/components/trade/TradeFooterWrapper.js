import "./style/TradeFooterWrapper.scss";

const TradeFooterWrapper= (props) => {

    return (

            <section className="trade-footer-wrapper">
                {props.children}
            </section>

    )
}

export default TradeFooterWrapper;