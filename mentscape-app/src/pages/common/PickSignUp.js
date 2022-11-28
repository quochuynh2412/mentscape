import patient_pic from "../../assets/img/patient.jpeg"
import therapist_pic from "../../assets/img/therapist.jpeg"
import { Link } from "react-router-dom";
import {Card, Container, Row, Col} from 'react-bootstrap';

export const PickSignUp = () => {
  return (
    <div className="content">
        <Container>
            <h2 className="text-center mb-4">Register as ...</h2>
            <Row className="g-5">
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={patient_pic} />
                        <Card.Body>
                            <Card.Title>Customer</Card.Title>
                            <Card.Text>
                                Anyone feels insecure and needs someone to talk with
                            </Card.Text>
                            <Link to="/signup/patient" className="btn btn-primary">Register as customer</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={therapist_pic} />
                        <Card.Body>
                            <Card.Title>Therapist</Card.Title>
                            <Card.Text>
                                Professional therapists want to join our team
                            </Card.Text>
                            <Link to="/signup/therapist" className="btn btn-primary">Register as therapist</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>

  )
}
