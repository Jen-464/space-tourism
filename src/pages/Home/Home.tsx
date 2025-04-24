import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react';
import "../pages.css"
import "../Home/Home.css"

const Home = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    let h2ClassName = 'mobile-preset-6';
    let h1ClassName = 'mobile-preset-1';
    let pClassName = 'mobile-preset-9';
    let btnClassName = 'mobile-preset-4';
    
    if (screenWidth < 768) {
        h2ClassName = 'mobile-preset-6';
        h1ClassName = 'mobile-preset-1';
        pClassName = 'mobile-preset-9';
        btnClassName = 'mobile-preset-4';
    } else {
        h2ClassName = 'desktop-preset-5';
        h1ClassName = 'desktop-preset-1';
        pClassName = 'tablet-preset-9';
        btnClassName = 'desktop-preset-4';
    } 

    return (
        <>
            <section>
                <main>
                    <div className="text-container">
                        <h2 className={`${h2ClassName} space-subtitle`}> So, you want to travel to </h2>
                        <h1 className={h1ClassName}> SPACE </h1>
                        <p className={`${pClassName} space-paragraph`}>Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world experience! </p>
                    </div>
                    <div className="button-container">
                        <NavLink to="/destination">
                            <button className={`${btnClassName} explore-btn`}>Explore</button>
                        </NavLink>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Home;