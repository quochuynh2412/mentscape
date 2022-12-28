import { useParams } from "react-router-dom";
import { getUserInfo, getCurrentUserInfo } from "../../firebase/user";
import { useState, useEffect } from 'react';
import { getAppointments, getAvailability } from "../../firebase/appointment";
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { Appointment, addAppointment } from "../../firebase/appointment";
import StickyBox from "react-sticky-box";
import { Col, Row, Container, Card } from "react-bootstrap";
import '../../css/Huynh.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from "../../components/Header";
function BookingCalendar() {
    const [therapist, setTherapistInfo] = useState([]);
    const [appointmentList, setAppointmentList] = useState([]);
    const [patient, setPatientID] = useState([]);
    const [availability, setAvailabilty] = useState([]);
    const [isScheduling, setIsScheduling] = useState(false);
    const [isScheduled, setIsScheduled] = useState(false);
    var { id } = useParams();
    id = id.substring(4);
    useEffect(() => {
        const loadTherapist = async (userId) => {
            const data = await getUserInfo(userId);
            setTherapistInfo(data);
            console.log("therapist ", data);
            return data;
        }
        const loadAvailability = async (userId) => {
            const user = await loadTherapist(userId)
            const data = await getAvailability(user.date_available);
            setAvailabilty(data);
            console.log(data);
        }
        const loadCurrentUser = async () => {
            const currentId = await getCurrentUserInfo();
            setPatientID(currentId);
        }
        const loadAppointment = async (userId) => {
            const data = await getAppointments(false, userId);
            setAppointmentList(data);
        }
        loadAvailability(id);
        loadAppointment(id);
        loadCurrentUser();
    }, []);
    function timeSlotValidator(slotTime) {
        const time = slotTime.toTimeString().substring(0, 5);
        var isvalid = false;
        if (slotTime.getDay() == 1) {
            availability.Monday.forEach(element => {
                if (time === element) {
                    isvalid = true;
                }
            });
        } else if (slotTime.getDay() == 2) {
            availability.Tuesday.forEach(element => {
                if (time === element) {
                    isvalid = true;
                }
            });
        } else if (slotTime.getDay() == 3) {
            availability.Wednesday.forEach(element => {
                if (time === element) {
                    isvalid = true;
                }
            });
        } else if (slotTime.getDay() == 4) {
            availability.Thursday.forEach(element => {
                if (time === element) {
                    isvalid = true;
                }
            });
        } else if (slotTime.getDay() == 5) {
            availability.Friday.forEach(element => {
                if (time === element) {
                    isvalid = true;
                }
            });
        } else if (slotTime.getDay() == 6) {
            availability.Saturday.forEach(element => {
                if (time === element) {
                    isvalid = true;
                }
            });
        } else if (slotTime.getDay() == 0) {
            availability.Sunday.forEach(element => {
                if (time === element) {
                    isvalid = true;
                }
            });
        }
        appointmentList.forEach(element => {
            const apm_date = new Date(element.date.seconds * 1000)
            if (slotTime.getTime() == apm_date.getTime()) {
                isvalid = false;
            }
        })
        return isvalid;
    }
    const handleScheduled = async dateTime => {
        setIsScheduling(true);
        const booked_apm = new Appointment(new Date(), dateTime, "anxiety", patient.id, 'none', 'active', therapist.id);
        setIsScheduled(await addAppointment(booked_apm));
    };
    return (
        <>
        <Header />
            <Container className="booking-calendar-container" fluid>
                <Container className="mx-auto">
                    <Row>
                        <Col md={4}>
                            <StickyBox>
                                <Card>
                                    <div className="card-header">
                                        <h4 className="card-title">Booking Summary</h4>
                                    </div>
                                    <Card.Body>
                                        <div className="widget-profile pro-widget-content">
                                            <div className="profile-info-widget">
                                                <div className="booking-doc-img">
                                                    <img src={therapist.profile_pic} alt="User Image" />
                                                </div>
                                                <div className="profile-det-info">
                                                    <h3>{therapist.fullname}</h3>

                                                    <div className="patient-details">
                                                        <h5 className="mb-0 text-wrap">{therapist.description}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Body>
                                        <div className="booking-info">
                                            <h5>
                                                <a className="text-decoration-none link-dark" href="doctor-profile.html">Dr. {therapist.fullname}</a>
                                            </h5>
                                            <ul className="therapist-detail">
                                                <li className="rating">
                                                    <span>
                                                        <FontAwesomeIcon icon="fa-solid fa-star" />
                                                        <FontAwesomeIcon icon="fa-solid fa-star" />
                                                        <FontAwesomeIcon icon="fa-solid fa-star" />
                                                        <FontAwesomeIcon icon="fa-solid fa-star" />
                                                        <FontAwesomeIcon icon="fa-solid fa-star" />
                                                    </span>
                                                    (35)
                                                </li>
                                                <li>
                                                    <span><FontAwesomeIcon icon="fa-solid fa-envelope" size="lg" /></span>{therapist.email}
                                                </li>
                                                <li>
                                                    <span><FontAwesomeIcon icon="fa-solid fa-phone" size="lg" /></span>{therapist.phone}
                                                </li>
                                                <li>
                                                    <span><FontAwesomeIcon icon="fa-solid fa-location-dot" size="lg" /></span>{therapist.address}
                                                </li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </StickyBox>
                        </Col>
                        <Col md={8}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title">Book an appointment</h4>
                                </Card.Header>
                                <div className="card-body">
                                    <DayTimePicker
                                        timeSlotSizeMinutes={30}
                                        isDone={isScheduled}
                                        isLoading={isScheduling}
                                        onConfirm={handleScheduled}
                                        confirmText={"Book appointment"}
                                        timeSlotValidator={timeSlotValidator}
                                    />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default BookingCalendar;