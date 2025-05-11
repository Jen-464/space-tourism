import { NavLink } from "react-router-dom";
import ScreenSize from "../../data/ScreenSize";
import "../pages.css"
import "../Home/Home.css"

const Home = () => {
    const screenWidth = ScreenSize();
    const isMobile = screenWidth < 768;

    const h2ClassName = isMobile ? 'mobile-preset-6' : 'desktop-preset-5';
    const h1ClassName = isMobile ? 'mobile-preset-1' : 'desktop-preset-1';
    let pClassName = isMobile ? 'mobile-preset-9' : 'tablet-preset-9';
    pClassName = screenWidth >= 1024 ? 'desktop-preset-9' : pClassName;
    const btnClassName = isMobile ? 'mobile-preset-4' : 'desktop-preset-4';

    return (
        <>
            <section>
                <main className="home-main">
                    <div className="text-container">
                        <h2 className={`${h2ClassName} space-subtitle`}> So, you want to travel to </h2>
                        <h1 className={h1ClassName}> SPACE </h1>
                        <p className={`${pClassName} space-paragraph`}>Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world experience! </p>
                    </div>
                    <div className="button-container">
                        <NavLink to="destination">
                            <button className={`${btnClassName} explore-btn`}>Explore</button>
                        </NavLink>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Home;