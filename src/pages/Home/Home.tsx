import { NavLink } from "react-router-dom"
import "../pages.css"

const Home = () => {
    return (
        <>
            <section>
                <main>
                    <div className="text-container">
                        <h2 className="mobile-preset-6"> So, you want to travel to </h2>
                        <h1 className="mobile-preset-1"> SPACE </h1>
                        <p className="mobile-preset-9">Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world experience! </p>
                    </div>
                    <div className="button-container">
                        <NavLink to="/destination">
                            <button className="explore-btn mobile-preset-4">Explore</button>
                        </NavLink>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Home;