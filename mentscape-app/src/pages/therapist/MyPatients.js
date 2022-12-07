import { Component } from "react";
import "../../css/Huynh.css";
import { Link } from "react-router-dom";
import DocSidebar from "../../components/SideBar/DocSideBar";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { Header } from "../../components/Header";
const a = [1, 2, 3, 4, 5, 6]
export default class MyPatients extends Component {
    render() {
        return (
            <>
            <Header />
            <div className="content">
            <Container fluid>
                <Row>
                    <Col lg={3}><DocSidebar /></Col>
                    <Col md={9}>
                        <Row>
                            {a.map(b => (
                                <Col lg={4}>
                                    <Card className="widget-profile pat-widget-profile">
                                        <Card.Body>
                                            <div class="pro-widget-content">
                                                <div class="profile-info-widget">
                                                    <a href="patient-profile.html" class="booking-doc-img">
                                                        <img src="/img/placeholders/user.webp" alt="User Image" />
                                                    </a>
                                                    <div class="profile-det-info">
                                                        <h3><a href="patient-profile.html">Richard Wilson</a></h3>

                                                        <div class="patient-details">
                                                            <h5><b>Patient ID :</b> P0016</h5>
                                                            <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Alabama, USA</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="patient-info">
                                                <ul>
                                                    <li>Phone <span>+1 952 001 8563</span></li>
                                                    <li>Age <span>38 Years, Male</span></li>
                                                    <li>Blood Group <span>AB+</span></li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
                </div>
            </>
        )
    }
}