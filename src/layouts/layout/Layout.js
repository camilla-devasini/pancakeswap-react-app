import Header from "../header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import CommonSubmenu from "../../components/UI/CommonSubmenu";
import { submenuItemsTrade, submenuItemsEarn, submenuItemsWin, submenuItemsNft } from "./../../components/helpers/menuItemsObj";
import { useEffect } from "react";


function Layout() {

    
    const location = useLocation();
    const currentPath = location.pathname;
    
    useEffect( () => {
        console.log(currentPath);
    },[location])
    
    
    return (
        <div>
            <Header />
            {currentPath === "/Swap" || currentPath === "/Limit" || currentPath === "/Liquidity" ?
                <CommonSubmenu submenuItems={submenuItemsTrade} /> :
                null
            }
            
            {currentPath === "/Farms" || currentPath === "/Pools" ?
                <CommonSubmenu submenuItems={submenuItemsEarn} /> :
                null
            }

            {currentPath === "/Prediction" || currentPath === "/Trading-competition" || currentPath === "/Lottery" ?
                <CommonSubmenu submenuItems={submenuItemsWin} /> :
                null
            } 

            {currentPath === "/Overview" || currentPath === "/Collections" || currentPath === "/Activity" ?
                <CommonSubmenu submenuItems={submenuItemsNft} /> :
                null
            }     

    
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;