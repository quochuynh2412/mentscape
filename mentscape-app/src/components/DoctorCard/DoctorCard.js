import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doctors from "./doctor.json"
import * as React from "react";
import { Link } from "react-router-dom"
import "../../index.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faCertificate } from '@fortawesome/free-solid-svg-icons';
library.add(fas, faCertificate);
export default function DoctorCard() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    }
    return (
        <div className="doctor-slider">
            <Slider {...settings}>
                {doctors.map(doctor => (
                    <div className="doctor-profile shadow rounded" key={doctor.id}>
                        <div className="doc-img">
                            <Link to="#">
                                <img className="img-fluid" alt="User Image" src="/img/placeholders/user.webp" />
                            </Link>
                            <Link to="#" className="fav-btn">
                                <i className="far fa-bookmark"></i>
                            </Link>
                        </div>
                        <div className="pro-content">
                            <h3 className="doc-name">
                                <Link href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>{doctor.name}</Link>
                                <span className="verified"><FontAwesomeIcon icon="fa-solid fa-certificate" color="green" size="xs" /></span>
                            </h3>
                            <p className="speciality">{doctor.degree}</p>
                            {/* <div className="rating">
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <span className="d-inline-block average-rating">(17)</span>
                                </div> */}
                            <ul className="available-info">
                                <li>
                                    <FontAwesomeIcon icon="fa-solid fa-location-dot" /> {doctor.address}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon="fa-solid fa-clock" /> Available on Fri, 22 Mar
                                </li>
                                <li>
                                    <FontAwesomeIcon icon="fa-solid fa-money-check-dollar" /> $300 - $1000
                                    <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                </li>
                            </ul>
                            <div className="row row-sm">
                                <div className="col-6">
                                    <Link to="/" className="btn btn-outline-info">View Profile</Link>
                                </div>
                                <div className="col-6">
                                    <Link to="/" className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}