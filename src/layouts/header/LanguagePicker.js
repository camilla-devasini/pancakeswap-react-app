import React, { useState, useEffect, useRef } from "react";
import LanguageDropdown from "./LanguageDropdown";
import "./style/LanguagePicker.scss";
import langIcon from "../../assets/images/language-button.svg";

const LanguagePicker = (props) => {

    const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
    const dropDownHandler = () => {
        setDropdownIsVisible((prevState) => 
            !prevState)
    }


    //close the dropdown when clicking outside of it
    let menuRef = useRef();
    useEffect(() => {
        const clickOutsideHandler = (event) => {
            if (LanguageDropdown && menuRef.current && !menuRef.current.contains(event.target)) {
                setDropdownIsVisible(false);
            }
        }
        document.addEventListener("click", clickOutsideHandler);

        return () => {
            document.removeEventListener("click", clickOutsideHandler)
        }
    }, [LanguageDropdown]);



    return (
        <div className="languages-wrapper">
            <div className="languages-btn hover-active-class" ref={menuRef} onClick={dropDownHandler}>
                <img src={langIcon}></img>
            </div>
            <LanguageDropdown langList={props.langList} languages={dropdownIsVisible}  />
            
        </div>

    )
}

export default LanguagePicker;