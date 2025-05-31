import { NavLink, useLocation } from "react-router-dom"
import data from "../../data/data.json"
import useScreenSize from "../../data/ScreenSize";
import lineImg from "/assets/shared/line.svg"
import "../pages.css"
import "../Destination/Destination.css"

const Destination = () => {
    const location = useLocation();
    const tabName = location.pathname.split("/").pop();
    const screenWidth = useScreenSize();
    const isMobile = screenWidth < 768;

    let index = 0;
    if (tabName == "mars") {
        index = 1;
    } else if (tabName == "europa") {
        index = 2;
    } else if (tabName == "titan") {
        index = 3;
    } else {
        index = 0;
    }

    const destination = data["destinations"][index];

    let pageTitleClass = isMobile ? 'mobile-preset-6' : 'tablet-preset-5';
    pageTitleClass = screenWidth >= 1024 ? 'desktop-preset-5' : pageTitleClass;
    const tabClassName = isMobile ? 'mobile-preset-8' : 'desktop-preset-8';
    let h1ClassName = isMobile ? 'mobile-preset-2' : 'tablet-preset-2';
    h1ClassName = screenWidth >= 1024 ? 'desktop-preset-2' : h1ClassName;
    let pClassName = isMobile ? 'mobile-preset-9' : 'tablet-preset-9';
    pClassName = screenWidth >= 1024 ? 'desktop-preset-9' : pClassName;
    const h2ClassName = 'desktop-preset-7';
    const spanClassName = 'desktop-preset-6';

    return (
        <section>
            <main className="destination-main">
                <div className={`page-title ${pageTitleClass}`}> <span aria-hidden="true"> 01 </span> PICK YOUR DESTINATION </div>
                <div className="page-content destination-content">
                    {/* Content below specific to this page */}
                    <div className="top-content">
                        <img className="destination-img" src={destination.images.png} alt="Image of a moon" />
                    </div>
                    <div className="bottom-content">
                        <div className="destination-tab">
                            <NavLink to="/destination/moon" className={({ isActive }) => `${tabClassName} ${isActive ? "active" : ""}`}><li> MOON </li></NavLink>
                            <NavLink to="/destination/mars" className={tabClassName}><li> MARS </li></NavLink>
                            <NavLink to="/destination/europa" className={tabClassName}><li> EUROPA </li></NavLink>
                            <NavLink to="/destination/titan" className={tabClassName}><li> TITAN </li></NavLink>
                        </div>
                        <div className="destination-tab-content">
                            <div className="destination-text">
                                <h1 className={h1ClassName}> {destination.name} </h1>
                                <p className={pClassName}> {destination.description} </p>
                            </div>

                            <img src={lineImg} alt="literally just a line for aesthetic purposes" aria-hidden="true" />

                            <div className="destination-data">
                                <div className="distance">
                                    <h2 className={h2ClassName}> AVG. TIME </h2>
                                    <span className={spanClassName}>{destination.distance}</span>
                                </div>
                                <div className="travel">
                                    <h2 className={h2ClassName}> EST. TRAVEL TIME </h2>
                                    <span className={spanClassName}>{destination.travel}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Content above specific to this page */}
                </div>
            </main>
        </section>
    )
}

export default Destination;