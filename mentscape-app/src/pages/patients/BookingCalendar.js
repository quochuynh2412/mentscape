import ava from "../../assets/img/doctors/doctor-01.jpg";
import { Link, useParams } from "react-router-dom";
import { getUserInfo, getCurrentUserInfo } from "../../firebase/user";
import { useState, useEffect } from 'react';
import { getAppointments, getAvailability } from "../../firebase/appointment";
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { faL } from "@fortawesome/free-solid-svg-icons";
import { Appointment, addAppointment } from "../../firebase/appointment";
import AppointmentList from "./AppointmentList";
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
        const booked_apm = new Appointment(new Date(), dateTime, "anxiety", patient.id, 'none', 'not good', therapist.id);
        setIsScheduled(await addAppointment(booked_apm));
    };
    return (
        <>
            <div style={{ height: "100%", width: "95%" }} className="mt-5 mx-auto rounded-3 ">
                <div className="card booking-summary-card ">

                    <div className="card-header">
                        <h4 className="card-title">Booking Summary</h4>
                    </div>


                    <div className="card-body rounded border-bottom">
                        <div className="justify-content-center booking-doc-info">
                            <a href="doctor-profile.html" className=" booking-doc-img">
                                <img
                                    style={{ width: "5.5rem", height: "5.5rem" }}
                                    src={ava}
                                    alt="Doctor"
                                    className="img-fluid rounded-circle shadow-4-strong"
                                />
                            </a>
                            <div className="booking-info">
                                <h5>
                                    <a className="text-decoration-none link-dark" href="doctor-profile.html">Dr. Darren Elder</a>
                                </h5>
                                <div className="rating">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>

                                    <span className="ms-1 d-inline-block average-rating">35</span>
                                </div>
                                <div className="clinic-details">
                                    <p className="doc-location">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg> Newyork, USA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
            <div style={{ width: "95%" }} id="appointments" className="mt-4 mx-auto rounded-3 tab-pane fade show active">
                <div className="card card-table mb-0">
                    <div className="mb-1 card-header user-tabs">
                        <h5>Appointments</h5>
                    </div>

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

                    {/* <div className="mb-1 card-footer user-tabs">
                        <div className="submit-section proceed-btn text-right">
                            <a href="checkout.html" className="rounded-pill btn btn-primary submit-btn">Proceed to Book An Appointment</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default BookingCalendar;