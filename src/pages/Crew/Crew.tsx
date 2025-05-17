import { NavLink, useLocation } from "react-router-dom"
import useScreenSize from "../../data/ScreenSize"
import data from "../../data/data.json"
import "../pages.css"
import "../Crew/Crew.css"

const Crew = () => {
    const location = useLocation();
    const tabName = location.pathname.split("/").pop();
    const screenWidth = useScreenSize();
    const isMobile = screenWidth < 768;

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

    let pageTitleClass = isMobile ? 'mobile-preset-6' : 'tablet-preset-5';
    pageTitleClass = screenWidth >= 1024 ? 'desktop-preset-5' : pageTitleClass;

    let h2ClassName = isMobile ? 'mobile-preset-4' : 'tablet-preset-4';
    h2ClassName = screenWidth >= 1024 ? 'desktop-preset-4' : h2ClassName;
    let h1ClassName = isMobile ? 'mobile-preset-3' : 'tablet-preset-3';
    h1ClassName = screenWidth >= 1024 ? 'desktop-preset-3' : h1ClassName;
    let pClassName = isMobile ? 'mobile-preset-9' : 'tablet-preset-9';
    pClassName = screenWidth >= 1024 ? 'desktop-preset-9' : pClassName;

    return (
        <section>
            <main>
            <div className={`page-title ${pageTitleClass}`}> <span aria-hidden="true"> 02 </span> PICK YOUR CREW </div>
                <div className="page-content">
                    {/* Content below specific to this page */}
                    <div className="top-content">
                        <div className="crew-tab-content">
                            <h2 className={h2ClassName}> {crew.role} </h2>
                            <h1 className={h1ClassName}> {crew.name} </h1>
                            <p className={pClassName}> {crew.bio} </p>
                        </div>
                        <div className="crew-tab">
                            <NavLink to="/crew/douglas" className={({ isActive }) => `${isActive ? "active" : ""}`}><span></span></NavLink>
                            <NavLink to="/crew/mark"><span></span></NavLink>
                            <NavLink to="/crew/victor"><span></span></NavLink>
                            <NavLink to="/crew/ansari"><span></span></NavLink>
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