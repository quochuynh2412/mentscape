import { Link } from "react-router-dom";
import profile_pic from "../../assets/img/profile.jpeg";
import patient from "../../data/patient.json";
import { Container, Row, Col, ListGroup, Button} from "react-bootstrap";
import { firebaseSignout } from "../../firebase/authFunc";

export const MyProfile = () => {
  return (
      <div className="content">
        <Container>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">My profile</li>
          </ol>
        </Container>
        <Container>
          <h1 className="text-center"> My account</h1>
        </Container>
        <Container>
          <div className="mt-3 info-box">
            <Row className="py-4">
              <Col md={7}>
                <ListGroup variant="flush" className="info-list">
                  <ListGroup.Item><label>Email address:</label>
                    {patient.email}
                  </ListGroup.Item>
                  <ListGroup.Item><label>Fullname:</label>
                    {patient.name}
                  </ListGroup.Item>
                  <ListGroup.Item><label>Age:</label>
                    {patient.age}
                  </ListGroup.Item>
                  <ListGroup.Item><label>Phone number:</label>
                    {patient.phone}
                  </ListGroup.Item>
                  <ListGroup.Item><label>Address:</label>
                    {patient.address}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={5}>
                <div className="py-2 d-flex justify-content-center">
                  <div className="profile-picture">
                    <img className="position-relative" src={profile_pic} alt="profile" />
                  </div>
                </div>
                <div className="py-2 text-center">
                  <Button variant="secondary"className="" onClick={firebaseSignout}>Sign out</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

  )
}
