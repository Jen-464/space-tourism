import { NavLink, Outlet } from "react-router-dom"
import logo from "../assets/shared/logo.svg"
import line from "../assets/shared/line.svg"
import "./Nav.css"

const Nav = () => {
    return (
        <>
            <header>
                <div>
                    <img src={logo} alt="space tourism star logo in white circle" />
                    <img src={line} alt="literally just a line for aesthetic purposes" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className="barlow-condensed-8"> <span>00</span> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/destination" className="barlow-condensed-8"> <span>01</span> Destination </NavLink>
                        </li>
                        <li>
                            <NavLink to="/crew" className="barlow-condensed-8">  <span>02</span> Crew </NavLink>
                        </li>
                        <li>
                            <NavLink to="/technology" className="barlow-condensed-8"> <span>03</span> Technology </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Nav;