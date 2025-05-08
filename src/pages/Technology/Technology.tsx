import { NavLink, useLocation } from "react-router-dom"
import data from "../../data/data.json"
import "../pages.css"
import "../Technology/Technology.css"

const Crew = () => {
    const location = useLocation();
    const tabName = location.pathname.split("/").pop();

    let index = 0;
    if (tabName == "spaceport") {
        index = 1;
    } else if (tabName == "capsule") {
        index = 2;
    } else {
        index = 0;
    }

    const technology = data["technology"][index];

    return (
        <section>
            <main>
                <div className="page-title mobile-preset-6"> <span aria-hidden="true"> 03 </span> SPACE LAUNCH 101 </div>
                <div className="page-content">
                    {/* Content below specific to this page */}
                    <div className="top-content">
                        <img className="technology-img" src={technology.images.landscape} alt="Image of your crewmates" />
                    </div>
                    <div className="bottom-content">
                        <div className="technology-tab">
                            <NavLink to="/technology/launch" className={({ isActive }) => `mobile-preset-4 ${isActive ? "active" : ""}`}><span>1</span></NavLink>
                            <NavLink to="/technology/spaceport" className="mobile-preset-4"><span>2</span></NavLink>
                            <NavLink to="/technology/capsule" className="mobile-preset-4"><span>3</span></NavLink>
                        </div>
                        <div className="technology-tab-content">
                            <h2 className="mobile-preset-4"> THE TERMINOLOGY... </h2>
                            <h1 className="mobile-preset-3"> {technology.name} </h1>
                            <p className="mobile-preset-9"> {technology.description} </p>
                        </div>
                    </div>
                    {/* Content above specific to this page */}
                </div>
            </main>
        </section>
    )
}

export default Crew;