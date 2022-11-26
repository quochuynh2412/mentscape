
// import '../css/style.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

export const Footer = () => {
  return (
      <div className="text-lg-start text-white bg-sky pt-3">
        <div className="container text-md-start mt-2">
          <div className="row mt-3">
            <div className="col-md-3 col-sm-6 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">
                Mentscape
              </h5>
              <p>
                Mentscape is an application focusing solely on mental healthcare services. Menscape allows people facing mental issues to connect with a variety of professional therapists easily. 
              </p>
            </div>
            <div className="col-md-3 col-sm-6 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">
                About Mentscape
              </h5>
              <p><a href="../../pages/Privacy/introprivacy.php" className="text-reset">History</a></p>
              <p><a href="../../pages/Privacy/datacollect.php" className="text-reset">Administrator Team</a></p>
              <p><a href="../../pages/Privacy/personalprotect.php" className="text-reset">Our Network</a></p>
              <p><a href="../../pages/Privacy/thirdparty.php" className="text-reset">Operational Regulations</a></p>
            </div>
            <div className="col-md-3 col-sm-6 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">Our policy</h5>
              <p><a href="../../pages/Privacy/paymentmethod.php" className="text-reset">Terms Of Use</a></p>
              <p><a href="../../pages/Privacy/shipping.php" className="text-reset">Data Collection</a></p>
              <p><a href="../../pages/Privacy/return.php" className="text-reset">Privacy Policy</a></p>
              <p><a href="../../pages/Privacy/international.php" className="text-reset">Frequently asked questions</a></p>
            </div>
            <div className="col-md-3 col-sm-6 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">Contact Us</h5>
              <p>Location: 521 Kim Ma, Ha Noi, Viet Nam</p>
              <p>Mail: mentscape@gmail.com.vn</p>
              <p>Phone Number: +84 97382555</p>
              <div className="d-sm-flex justify-content-center pe-5">
                <FaFacebookSquare size='25' className="mx-2"/>
                <FaInstagramSquare size='25' className="mx-2"/>
                <FaTwitterSquare size='25' className="mx-2"/>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center p-2">
          <p> © 2022 Copyright: <span className="fw-bold">Group 80 - BITS Team</span></p>
        </div>
      </div>
  )
}
