import { NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png';
import { firebaseSignout } from '../firebase/authFunc';
import { useState, useEffect } from 'react';
import { getCurrentUserInfo } from '../firebase/user';

export const Header = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const loadUserInfo = async () => {
      const results = await getCurrentUserInfo();
      setUserInfo(results);
    }
    loadUserInfo();
  }, []);

  return (

    <Navbar expand="lg" className="bg-white text-black px-4 d-flex justify-content-between divider">
      <img src={logo} className="nav-logoimg" alt="logo" />
      <Link to="/" className="nav-logo text-reset">
        <h3 className="me-4 mb-0 px-2">Mentscape</h3>
      </Link>
      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav">
        <ul className="d-flex justify-content-sm-center nav-main reset-list">
          {
            (userInfo !== null && userInfo.role === "therapist") ?
              <li className="nav-links me-4">
                <Link to="/dashboard" className="nav-links">Dashboard</Link>
              </li>
              : <li className="me-4">
                <Link to="/" className="nav-links">Home</Link>
              </li>
          }

          <li className="nav-links me-4">
            <Link to="/quizzes" className="nav-links">Quiz</Link>
          </li>
          <li className="nav-links me-4">
            <Link to="/news" className="nav-links">News</Link>
          </li>

          {
            (userInfo === null) ? <li className="nav-links me-4"><Link to="/login" className="nav-links">Login</Link></li>
              :
              (userInfo !== null && userInfo.role === "patient") ?
                <>
                  <li className="nav-links me-4">
                    <NavDropdown id="nav-dropdown" title="Story" className="nav-links">
                      <NavDropdown.Item href="/readStory">
                        Read Story
                      </NavDropdown.Item>
                      {/* <NavDropdown.Divider /> */}
                      <NavDropdown.Item href="">
                        My Story
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>

                  <li className="nav-links me-4">
                    <NavDropdown id="nav-dropdown" title="My Account" className="nav-links">
                      <NavDropdown.Item href="/profile">
                        <img src={userInfo.profile_pic} alt="User profile" className="avatar-img rounded-circle" />
                        <span href="doctor-profile.html">{userInfo.fullname}</span>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/appointment">
                        My appoinment
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                </>
                :
                <li className="nav-links me-4">
                  <NavDropdown id="nav-dropdown" title="My Account" className="nav-links">
                    <NavDropdown.Item href="/profile">
                      <img src={userInfo.profile_pic} alt="User profile" className="avatar-img rounded-circle" />
                      <span href="doctor-profile.html">{userInfo.fullname}</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
          }
        </ul>
      </Navbar.Collapse>
    </Navbar>
  )
}
