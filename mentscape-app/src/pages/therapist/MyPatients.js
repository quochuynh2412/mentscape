import { Component } from "react";
import "../../css/Huynh.css";
import { Link } from "react-router-dom";
import DocSidebar from "../../components/SideBar/DocSideBar";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';
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
                        <Card>
                            <Card.Header className="mb-1 card-header user-tabs"><Card.Title>Notes</Card.Title></Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={4}>
                                        <div className="note-list" data-bs-spy="scroll">
                                            <ListGroup as={"ul"}>
                                                <ListGroup.Item>
                                                    Test 1
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Test 1
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Test 1
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Test 1
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Test 1
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Test 1
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Test 1
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
                </div>
            </>
        )
    }
}