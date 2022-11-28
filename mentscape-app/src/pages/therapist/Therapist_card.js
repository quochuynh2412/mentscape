// import stockData from '../../data/therapist.json';
// import ava from "/Users/dinhvinh/Documents/GitHub/mentscape/mentscape-app/src/data/avatar/download.jpeg";
// import ava2 from "/Users/dinhvinh/Documents/GitHub/mentscape/mentscape-app/src/data/avatar/download (1).jpeg";
// import ava3 from "/Users/dinhvinh/Documents/GitHub/mentscape/mentscape-app/src/data/avatar/images.jpeg";
import "../../css/Vinh_css.css";
function TherapistCard(props) {
    return (
        <>
        <div class="container border mt-5 cardBg">
            <img src={require("../../data/avatar/images.jpeg")} class="avatar"/>
            <div className='row '>
                <div className="col">
                    <img src={props.avatar}/>
                    <h1>{props.id} {props.first_name} {props.last_name} </h1>
                </div>
                <div class="col float-left">
                    <div class="mt-2">
                        <div>
                            <h2>Location: {props.location} </h2>
                        </div>
                        <div>
                            <h2>Specialized: {props.specialized} </h2>
                        </div>
                        <div class="verified">
                            <h2>Verified</h2>
                        </div>
                    </div>
                    <div class="row mt-2 me-2">
                        <button type="button" class="btn btn-secondary">View Profile</button>
                    </div>
                    <div class="row mt-2 me-2">
                        <button type="button" class="btn btn-secondary">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}
export default TherapistCard;
