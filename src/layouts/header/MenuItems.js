
import React, { useState, useEffect, useRef } from "react";
import "./style/MenuItems.scss";
import Dropdown from "./Dropdown";


const MenuItems = (props) => {
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
        <li className="menu-items" ref={menuRef}>
            {props.items && 
            <div>
                <div onClick={dropDownHandler}>{props.items.title}</div>
                <Dropdown submenuLabels={props.items.submenu} dropdown={dropdownIsVisible}/>
            </div>
            }
        </li>

    )
}

export default MenuItems;
