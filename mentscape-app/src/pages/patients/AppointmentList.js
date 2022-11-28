import ava from "../../assest/asset/doctors/doctor-01.jpg";
function AppointmentList(props) {
    var b = "bg-success";
    const changeColor = () => {
        b = "bg-danger";
    }
    changeColor();

    const showdetail =  () => {
        props.setModal(false);
    }
    return (
        <>
            <tr>
                <td>
                    <h2 className="row table-avatar">
                        <a
                            href="doctor-profile.html"
                            className="col-sm-5 avatar avatar-sm me-2 nav-link active"
                        >
                            <img
                                style={{ width: "5.5rem", height: "5.5rem" }}
                                className="avatar-img rounded-circle"
                                src={ava}
                                alt="Doctor"
                            />

                        </a>
                        <a style={{ fontSize: "large" }} href="doctor-profile.html" className=" p-3 col-sm-4 nav-link active">
                            {/* {props.doctor} */}
                            Dr. Ruby Perrin <span>Dental</span>
                        </a>
                    </h2>
                </td>
                <td>
                    14 Nov 2019 <span className="d-block text-info">10.00 AM</span>
                </td>
                <td>12 Nov 2019</td>
                <td>
                    <span className={"badge " + b}>Confirm</span>
                </td>
                <td className="text-right">
                    <div className="row justify-content-center table-action">
                        <a onClick={showdetail} href="#" className="col-sm-5 m-1 btn btn-sm btn-info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg> View Thay doi
                        </a>
                        <a onClick={showdetail} href="abcd.js" className="col-sm-5 m-1 btn btn-sm btn-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                            </svg> Cancel
                        </a>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default AppointmentList;