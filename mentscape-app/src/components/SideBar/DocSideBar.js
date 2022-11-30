import '../../index.css'
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faCertificate } from '@fortawesome/free-solid-svg-icons';
export default function DocSidebar() {
    return (
        <StickyBox>
            <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                        <Link to="#" className="booking-doc-img">
                            <img src="/img/placeholders/user.webp" alt="User Image" />
                        </Link>
                        <div className="profile-det-info">
                            <h3>Dr. Darren Elder</h3>

                            <div className="patient-details">
                                <h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                        <ul>
                            <li className="">
                                <Link to="/">
                                    <FontAwesomeIcon className='doc-sidebar-icon' icon="fa-solid fa-table-columns" />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon className='doc-sidebar-icon' icon="fa-solid fa-user-injured" />
                                    <span>My Patients</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon className='doc-sidebar-icon' icon="fa-solid fa-hourglass-start" />
                                    <span>Schedule Timings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon className='doc-sidebar-icon' icon="fa-solid fa-star" />
                                    <span>Reviews</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon className='doc-sidebar-icon' icon="fa-solid fa-user-gear" />
                                    <span>Profile Settings</span>
                                </Link>
                            </li>
                            {/* <li>
                            <Link to="doctor-change-password.html">
                                <i className="fas fa-lock"></i>
                                <span>Change Password</span>
                            </Link>
                        </li> */}
                            <li>
                                <Link to="/">
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </StickyBox>
    )
}