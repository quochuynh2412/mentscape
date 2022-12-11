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

function TherapistCard(props) {
    return (
        <>
            <Card className="mb-5">
                <Card.Body>
                    <Row>
                        <Col md={4}>
                            <img src={require("../../data/avatar/images.jpeg")} className="img-fluid max mt-2" />
                        </Col>
                        <Col md={8}>
                            <div className="mt-2 row">
                                <div>
                                    <h2 className="infoSum2"><GrMapLocation /> Location: {props.location} </h2>
                                </div>
                                <div>
                                    <h2 className="infoSum2"><GrBook /> Specialized: {props.specialized} </h2>
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
                                    <button type="button" className="btn btn-book"><span className='text-nowrap'>Book Appointment</span></button>
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
