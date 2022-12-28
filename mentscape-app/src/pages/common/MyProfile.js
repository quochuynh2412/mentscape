import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, Button} from "react-bootstrap";
import { firebaseSignout } from "../../firebase/authFunc";
import { getCurrentUserInfo } from "../../firebase/user";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";

export const MyProfile = () => {

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const loadUserInfo = async () => {
      const results = await getCurrentUserInfo();
      setUserInfo(results);
    }
    loadUserInfo();
  }, []);
  


  return (
    <>
    <Header />
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
                  {userInfo.email}
                  </ListGroup.Item>
                  <ListGroup.Item><label>Fullname:</label>
                  {userInfo.fullname}
                  </ListGroup.Item>
                  <ListGroup.Item><label>Age:</label>
                  {userInfo.age}
                  </ListGroup.Item>
                  <ListGroup.Item><label>Phone number:</label>
                  {userInfo.phone}
                  </ListGroup.Item>
                  <ListGroup.Item><label>Address:</label>
                  {userInfo.address}
                  </ListGroup.Item>
                  {
                    (userInfo.role === "therapist") && 
                    <>
                      <ListGroup.Item><label>Description:</label>
                        {userInfo.description}
                      </ListGroup.Item>
                    <ListGroup.Item><label>Specialities:</label>
                      {userInfo.specialties.map((specialty, index) => 
                        <span key={specialty}>
                          {index > 0 && ", "}
                          {specialty}
                        </span>)
                      }
                    </ListGroup.Item>
                    </>
                  }
                </ListGroup>
              </Col>
              <Col md={5}>
                <div className="py-2 d-flex justify-content-center">
                  <div className="profile-picture">
                    <img className="position-relative" src={userInfo.profile_pic} alt="profile" />
                  </div>
                </div>
                <div className="py-2 text-center">
                  <Button variant="secondary" onClick={firebaseSignout}>Sign out</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}
