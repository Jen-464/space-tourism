import moonImg from "/assets/destination/image-moon.png"
import "../pages.css"
import "../Destination/Destination.css"

const Destination = () => {
    return ( 
        <section className="subpage-sections">
            <main>
                <div className="page-title"> <span aria-hidden="true"> 01 </span> PICK YOUR DESTINATION </div>
                <div className="page-content">
                    <div className="top-content">
                        <img src={moonImg} alt="Image of a moon" />
                    </div>
                    <div className="bottom-content">hallo</div>
                </div>
            </main>
        </section>
    )
}

export default Destination;