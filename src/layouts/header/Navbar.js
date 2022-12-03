import { Fragment } from "react";
import { menuItemsObj } from "../../components/helpers/menuItemsObj";
import MenuItems from "./MenuItems";
import "./style/Navbar.scss";

const Navbar = () => {

    return (
        <Fragment>
            <ul className="navbar">
                {menuItemsObj.map((menu, index) => 
                        <MenuItems items={menu} key={index}/>
                )}
            </ul>
        </Fragment>
    )
}
export default Navbar;