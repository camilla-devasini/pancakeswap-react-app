import "./style/GraphOrderContainer.scss";
function GraphOrderContainer(props) {

    return (
        <div className="graph-order-container">
            {props.children}
        </div>

    )
}

export default GraphOrderContainer;
