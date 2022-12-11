import Banner from "../../components/Banner/Banner";
import Slider from "react-slick";
import Container from "react-bootstrap/esm/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Huynh.css";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import news from '../../components/News/news.json'
import NewsCard from "../../components/News/NewsCard/NewsCard";
import { Carousel } from "bootstrap";
import { Route, Router } from "react-router-dom";
import News from "./News";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

const feature_settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
}
const news_settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
}
news = news.slice(0, 5);
export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="overflow-hidden">
          <Banner></Banner>
          <section className="info">
            <div className="header">
              <h1 className='fw-bolder'>Search Doctor, Make an Appointment</h1>
              <p className='fw-light'>Discover the best doctors, clinic & hospital the city nearest to you.</p>
            </div>
            <div className="feature-slider">
              <Slider {...feature_settings}>
                <div className="feature-item text-center">
                  <div className="feature-img">
                    <img src="/img/specialities/specialities1-01.png" className="mx-auto shadow rounded-circle" alt="Speciality" />
                  </div>
                  <p className="fw-light">Anxiety</p>
                </div>
                <div className="feature-item text-center">
                  <div className="feature-img ">
                    <img src="/img/specialities/specialities2-01.png" className="mx-auto shadow rounded-circle" alt="Speciality" />
                  </div>
                  <p className="fw-light">Stress</p>
                </div>
                <div className="feature-item text-center">
                  <div className="feature-img">
                    <img src="/img/specialities/specialities3-01.png" className="mx-auto shadow rounded-circle" alt="Speciality" />
                  </div>
                  <p className="fw-light">Depression</p>
                </div>
                <div className="feature-item text-center">
                  <div className="feature-img">
                    <img src="/img/specialities/specialities4-01.png" className="mx-auto shadow rounded-circle" alt="Speciality" />
                  </div>
                  <p className="fw-light">Trauma</p>
                </div>
              </Slider>
            </div>
          </section>
          <section className="selected-doctors">
            <Container>
              <Row>
                <Col lg={4}>
                  <div className="section-header">
                    <h2>Book Our Doctor</h2>
                    <p>All therapists in the Mentscape network are professional experts with advanced training.Their specialties include depression, anxiety, trauma, relationship issues, GBTQIA, gender, and sexuality...  </p>
                  </div>
                </Col>
                <Col lg={6}>
                  <DoctorCard></DoctorCard>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="news-preview">
            <div className="news-slider">
              <Row>
                <Col>
                  <div className="section-header">
                    <h2>Catch on with news</h2>
                    <p>Lorem Ipsum is simply dummy text </p>
                  </div>
                </Col>
                <Col className="align-bottom">
                  <Link to="/news">
                    <div className="text-end align-bottom">See more</div>
                  </Link>
                </Col>
              </Row>
              <Slider {...news_settings}>
                {news.map(article => (
                  <NewsCard props={article}></NewsCard>
                ))}
              </Slider>
            </div >
          </section>
          <iframe style={{ borderRadius: 12 + 'px' }} src="https://open.spotify.com/embed/episode/5vwIdOiYyMu63ZMrFs37Nv?utm_source=generator" width="352" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </>
    )
  }
}
