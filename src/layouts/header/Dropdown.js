import "./style/Dropdown.scss";

const Dropdown = (props) => {

    return (
        <ul className={`dropdown ${props.dropdown ? "show" : ""}`}>
            {props.submenuLabels.map((submenu, index) => (
                <li key={index} className="dropdown-item">
                    <a href={submenu.url}>{submenu.title}</a>
                </li>
        ))}
        </ul>
    )
}

export default Dropdown;