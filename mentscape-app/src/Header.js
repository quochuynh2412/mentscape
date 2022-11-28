import { NavDropdown, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';
import profile_pic from "../assets/img/profile.jpeg";

export const Header = () => {
  const signedIn = true;
  return (

    <Navbar expand="lg" className="bg-white text-black px-4 d-flex justify-content-between divider">
        <img src={logo} className="nav-logoimg" alt="logo"/>
        <Link to="/" className="nav-logo text-reset">
          <h3 className="me-4 mb-0 px-2">Mentscape</h3>
        </Link>
      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav">
          <ul className="d-flex justify-content-sm-center nav-main reset-list">
            <li className="me-4">
            <Link to="/" className="nav-links">Home</Link>
            </li>
          <li className="nav-links me-4">
            <Link to="/" className="nav-links">Quiz</Link>
          </li>
          <li className="nav-links me-4">
            <Link to="/" className="nav-links">News</Link>
          </li>
          {
            signedIn ? <li className="nav-links me-4"><Link to="/login" className="nav-links">Login</Link></li>
            : <li>
                <NavDropdown
                  id="nav-dropdown"
                  title="My Account"
                  className="nav-links"
                >
                  <NavDropdown.Item>
                    <Link to="/profile">
                      <img src={profile_pic} alt="User profile" className="avatar-img rounded-circle" />
                      <span href="doctor-profile.html">Dr. Hoang Minh</span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
          }
          </ul>
      </Navbar.Collapse>
    </Navbar>
  )
}
