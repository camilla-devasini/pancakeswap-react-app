import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

function Layout() {
    
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;