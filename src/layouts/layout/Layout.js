import Header from "../header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import CommonSubmenu from "../../components/UI/CommonSubmenu";
import { submenuItemsTrade, submenuItemsEarn, submenuItemsWin, submenuItemsNft } from "./../../components/helpers/menuItemsObj";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";


function Layout() {
    
    const location = useLocation();
    const currentPath = location.pathname;
    
    useEffect( () => {
        console.log(currentPath);
    },[location])
    
  //tema chiaro o scuro a seconda del dato salvato in localstorage sulla base
  // delle preferenze che sta già usando l'utente nel browser --> "theme", "light" oppure "theme", "dark",
  //usate come default.
  const defaultDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const [theme, setTheme] = useLocalStorage("theme", defaultDarkTheme ? 'dark' : 'light');

  //tema chiaro o scuro tramite click sul button:
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
      
  }

    
    return (
        <div data-theme={theme}>
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
            <div/>
    
            <div>
                <Outlet />
            </div>
            <Footer switchTheme={switchTheme} />
        </div>
    )
}

export default Layout;