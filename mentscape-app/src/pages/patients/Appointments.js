import { useState } from "react";
import AppointmentsModal from "./AppointmentsModal";
import AppointmentList from "./AppointmentList";
function Appointments() {
    const [showModal, setShowModal] = useState(true);
    return (
        <>
            {showModal ?
                <>
                    <div style={{ width:"95%" }} id="appointments" className="mt-4 mx-auto rounded-3 tab-pane fade show active">
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
                                            <AppointmentList setModal={setShowModal} />
                                            <AppointmentList setModal={setShowModal} />
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