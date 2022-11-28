import ava from "../../assest/asset/doctors/doctor-01.jpg";
function AppointmentModal(props) {

    const closeDetail =  () => {
        props.setModal(true);
    }

    return (
        <>
            <div style={{ height: "100%", width: "65%" }} className="mt-5 mx-auto rounded-3 ">
                <div className="card booking-summary-card ">

                    <div className="card-header">
                        <h4 className="card-title">Booking Summary</h4>
                    </div>

                    <div className="border bg-light h-3 text-center">
                        <h5>Doctor Summary Information:</h5>
                    </div>

                    <div className="card-body rounded border-bottom">
                        <div className="row justify-content-center booking-doc-info">
                            <a href="doctor-profile.html" className="col-sm-3 booking-doc-img">
                                <img
                                    style={{ width: "5.5rem", height: "5.5rem" }}
                                    src={ava}
                                    alt="Doctor"
                                    className="img-fluid rounded-circle shadow-4-strong"
                                />
                            </a>
                            <div className="col-sm-3 booking-info">
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

                    <div className="border bg-light h-3 text-center">
                        <h5>Your Appointments Information:</h5>
                    </div>

                    <div className="main">
                        <div className="card detail">
                            <div className="card-body">

                                <div className="info-widget">
                                    <div className="mt-3 single-info">
                                        <h6 className="text-start mb-1">User's Name:</h6>
                                        <div className="p-1 text-start border rounded">
                                            Huy Hoang 123
                                        </div>
                                    </div>

                                    <div className="mt-3 single-info">
                                        <h6 className="text-start mb-1">Full Name:</h6>
                                        <div className="p-1 text-start border rounded">
                                            Dang Tran Huy Hoang
                                        </div>
                                    </div>

                                    <div className="mt-3 single-info">
                                        <h6 className="text-start mb-1">Appointments Date:</h6>
                                        <div className="p-1 text-start border rounded-pill text-info">
                                            14 Nov 2019
                                        </div>
                                    </div>

                                    <div className="mt-3 single-info">
                                        <h6 className="text-start mb-1">Appointments Time:</h6>
                                        <div className="p-1 text-start border rounded-pill text-info">
                                            10:00
                                        </div>
                                    </div>

                                    <div className="mt-3 ingle-info">
                                        <h6 className="text-start mb-1">Appointment's Note:</h6>
                                        <div className="p-1 text-start border rounded">
                                            Abbvcbjbfkabkjbfvjfavjbfjvnabvbgfbvbgkbakjgkfbvbabsjvbjfbsjbvajbdfjbvbskbajfdvhfahdvfjdvfdhvahdvfhsvf,jvdfavgdf
                                        </div>
                                    </div>

                                    <div className="mt-3 ingle-info">
                                        <h6 className="text-start mb-1">Appointment's Question:</h6>
                                        <div className="p-1 text-start border rounded">
                                            Abbvcbjbfkabkjbfvjfavjbfjvnabvbgfbvbgkbakjgkfbvbabsjvbjfbsjbvajbdfjbvbskbajfdvhfahdvfjdvfdhvahdvfhsvf,jvdfavgdf
                                        </div>
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>




                    <div className="card-footer">
                        <button
                            onClick={closeDetail}
                            type="button"
                            className="w-50 rounded-pill btn btn-danger submit-btn"
                        >
                            Exit
                        </button>
                    </div>


                </div>
            </div>
        </>
    );
}

export default AppointmentModal;