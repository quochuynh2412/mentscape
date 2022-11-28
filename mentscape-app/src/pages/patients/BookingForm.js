import ava from "../../assets/img/doctors/doctor-01.jpg";
function BookingForm() {
    return (
        <>
            <div className="mt-5 container">
                <div className="row">
                    <div className="col-md-7 col-lg-8 rounded-3 main-form">
                        <div className="card form-detail">
                            <div className="card-body">

                                <form action="#">

                                    <div className="info-widget">
                                        <h4 className="text-center">Booking Information</h4>

                                        <div className="row">
                                            <label className="text-start">Your Full Name:</label>
                                            <div className="form-group">
                                                <input className="form-control" type="text" />
                                            </div>

                                            <div className="mt-3 mb-3 col-md-6 col-sm-12">
                                                <div className="form-group card-label">
                                                    <label className="text-start">Appointment</label>
                                                    <input
                                                        className="w-100 rounded form-group"
                                                        type="date"
                                                        id="appointment"
                                                        name="appointment"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                                <div className="mt-3 mb-3 form-group card-label">
                                                    <label className="text-start" >
                                                        Time:
                                                    </label>
                                                    <select
                                                        className=" w-100 rounded form-group"


                                                    >
                                                        <option value="1">1:00</option>
                                                        <option value="2">2:00</option>
                                                        <option value="3">3:00</option>
                                                        <option value="4">4:00</option>
                                                        <option value="5">5:00</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <label className="mt-1 text-start">Question:</label>
                                            <div className="form-group card-label">
                                                <input className="form-control" type="text" />
                                            </div>

                                            <label className="mt-3 text-start">Main Problem:</label>
                                            <div className="form-group card-label">
                                                <textarea
                                                    className="form-control"
                                                    type="text"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="mt-3 exist-customer">
                                            Existing Customer? <a href="abc.js">Click here to login</a>
                                        </div>
                                    </div>

                                    <div className="submit-section mt-4">
                                        <button
                                            
                                            type="submit"
                                            className="w-75 rounded-pill btn btn-primary submit-btn"
                                        >
                                            Confirm
                                        </button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 col-lg-4 rounded-3 side-bar">
                        <div className="card booking-summary-card ">

                            <div className="card-header">
                                <h4 className="card-title">Booking Summary</h4>
                            </div>

                            <div className="card-body rounded border-bottom">
                                <div className="row booking-doc-info">
                                    <a href="doctor-profile.html" className="col-xl-5 booking-doc-img">
                                        <img
                                            style={{ width: "5.5rem", height: "5.5rem" }}
                                            src={ava}
                                            alt="Doctor"
                                            className="img-fluid rounded-circle shadow-4-strong"
                                        />
                                    </a>
                                    <div className="col booking-info">
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
                </div>
            </div>
        </>
    );
}

export default BookingForm;