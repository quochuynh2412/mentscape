import Overview from "./detail/Overview";
import Location from "./detail/Location";
import Review from "./detail/Review";
import Contact from "./detail/Contact";

function Detail() {
    return (
    <div>
        <div class="container border mt-5 cardBg">
            <div className='row '>
                <div className="col">
                    <img src={require("../../data/avatar/images.jpeg")} class="avatar"/>
                    <h1>Dr. Vinh Dinh </h1>
                </div>
                <div class="col float-left">
                    <div class="mt-2">
                        <div>
                            <h2 class="infoSum">Location: Quang Ninh </h2>
                        </div>
                        <div>
                            <h2 class="infoSum">Specialize: Depression </h2>
                        </div>
                        <div>
                            <h2 class="infoSum">Business hour: 6AM to 7PM</h2>
                        </div>
                        <div>
                            <h2 class="infoSum">Rating: 96%</h2>
                        </div>
                        <div>
                            <h2 class="infoSum">Price: 50-100$</h2>
                        </div>
                    </div>
                    <div class="row mt-5 me-2">
                        <button type="button" class="btn btn-primary">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container border mt-5 cardBg">
            <div className="row">
            <div>
                <div class="row border">
                    <div class="col">
                        <a href="#overview" class="link-info infoLink">Overview</a>
                    </div>
                    <div class="col">
                        <a href="#location" class="link-info infoLink">Location</a>
                    </div>
                    <div class="col">
                        <a href="#Review" class="link-info infoLink">Review</a>
                    </div>
                    <div class="col">
                        <a href="#Contact" class="link-info infoLink">Contact information</a>
                    </div>
                </div>
                <div class="detail mt-3">
                    <div id="overview" class="detail"><Overview/></div>
                    <div id="location" class="detail"><Location/></div>
                    <div id="Review" class="detail"><Review/></div>
                    <div id="Contact" class="detail"><Contact/></div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Detail;