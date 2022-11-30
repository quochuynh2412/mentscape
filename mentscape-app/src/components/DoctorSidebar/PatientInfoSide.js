import '../../index.css'
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faCertificate } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
export default function PatientInfoside() {
    return (
        <StickyBox>
            <Card className='widget-profile pat-widget-profile'>
                <Card.Body>
                    <div className="pro-widget-content">
                        <div className="profile-info-widget">
                            <a href="#" className="booking-doc-img">
                                <img src="/img/placeholders/user.webp" alt="User Image"/>
                            </a>
                            <div className="profile-det-info">
                                <h3>Richard Wilson</h3>

                                <div className="patient-details">
                                    <h5><b>Patient ID :</b> PT0016</h5>
                                    <h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, United States</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="patient-info">
                        <ul>
                            <li>Phone <span>+1 952 001 8563</span></li>
                            <li>Age <span>38 Years, Male</span></li>
                            <li>Blood Group <span>AB+</span></li>
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </StickyBox>
    )
}