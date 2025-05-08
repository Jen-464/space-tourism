import { NavLink, useLocation } from "react-router-dom"
import data from "../../data/data.json"
// import lineImg from "/assets/shared/line.svg"
import "../pages.css"
import "../Crew/Crew.css"

const Crew = () => {
    const location = useLocation();
    const tabName = location.pathname.split("/").pop();

    let index = 0;
    if (tabName == "mark") {
        index = 1;
    } else if (tabName == "victor") {
        index = 2;
    } else if (tabName == "ansari") {
        index = 3;
    } else {
        index = 0;
    }

    const crew = data["crew"][index];

    return (
        <section>
            <main>
                <div className="page-title mobile-preset-6"> <span aria-hidden="true"> 02 </span> PICK YOUR CREW </div>
                <div className="page-content">
                    {/* Content below specific to this page */}
                    <div className="top-content">
                        <div className="crew-tab-content">
                            <h2 className="mobile-preset-4"> {crew.role} </h2>
                            <h1 className="mobile-preset-3"> {crew.name} </h1>
                            <p className="mobile-preset-9"> {crew.bio} </p>
                        </div>
                        <div className="crew-tab">
                            <NavLink to="/crew/douglas" className={({ isActive }) => `mobile-preset-8 ${isActive ? "active" : ""}`}><span></span></NavLink>
                            <NavLink to="/crew/mark" className="mobile-preset-8"><span></span></NavLink>
                            <NavLink to="/crew/victor" className="mobile-preset-8"><span></span></NavLink>
                            <NavLink to="/crew/ansari" className="mobile-preset-8"><span></span></NavLink>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <img className="crew-img" src={crew.images.png} alt="Image of your crewmates" />
                    </div>
                    {/* Content above specific to this page */}
                </div>
            </main>
        </section>
    )
}

export default Crew;