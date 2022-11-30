import { Link } from "react-router-dom";
import banner from "../../assets/img/banner.jpeg"
import { Container, Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";

export const LogIn = () => {
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
                      <FloatingLabel controlId="floatingInput" label="Email address" className="mt-3">
                        <Form.Control type="email" id="floatingInput" placeholder="example@gmail.com"/>
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingPassword" label="Password" className="mt-3">
                        <Form.Control type="password" id="floatingPassword" placeholder="Password"/>
                      </FloatingLabel>
                      <div className="text-end py-2">
                        <Link to="/" className="forgot-link text-decoration-none text-reset">Forgot Password?</Link>
                      </div>
                      <Button variant="primary" size="lg" className="login-btn w-100" type="submit">Login</Button>
                      <div className="text-center py-2 fw-bold">
                        <span>Don’t have an account? </span>
                        <Link to="/signup"> Register</Link>
                      </div>
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
