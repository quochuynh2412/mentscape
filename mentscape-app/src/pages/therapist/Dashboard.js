import '../../css/Huynh.css';
import DocSidebar from '../../components/SideBar/DocSideBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { Header } from '../../components/Header';
import { useState, useEffect } from 'react';
import { getAppointments } from '../../firebase/appointment';
import { getCurrentUser } from '../../firebase/authFunc';
import AppointmentList from '../patients/AppointmentList';
import AppointmentModal from '../patients/AppointmentsModal';

export const Dashboard = () => {
    const [apm, setApm] = useState([]);
  const [showModal, setShowModal] = useState(true);
    useEffect(() => {
      const loadAppointment = async (userId) => {
        const data = await getAppointments(false, userId);
        setApm(data);
      }
      loadAppointment(getCurrentUser().id);
    }, []);
    return (
      <>
      <Header />
      {showModal ?
      <div className='content'>
      <Container fluid>
        <Row>
          <Col lg={3}>
            <DocSidebar />
          </Col>
          <Col lg={9}>
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col md={4}>
                        <div className='dash-widget dct-border-rht'>
                          <div className='circle-bar circle-bar1'>
                            <div className='circle-graph1' data-percent='75'>
                              <img
                                src='/img/placeholders/user.webp'
                                className='img-fluid'
                                alt='patient'
                              />
                            </div>
                          </div>
                          <div className='dash-widget-info'>
                            <h6>Total Patient</h6>
                            <h3>1500</h3>
                            <p className='text-muted'>Till Today</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className='dash-widget dct-border-rht'>
                          <div className='circle-bar circle-bar1'>
                            <div className='circle-graph1' data-percent='75'>
                              <img
                                src='/img/placeholders/user.webp'
                                className='img-fluid'
                                alt='patient'
                              />
                            </div>
                          </div>
                          <div className='dash-widget-info'>
                            <h6>Today Patient</h6>
                            <h3>234</h3>
                            <p className='text-muted'>Till Today</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className='dash-widget dct-border-rht'>
                          <div className='circle-bar circle-bar1'>
                            <div className='circle-graph1' data-percent='75'>
                              <img
                                src='/img/placeholders/user.webp'
                                className='img-fluid'
                                alt='patient'
                              />
                            </div>
                          </div>
                          <div className='dash-widget-info'>
                            <h6>Appointments</h6>
                            <h3>34</h3>
                            <p className='text-muted'>Till Today</p>
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
                <h4 className='mb-4'>Patient Appoinment</h4>
                <div className='appointment-tab'>
                  <ul className='nav nav-tabs nav-tabs-solid nav-tabs-rounded'>
                    <li className='nav-item'>
                      <a className='nav-link active' href='/' data-toggle='tab'>
                        Upcoming
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='/' data-toggle='tab'>
                        Today
                      </a>
                    </li>
                  </ul>

                  <div className='tab-content'>
                    <div
                      className='tab-pane show active'
                      id='upcoming-appointments'
                    >
                      <div className='card card-table mb-0'>
                        <div className='card-body'>
                          <div className='table-responsive'>
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Patinet's Avatar</th>
                                      <th>Patient's Name</th>
                                      <th>Appt Date</th>
                                      <th>Main Problem</th>
                                      <th>Status</th>
                                      <th></th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    {apm.map(appointment => (
                                      <AppointmentList setModal={setShowModal} isDoctor={true} key={appointment.id}
                                        {
                                          ...appointment
                                        } />
                                    ))}
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
        </div>
          :
          <AppointmentModal setModal={setShowModal} />
        }
      </>
    );
  
}
