import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
export const Footer = () => {
  return (
      <Container fluid className="text-white bg-sky pt-3">
        <Container className="text-md-start mt-2">
          <Row className="mt-3">
            <Col sm={6} md={3} className="mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">
                Mentscape
              </h5>
              <p>
                Mentscape is an application focusing solely on mental healthcare services. Menscape allows people facing mental issues to connect with a variety of professional therapists easily. 
              </p>
            </Col>
            <Col sm={6} md={3} className="mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">
                About Mentscape
              </h5>
              <p><a href="../../pages/Privacy/introprivacy.php" className="text-reset">History</a></p>
              <p><a href="../../pages/Privacy/datacollect.php" className="text-reset">Administrator Team</a></p>
              <p><a href="../../pages/Privacy/personalprotect.php" className="text-reset">Our Network</a></p>
              <p><a href="../../pages/Privacy/thirdparty.php" className="text-reset">Operational Regulations</a></p>
            </Col>
            <Col sm={6} md={3} className="mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">Our policy</h5>
              <p><a href="../../pages/Privacy/paymentmethod.php" className="text-reset">Terms Of Use</a></p>
              <p><a href="../../pages/Privacy/shipping.php" className="text-reset">Data Collection</a></p>
              <p><a href="../../pages/Privacy/return.php" className="text-reset">Privacy Policy</a></p>
              <p><a href="../../pages/Privacy/international.php" className="text-reset">Frequently asked questions</a></p>
            </Col>
            <Col sm={6} md={3} className="mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">Contact Us</h5>
              <p>Location: 521 Kim Ma, Ha Noi, Viet Nam</p>
              <p>Mail: mentscape@gmail.com.vn</p>
              <p>Phone Number: +84 97382555</p>
              <div className="d-sm-flex justify-content-center pe-5">
                <FaFacebookSquare size='25' className="mx-2"/>
                <FaInstagramSquare size='25' className="mx-2"/>
                <FaTwitterSquare size='25' className="mx-2"/>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center p-2">
          <p> © 2022 Copyright: <span className="fw-bold">Group 80 - BITS Team</span></p>
        </div>
      </Container>
  )
}
