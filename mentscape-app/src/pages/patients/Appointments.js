import { useEffect, useState } from "react";
import AppointmentsModal from "./AppointmentsModal";
import AppointmentList from "./AppointmentList";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase-config';
import { getAppointments } from "../../firebase/appointment";
import { getCurrentUser } from "../../firebase/authFunc";
import { Header } from "../../components/Header";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Appointments() {
    const [apm, setApm] = useState([]);
    useEffect(() => {
        const loadAppointment = async (userId) => {
            console.log(userId)
            const data = await getAppointments(true, userId);
            setApm(data);
        }
        loadAppointment(getCurrentUser().id);
    }, []);
    const [showModal, setShowModal] = useState(true);
    return (
        <>
            <Header />
            <Container fluid className="main-container">
                <Container>
                    {showModal ?
                        <>
                            <div style={{ width: "95%" }} id="appointments" className="mt-4 mx-auto rounded-3 tab-pane fade show active">
                                <Card className="card card-table mb-0">
                                    <Card.Header className="mb-1 card-header user-tabs">
                                        <div className="d-flex justify-content-between py-2">
                                            <Card.Title>Appointments</Card.Title>
                                            <div className="text-end">
                                                <Link className="btn btn-large btn-success" to="/searchTherapist">Add appoinment</Link>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="table-responsive">
                                            <table className="table table-hover table-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Avatar</th>
                                                        <th>Therapist Name</th>
                                                        <th>Appt Date</th>
                                                        <th>Booking Date</th>
                                                        <th>Status</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {apm.map(appointment => (
                                                        <AppointmentList setModal={setShowModal} isDoctor={false} key={appointment.id}
                                                            {...appointment} />
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </>
                        :
                        <AppointmentsModal setModal={setShowModal}  />
                    }
                </Container>
            </Container>
        </>
    );
}

export default Appointments;