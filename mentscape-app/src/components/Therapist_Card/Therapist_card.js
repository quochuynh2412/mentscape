// import stockData from '../../data/therapist.json';
// import ava from "/Users/dinhvinh/Documents/GitHub/mentscape/mentscape-app/src/data/avatar/download.jpeg";
// import ava2 from "/Users/dinhvinh/Documents/GitHub/mentscape/mentscape-app/src/data/avatar/download (1).jpeg";
// import ava3 from "/Users/dinhvinh/Documents/GitHub/mentscape/mentscape-app/src/data/avatar/images.jpeg";
import '../../css/Vinh_css.css'
import { GrMapLocation } from "react-icons/gr";
import { GrBook } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import { GrMoney } from "react-icons/gr";
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function TherapistCard(props) {
    return (
        <>
            <Card className="mb-5">
                <Card.Body>
                    <Row>
                        <Col md={4}>
                            <img src={props.profile_pic} className="mt-2 avatar-doctor" />
                        </Col>
                        <Col md={8}>
                            <div className="mt-2 row">
                                <div>
                                    <h2 className="infoSum2">{props.fullname} </h2>
                                </div>
                                <div>
                                    <h2 className="infoSum2"><GrMapLocation /> Location: {props.address} </h2>
                                </div>
                                <div>
                                    <h2 className="infoSum2"><GrBook /> Specialized:</h2>
                                </div>
                                <div>
                                    <h2 className="infoSum2"><GrMoney /> Price:50-100$</h2>
                                </div>
                                <div className="verified">
                                    <h2 className="">Verified</h2>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="d-flex flex-row ms-auto justify-content-end">
                                    <button type="button" className="btn btn-view-profile"><span className='text-nowrap'>View Profile</span></button>
                                    <Link className="btn btn-book"
                                        to={`/booking-calendar/$id=${props.id}`}>
                                        <span className='text-nowrap align-middle'>Book Appointment</span>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>

    )
}
export default TherapistCard;
