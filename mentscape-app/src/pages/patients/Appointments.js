import { useEffect, useState } from "react";
import AppointmentsModal from "./AppointmentsModal";
import AppointmentList from "./AppointmentList";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase-config';
import { getAppointments } from "../../firebase/appointment";
function Appointments() {
    const [apm, setApm] = useState([]);
    useEffect(() => {
        const loadAppointment = async () => {
            const data = await getAppointments();
            setApm(data);
            console.log(data);
        }
        loadAppointment();
    }, []);
    const [showModal, setShowModal] = useState(true);
    return (
        <>
            {showModal ?
                <>
                    <div style={{ width: "95%" }} id="appointments" className="mt-4 mx-auto rounded-3 tab-pane fade show active">
                        <div className="card card-table mb-0">
                            <div className="mb-1 card-header user-tabs">
                                <h5>Appointments</h5>
                            </div>

                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Doctor</th>
                                                <th>Appt Date</th>
                                                <th>Booking Date</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {apm.map(appointment => (
                                                <AppointmentList setModal={setShowModal} {...appointment} />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <AppointmentsModal setModal={setShowModal} />
            }
        </>
    );
}

export default Appointments;