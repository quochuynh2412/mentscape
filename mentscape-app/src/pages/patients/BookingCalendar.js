import ava from "../../assets/img/doctors/doctor-01.jpg";
import {Link} from "react-router-dom";
function BookingCalendar() {
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
                        <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                                </svg>
                                            </a>
                                        </th>
                                        <th><span>Mon</span>
                                            <span className="slot-date">11 Nov <small className="slot-year">2019</small></span></th>
                                        <th><span>Mon</span>
                                            <span className="slot-date">11 Nov <small className="slot-year">2019</small></span></th>
                                        <th><span>Mon</span>
                                            <span className="slot-date">11 Nov <small className="slot-year">2019</small></span></th>
                                        <th><span>Mon</span>
                                            <span className="slot-date">11 Nov <small className="slot-year">2019</small></span></th>
                                        <th><span>Mon</span>
                                            <span className="slot-date">11 Nov <small className="slot-year">2019</small></span></th>
                                        <th>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </a>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <td></td>

                                        <td>
                                            <a className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                            {/* <Link to="/quizzes" className="d-block btn bg-info-light border mb-1 text-info"></Link> */}
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                        </td>
                                        <td>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                        </td>
                                        <td>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                        </td>
                                        <td>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                        </td>
                                        <td>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                            <a href="#" className="d-block btn bg-info-light border mb-1 text-info">10.00 AM</a>
                                        </td>

                                        <td></td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
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