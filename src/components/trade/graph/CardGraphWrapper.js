import "./style/CardGraphWrapper.scss";
function CardGraphWrapper(props) {

    return (
        <div className="card-graph-wrapper">
            {props.children}
        </div>

    )
}

export default CardGraphWrapper;