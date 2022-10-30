import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style/MenuItemsMobile.scss";
import Dropdown from "./Dropdown";


const MenuItemsMobile = (props) => {
    //toggle dropdown shown and hidden
    const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
    const dropDownHandler = () => {
        setDropdownIsVisible((prevState) => 
            !prevState)
    }


    //close the dropdown when clicking outside of it
    let menuRef = useRef();
    useEffect(() => {
        const clickOutsideHandler = (event) => {
            if (Dropdown && menuRef.current && !menuRef.current.contains(event.target)) {
                setDropdownIsVisible(false);
            }
        }
        document.addEventListener("click", clickOutsideHandler);

        return () => {
            //clean up function
            document.removeEventListener("click", clickOutsideHandler)
        }
    }, [Dropdown]);


    return (
        <li className="menu-items-mobile-wrap" ref={menuRef}>
            {props.items && 
            <div>
                <div className="menu-item-mobile" onClick={dropDownHandler}>
                       
                            
                                <Link to={props.items.url}>
                                <div className="text-icons-mobile-menu">
                                <div>
                                    {props.items.img ? <img src={props.items.img}></img> : null}
                                </div>
                                <div>
                                    <span>{props.items.title}</span>
                                </div>
                                </div>
                                </Link>
                            
                     
                </div>
                <Dropdown submenuLabels={props.items.submenu} dropdown={dropdownIsVisible}/>
            </div>
            }
        </li>

    )
}

export default MenuItemsMobile;
