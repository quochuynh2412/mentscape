import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";
import banner from "../../assets/img/banner.jpeg"
import { firebaseLogIn } from '../../firebase/authFunc';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const onSignInClicked = async () => {
    try {
      await firebaseLogIn(
        email,
        password
      )
      navigate(`/`);

    } catch (e) {
      setErrorMessage("Incorrect username or password"); 
    }
  }

  return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={8} className="offset-md-2">
              <div className="account-content">
                <Row className="align-items-center justify-content-center">
                  <Col xs={7} lg={6}>
                    <img src={banner} className="img-fluid" alt="Menscape Login"/>
                  </Col>
                  <Col md={12} lg={6} className="info-box">
                    <h4>Login Mentscape</h4>
                    <Form>
                      <FloatingLabel label="Email address" className="mt-3">
                        <Form.Control type="email" id="floatingInput" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@gmail.com"/>
                      </FloatingLabel>
                      <FloatingLabel label="Password" className="mt-3">
                        <Form.Control type="password" id="floatingPassword" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                      </FloatingLabel>
                      <div className="text-end py-2">
                        <Link to="/" className="forgot-link text-decoration-none text-reset">Forgot Password?</Link>
                      </div>
                    <Button variant="primary" size="lg" className="login-btn w-100" onClick={onSignInClicked}>Login</Button>
                      <div className="text-center py-2 fw-bold">
                        <span>Don’t have an account? </span>
                        <Link to="/signup"> Register</Link>
                      </div>

                    {errorMessage && <h5 className="text-danger text-center">{errorMessage}</h5>}
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>		
  )
}
