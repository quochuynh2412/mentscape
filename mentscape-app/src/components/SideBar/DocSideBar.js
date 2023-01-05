import '../../css/Huynh.css'
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { firebaseSignout } from '../../firebase/authFunc';
import { useEffect, useState } from 'react';
import { getCurrentUserInfo } from '../../firebase/user';
export default function DocSidebar() {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        const loadUserInfo = async () => {
            const results = await getCurrentUserInfo();
            setUserInfo(results);
        }
        loadUserInfo();
    }, []);

    return (
        <StickyBox>
            <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                        <Link to="#" className="booking-doc-img">
                            <img src={userInfo.profile_pic} alt="User profile" />
                        </Link>
                        <div className="profile-det-info">
                            <h3>Dr. {userInfo.fullname}</h3>

                            <div className="patient-details">
                                <h5 className="mb-0">A therapist with many years of experiences</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                        <ul>
                            <li className="">
                                <Link to="/dashboard">
                                    <FontAwesomeIcon className='doc-sidebar-icon' icon="fa-solid fa-table-columns" />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/PatientNote">
                                    <FontAwesomeIcon className='doc-sidebar-icon' icon="fa-solid fa-note-sticky" />
                                    <span>Notes</span>
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
                                    <FontAwesomeIcon className='doc-sidebar-icon' icon="fa-solid fa-star" />
                                    <span>Reviews</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile">
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
                                <Link onClick={firebaseSignout}>
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