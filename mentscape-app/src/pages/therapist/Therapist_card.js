// import stockData from '../../data/therapist.json';
// import ava from "/Users/dinhvinh/Documents/GitHub/mentscape/mentscape-app/src/data/avatar/download.jpeg";
// import ava2 from "/Users/dinhvinh/Documents/GitHub/mentscape/mentscape-app/src/data/avatar/download (1).jpeg";
// import ava3 from "/Users/dinhvinh/Documents/GitHub/mentscape/mentscape-app/src/data/avatar/images.jpeg";
import "../../css/Vinh_css.css";
import { GrMapLocation } from "react-icons/gr";
import { GrBook } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import { GrMoney } from "react-icons/gr";

function TherapistCard(props) {
    return (
        <>
            <div class="container border border-3 mt-5 cardBg shadow ">

                <div className='row'>
                    <div className="col">
                        <img src={require("../../data/avatar/images.jpeg")} class="img-fluid max border border-3 mt-2" />
                        {/* <img src={props.avatar}/> */}
                        <h1>{props.id} {props.first_name} {props.last_name}</h1>
                        <h2 class="education"><GrCertificate /> {props.education}</h2>
                    </div>
                    <div class="col float-left">
                        <div class="mt-2 row">
                            <div>
                                <h2 class="infoSum2"><GrMapLocation /> Location: {props.location} </h2>
                            </div>
                            <div>
                                <h2 class="infoSum2"><GrBook /> Specialized: {props.specialized} </h2>
                            </div>
                            <div>
                                <h2 class="infoSum2"><GrMoney /> Price:50-100$</h2>
                            </div>
                            <div class="verified">
                                <h2 class="">Verified</h2>
                            </div>
                        </div>
                        <div class="mt-5">
                            <div class="row mt-2 me-2">
                                <button type="button" class="btnView">View Profile</button>
                            </div>
                            <div class="row mt-2 me-2">
                                <button type="button" class="btnBook">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default TherapistCard;
