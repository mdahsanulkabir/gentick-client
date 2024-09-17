import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
// import styles from './Layout.module.css'

const Layout = () => {
    return (
        <div className="layout">
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;