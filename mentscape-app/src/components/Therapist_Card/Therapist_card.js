import '../../css/Vinh_css.css'
import { GrMapLocation } from "react-icons/gr";
import { GrBook, GrTooltip } from "react-icons/gr";
import { GrMoney } from "react-icons/gr";

import { Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function TherapistCard(props) {
    return (
            <Col lg={6} className="gx-5 gy-3" >
                <Card>
                        <img src={props.profile_pic} className="mt-4 avatar-doctor" />
                    <Card.Body>
                        <Card.Title className='text-center'><span>Dr. </span>{props.fullname}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                                <GrMapLocation /> <span className='fw-bold'>Location: </span> {props.address}
                        </ListGroupItem>
                            <ListGroup.Item> <GrBook /> <span className='fw-bold'>Specialized: </span>{ props.specialties.map((specialty, index) =>
                                <span key={specialty}>
                                    {index > 0 && ", "}
                                    {specialty}
                                </span>)
                        } </ListGroup.Item>
                            <ListGroup.Item><GrMoney /> <span className='fw-bold'>Price: </span> 50-100$</ListGroup.Item>
                            <ListGroup.Item><GrTooltip /> <span className='fw-bold'>Description: </span> {props.description}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <button type="button" className="btn btn-view-profile"><span className='text-nowrap'>View Profile</span></button>
                        <Link className="btn btn-book"
                            to={`/booking-calendar/$id=${props.id}`}>
                            <span className='text-nowrap align-middle'>Book Appointment</span>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

    )
}
export default TherapistCard;
