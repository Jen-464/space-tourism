import { NavLink, useLocation } from "react-router-dom"
import data from "../../data/data.json"
import lineImg from "/assets/shared/line.svg"
import "../pages.css"
import "../Destination/Destination.css"

const Destination = () => {
    const location = useLocation();
    const tabName = location.pathname.split("/").pop();
    const currentTab = tabName === "destination" ? "moon" : tabName;

    let index = 0;
    if (currentTab == "mars") {
        index = 1;
    } else if (currentTab == "europa") {
        index = 2;
    } else if (currentTab == "titan") {
        index = 3;
    } else {
        index = 0;
    }

    const destination = data["destinations"][index];
    console.log(location);

    return (
        <section>
            <main>
                <div className="page-title mobile-preset-6"> <span aria-hidden="true"> 01 </span> PICK YOUR DESTINATION </div>
                <div className="page-content">
                    {/* Content below specific to this page */}
                    <div className="top-content">
                        <img src={destination.images.png} alt="Image of a moon" />
                    </div>
                    <div className="bottom-content">
                        <div className="destination-tab">
                            <NavLink to="/destination/moon" className={({ isActive }) => `mobile-preset-8 ${isActive ? "active" : ""}`}><li> MOON </li></NavLink>
                            <NavLink to="/destination/mars" className="mobile-preset-8"><li> MARS </li></NavLink>
                            <NavLink to="/destination/europa" className="mobile-preset-8"><li> EUROPA </li></NavLink>
                            <NavLink to="/destination/titan" className="mobile-preset-8"><li> TITAN </li></NavLink>
                        </div>
                        <div className="destination-tab-content">
                            <div className="destination-text">
                                <h1 className="mobile-preset-2"> {destination.name} </h1>
                                <p className="mobile-preset-9"> {destination.description} </p>
                            </div>

                            <img src={lineImg} alt="literally just a line for aesthetic purposes"/>

                            <div className="destination-data">
                                <div className="distance">
                                    <h2 className="desktop-preset-7"> AVG. TIME </h2>
                                    <span className="desktop-preset-6">{destination.distance}</span>
                                </div>
                                <div className="travel">
                                    <h2 className="desktop-preset-7"> EST. TRAVEL TIME </h2>
                                    <span className="desktop-preset-6">{destination.travel}</span>
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