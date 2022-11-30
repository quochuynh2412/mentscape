import { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import DocSidebar from "./components/DoctorSidebar/DocSidebar";
import PatientInfoside from "./components/DoctorSidebar/PatientInfoSide";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faCertificate } from '@fortawesome/free-solid-svg-icons';
export default class PatientInfo extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col md={3}><PatientInfoside/></Col>
                    <Col md={9}>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}