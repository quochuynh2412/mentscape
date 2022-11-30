import Overview from "./detail/Overview";
import Location from "./detail/Location";
import Review from "./detail/Review";
import Contact from "./detail/Contact";
import { GrMapLocation } from "react-icons/gr";
import { GrBook } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import { GrAlarm } from "react-icons/gr";
import { GrLike } from "react-icons/gr";
import { GrMoney } from "react-icons/gr";

function Detail() {
    return (
        <div class="bgColor">
            <div class="container border mt-5 cardBg shadow ">
                <div className='row '>
                    <div className="col">
                        <img src={require("../../data/avatar/images.jpeg")} class="img-fluid max border border-3 mt-2" />
                        <h1>Dr. Vinh Dinh </h1>
                    </div>
                    <div class="col float-left">
                        <div class="mt-2">
                            <div>
                                <h2 class="infoSum"> <GrMapLocation /> Location: Quang Ninh </h2>
                            </div>
                            <div>
                                <h2 class="infoSum"><GrBook /> Specialize: Depression </h2>
                            </div>
                            <div>
                                <h2 class="infoSum"><GrAlarm /> Business hour: 6AM to 7PM</h2>
                            </div>
                            <div>
                                <h2 class="infoSum"><GrLike /> Rating: 96%</h2>
                            </div>
                            <div>
                                <h2 class="infoSum"><GrMoney /> Price: 50-100$</h2>
                            </div>
                        </div>
                        <div class="row mt-5 me-2">
                            <button type="button" class="btnBook">Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container border mt-5 cardBg shadow">
                <div className="row ">
                    <div>
                        <div class="row border bgBlue">
                            <div class="col">
                                <a href="#overview" class="infoLink">Overview</a>
                            </div>
                            <div class="col">
                                <a href="#location" class=" infoLink">Location</a>
                            </div>
                            <div class="col">
                                <a href="#Review" class="infoLink">Review</a>
                            </div>
                            <div class="col">
                                <a href="#Contact" class=" infoLink">Contact information</a>
                            </div>
                        </div>
                        <div class="detail mt-3">
                            <div id="overview" class="detail"><Overview /></div>
                            <div id="location" class="detail"><Location /></div>
                            <div id="Review" class="detail"><Review /></div>
                            <div id="Contact" class="detail"><Contact /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;