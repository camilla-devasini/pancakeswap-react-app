import Header from "../header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
    
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;