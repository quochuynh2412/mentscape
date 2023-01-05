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
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>  */}
                            View
                        </button>
                        <button type="button" onClick={handleDelete} className="col-sm-5 m-1 btn btn-sm btn-danger">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                            </svg>  */}
                            Cancel
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default AppointmentList;