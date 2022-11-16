
import "./style/TradeCardWrapper.scss";


const TradeCardWrapper= (props) => {
    const wrapperClasses= 'trade-card-wrapper ' + props.className;

    return (
            <section className={wrapperClasses}>
                {props.children}
            </section>

    )
}

export default TradeCardWrapper;