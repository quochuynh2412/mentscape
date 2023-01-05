import { getUserInfo } from "../../firebase/user";
import { useState, useEffect } from 'react'
import { cancelAppointment } from "../../firebase/appointment";
function AppointmentList(props) {
    const [therapist, setTherapistInfo] = useState([]);
    const userId = props.isDoctor ? "patient_id" : "therapist_id"
    useEffect(() => {
        const loadTherapist = async () => {
            const data = await getUserInfo(props[userId]);
            setTherapistInfo(data);
        }
        loadTherapist();
    }, []);
    const date = new Date(props.date.seconds * 1000)
    const creation_date = new Date(props.creation_date.seconds * 1000)
    var b = "bg-success";
    const changeColor = () => {
        b = "bg-danger";
    }
    changeColor();

    const showdetail = () => {
        props.setModal(false);
    }

    const handleDelete = async () => {
        await cancelAppointment(props.id);
        // window.location.reload(false);
    }

    return (
        <>
            <tr>
                <td>
                    <a
                        className="avatar avatar-sm me-2 nav-link active"
                    >
                        <img
                            style={{ width: "70px", height: "70px" }}
                            className="avatar-apm"
                            src={therapist.profile_pic}
                            alt="Doctor"
                        />

                    </a>
                </td>
                <td>
                    <h2 className="row table-avatar">

                        <a style={{ fontSize: "large" }} href="#" className="nav-link active">
                            {therapist.fullname}
                            {/* <span className="ps-2">Booking</span> */}
                        </a>
                    </h2>
                </td>
                <td>
                    {date.toDateString()} <span className="d-block text-info">{date.toLocaleTimeString('en-US')}</span>
                </td>
                {props.isDoctor ? <td>{props.problem}</td>
                    : <td>{creation_date.toDateString()}</td>
                }
                <td>
                    {props.status != "cancelled" ? <span className="badge text-bg-success">Confirmed</span>
                        : <span className="badge text-bg-danger">Cancelled</span>}
                </td>
                <td className="text-right">
                    <div className="row justify-content-center table-action">
                        <button type="button" data-bs-toggle="modal" data-bs-target={`#${props.id}`} className="col-sm-5 m-1 btn btn-sm btn-secondary">
                            View
                        </button>
                        <button type="button" onClick={handleDelete} className="col-sm-5 m-1 btn btn-sm btn-danger">
                            Cancel
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default AppointmentList;