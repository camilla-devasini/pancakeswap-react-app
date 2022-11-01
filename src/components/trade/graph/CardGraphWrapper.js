import "./style/CardGraphWrapper.scss";
function CardGraphWrapper(props) {

    return (
        <div className="card-graph-container">
            {props.children}
        </div>

    )
}

export default CardGraphWrapper;