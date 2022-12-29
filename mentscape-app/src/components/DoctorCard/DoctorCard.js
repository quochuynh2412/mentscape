import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as React from "react";
import { Link } from "react-router-dom"
import "../../index.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getUserList } from '../../firebase/user.js';
import { AiFillStar } from 'react-icons/ai'
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
    const [therapistData, setTherapistData] = useState([]);
    useEffect(() => {
        const loadTherapist = async () => {
            const data = await getUserList(false);
            setTherapistData(data)
        }
        loadTherapist();
    }, [])
    return (
        <div className="doctor-slider">
            <Slider {...settings}>
                {therapistData.map(doctor => (
                    <div className="doctor-profile shadow rounded">
                        <div className="doc-img">
                            <Link to="#">
                                <img className="img-fluid" alt="User Image" src={doctor.profile_pic} />
                            </Link>
                            <Link to="#" className="fav-btn">
                                <i className="far fa-bookmark"></i>
                            </Link>
                        </div>
                        <div className="pro-content">
                            <h3 className="doc-name mb-0">
                                <Link href="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>{doctor.fullname}</Link>
                                <span className="verified"><FontAwesomeIcon icon="fa-solid fa-certificate" color="green" size="xs" /></span>
                            </h3>
                            <div className="rating">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <span className="d-inline-block average-rating ms-1">(35)</span>
                                </div>
                            <ul className="available-info ps-0 mt-2">
                                <li>
                                    <FontAwesomeIcon icon="fa-solid fa-location-dot" /> {doctor.address}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon="fa-solid fa-clock" /> Available now
                                </li>
                                {/* <li>
                                    <FontAwesomeIcon icon="fa-solid fa-clock" /> 
                                     {doctor.specialties.map((specialty, index) =>
                                        <span key={specialty}>
                                            {index > 0 && ", "}
                                            {specialty}
                                        </span>)
                                    }
                                </li> */}
                                <li>
                                    <FontAwesomeIcon icon="fa-solid fa-money-check-dollar" /> $50 - $100
                                    <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                </li>
                            </ul>
                            <div className="row row-sm">
                                <div className="col-6">
                                    <Link to={`/booking-calendar/$id=${doctor.id}`} className="btn btn-outline-info">View Profile</Link>
                                </div>
                                <div className="col-6">
                                    <Link to={`/booking-calendar/$id=${doctor.id}`} className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}