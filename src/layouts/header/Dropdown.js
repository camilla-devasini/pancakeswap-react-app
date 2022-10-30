import "./style/Dropdown.scss";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
const externalLink = "https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=light"
//conditional rendering qualora non ci sia il link interno ma quella label rimandi ad una risorsa 
// esterna, come avviene per "Perpetual"

    return (
        <ul className={`dropdown ${props.dropdown ? "show" : ""}`}>
            {props.submenuLabels.map((submenu, index) => (
                <li key={index} className="dropdown-item">
                    {submenu.url ? 
                        <Link to={submenu.url}>{submenu.title}</Link> :
                        <a href={externalLink}>{submenu.title}</a>} 
                   
                </li>
        ))}
        </ul>
    )
}

export default Dropdown;