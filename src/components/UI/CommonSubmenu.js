import "./style/CommonSubmenu.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
const CommonSubmenu = (props) => {

    const [selectIndex, setSelectIndex] = useState(null);
    
    const highlightHandler = (index) => {
        setSelectIndex(index);
    
    }

    return (
        <div className="common-navbar-wrapper">
            <ul className="common-navbar">
                {props.submenuItems && props.submenuItems.map((item, index) => 
                    ( 
                        <li onClick={() => highlightHandler(index)} 
                            className={selectIndex === index ? "single-common-navbar link-highlighted" : "single-common-navbar"}
                            key={index}
                        ><Link className="submenu-links" to={`/${item}`}>{item}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )       

}

export default CommonSubmenu;

