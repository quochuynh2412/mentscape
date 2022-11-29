import { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import DocSidebar from "./components/DoctorSidebar/DocSidebar";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faCertificate } from '@fortawesome/free-solid-svg-icons';
export default class Dashboard extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col lg={3}><DocSidebar /></Col>
                    <Col lg={9}>
                        <Row>
                            <Col md={12}>
                                <Card>
                                    <Card.Body>
                                        <Row>
                                            <Col md={4}>
                                                <div className="dash-widget dct-border-rht">
                                                    <div className="circle-bar circle-bar1">
                                                        <div className="circle-graph1" data-percent="75">
                                                            <img src="/img/placeholders/user.webp" className="img-fluid" alt="patient" />
                                                        </div>
                                                    </div>
                                                    <div className="dash-widget-info">
                                                        <h6>Total Patient</h6>
                                                        <h3>1500</h3>
                                                        <p className="text-muted">Till Today</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="dash-widget dct-border-rht">
                                                    <div className="circle-bar circle-bar1">
                                                        <div className="circle-graph1" data-percent="75">
                                                            <img src="/img/placeholders/user.webp" className="img-fluid" alt="patient" />
                                                        </div>
                                                    </div>
                                                    <div className="dash-widget-info">
                                                        <h6>Today Patient</h6>
                                                        <h3>234</h3>
                                                        <p className="text-muted">Till Today</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="dash-widget dct-border-rht">
                                                    <div className="circle-bar circle-bar1">
                                                        <div className="circle-graph1" data-percent="75">
                                                            <img src="/img/placeholders/user.webp" className="img-fluid" alt="patient" />
                                                        </div>
                                                    </div>
                                                    <div className="dash-widget-info">
                                                        <h6>Appointments</h6>
                                                        <h3>34</h3>
                                                        <p className="text-muted">Till Today</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <h4 className="mb-4">Patient Appoinment</h4>
                                <div className="appointment-tab">
                                    <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/" data-toggle="tab">Upcoming</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/" data-toggle="tab">Today</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane show active" id="upcoming-appointments">
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Patient Name</th>
                                                                    <th>Appt Date</th>
                                                                    <th>Purpose</th>
                                                                    <th className="text-center">Paid Amount</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a href="/" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/img/placeholders/user.webp" alt="User Image" /></a>
                                                                            <a href="/">Richard Wilson <span>#PT0016</span></a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
                                                                    <td>General</td>
                                                                    <td className="text-center">$150</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                                <FontAwesomeIcon icon="fa-solid fa-eye" /> View
                                                                            </a>

                                                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                                                <FontAwesomeIcon icon="fa-solid fa-check" /> Accept
                                                                            </a>
                                                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                                                <FontAwesomeIcon icon="fa-solid fa-xmark" /> Cancel
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a href="/" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="/img/placeholders/user.webp" alt="User Image" /></a>
                                                                            <a href="/">Richard Wilson <span>#PT0016</span></a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
                                                                    <td>General</td>
                                                                    <td className="text-center">$150</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                                <FontAwesomeIcon icon="fa-solid fa-eye" /> View
                                                                            </a>

                                                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                                                <FontAwesomeIcon icon="fa-solid fa-check" /> Accept
                                                                            </a>
                                                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                                                <FontAwesomeIcon icon="fa-solid fa-xmark" /> Cancel
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}