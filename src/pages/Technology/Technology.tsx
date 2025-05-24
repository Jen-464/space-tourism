import { NavLink, useLocation } from "react-router-dom"
import useScreenSize from "../../data/ScreenSize"
import data from "../../data/data.json"
import "../pages.css"
import "../Technology/Technology.css"

const Crew = () => {
    const location = useLocation();
    const tabName = location.pathname.split("/").pop();
    const screenWidth = useScreenSize();
    const isMobile = screenWidth < 768;

    let index = 0;
    if (tabName == "spaceport") {
        index = 1;
    } else if (tabName == "capsule") {
        index = 2;
    } else {
        index = 0;
    }

    const technology = data["technology"][index];

    let pageTitleClass = isMobile ? 'mobile-preset-6' : 'tablet-preset-5';
    pageTitleClass = screenWidth >= 1024 ? 'desktop-preset-5' : pageTitleClass;
    let tabClassName = isMobile ? 'mobile-preset-4' : 'tablet-preset-4';
    tabClassName = screenWidth >= 1024 ? 'desktop-preset-4' : tabClassName;
    console.log(tabClassName)
    let h1ClassName = isMobile ? 'mobile-preset-3' : 'tablet-preset-3';
    h1ClassName = screenWidth >= 1024 ? 'desktop-preset-3' : h1ClassName;
    let pClassName = isMobile ? 'mobile-preset-9' : 'tablet-preset-9';
    pClassName = screenWidth >= 1024 ? 'desktop-preset-9' : pClassName;
    const imageClassName = screenWidth <= 768 ? technology.images.landscape : technology.images.portrait;


    return (
        <section>
            <main>
                <div className={`page-title ${pageTitleClass}`}> <span aria-hidden="true"> 03 </span> SPACE LAUNCH 101 </div>
                <div className="page-content">
                    {/* Content below specific to this page */}
                    <div className="top-content">
                        <div className="technology-img">
                            <img src={imageClassName} alt="Image of your crewmates" />
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="technology-tab">
                            <NavLink to="/technology/launch" className={({ isActive }) => `${tabClassName} ${isActive ? "active" : ""}`}><span>1</span></NavLink>
                            <NavLink to="/technology/spaceport" className={tabClassName}><span>2</span></NavLink>
                            <NavLink to="/technology/capsule" className={tabClassName}><span>3</span></NavLink>
                        </div>
                        <div className="technology-tab-content">
                            <h2 className={tabClassName}> THE TERMINOLOGY... </h2>
                            <h1 className={h1ClassName}> {technology.name} </h1>
                            <p className={pClassName}> {technology.description} </p>
                        </div>
                    </div>
                    {/* Content above specific to this page */}
                </div>
            </main>
        </section>
    )
}

export default Crew;