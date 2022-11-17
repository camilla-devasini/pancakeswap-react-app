import { menuItemsObj } from "../../components/helpers/menuItemsObj";
import MenuItemsMobile from "./MenuItemsMobile";
import "./style/Navbar.scss";

const NavbarMobile = () => {

    return (
        <div className="nav-mobile-wrap">
            <ul className="navbar">
                {menuItemsObj.map((menu, index) => 
                        <MenuItemsMobile items={menu} key={index}/>
                )}
            </ul>
 
          
        </div>
    )
}

export default NavbarMobile;