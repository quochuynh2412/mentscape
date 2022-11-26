import { NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../css/style.css';
import logo from '../assets/img/logo.png';
import profile_pic from "../assets/img/profile.jpeg";



export const Header = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-white text-black px-4 d-flex justify-content-between divider">
        <img src={logo} className="nav-logoimg" alt="logo"/>
          <Link to="/">
            <h2 className="me-4 p-2">Mentscape</h2>
          </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="d-flex justify-content-sm-center nav-main">
            <li className="nav-link me-4">
              <Link to="/">Home</Link>
            </li>
          <li className="nav-link me-4">
            <Link to="/">Quiz</Link>
          </li>
          <li className="nav-link me-4">
            <Link to="/">News</Link>
          </li>
          <li className="nav-link me-4">
            <Link to="/login">Login</Link>
          </li>
          <NavDropdown
            id="nav-dropdown"
            title="My Account"
          >
            <NavDropdown.Item>
              <Link to="/profile" >
                <img src={profile_pic} alt="User profile" className="nav-link avatar-img rounded-circle" />
                <span href="doctor-profile.html">Dr. Hoang Minh</span>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          </ul>
        </div>
    </nav>
  )
}
