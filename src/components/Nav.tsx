import { NavLink, Outlet } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/shared/logo.svg"
import line from "../assets/shared/line.svg"
import "./Nav.css"

const Nav = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(prev => !prev);
    };

    return (
        <>
            <header>
                <div>
                    <img src={logo} alt="space tourism star logo in white circle" />
                    <img src={line} alt="literally just a line for aesthetic purposes" />
                </div>
                <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={isNavVisible} onClick={toggleNav}>
                    <span className="sr-only">Menu</span>
                </button>
                <nav className={isNavVisible ? "nav-visible" : "nav-hidden"}>
                    <ul id="primary-navigation">
                        <NavLink to="/" className={({ isActive }) => `barlow-condensed-8 ${isActive ? "active" : ""}`}><li> <span aria-hidden="true"> 00 </span> HOME </li></NavLink>
                        <NavLink to="/destination" className="barlow-condensed-8"><li> <span aria-hidden="true"> 01 </span> DESTINATION </li></NavLink>
                        <NavLink to="/crew" className="barlow-condensed-8"><li> <span aria-hidden="true"> 02 </span> CREW </li></NavLink>
                        <NavLink to="/technology" className="barlow-condensed-8"><li> <span aria-hidden="true"> 03 </span> TECHNOLOGY</li></NavLink>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Nav;