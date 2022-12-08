import TherapistCard from '../../components/Therapist_Card/Therapist_card.js';
import stockData from '../../data/therapist.json';
import "../../css/Vinh_css.css";
import { Card, Col, Container, Row } from 'react-bootstrap';
import StickyBox from "react-sticky-box";
function Search() {
    return (
        <Container className='main-container' fluid>
            <Container >
                <Row>
                    <Col md={3} >
                        <StickyBox>
                            <Card className="search-filter">
                                <Card.Header>
                                    <Card.Title>
                                        <h4 className="card-title mb-0">Search Filter</h4>
                                    </Card.Title>
                                </Card.Header>
                                <div className="card-body">
                                    <div className="filter-widget">
                                        <div className="cal-icon">
                                            <input type="text" className="form-control datetimepicker" placeholder="Select Date" />
                                        </div>
                                    </div>
                                    <div className="filter-widget">
                                        <h4>Gender</h4>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark"></span> Male Doctor
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark"></span> Female Doctor
                                            </label>
                                        </div>
                                    </div>
                                    <div className="filter-widget">
                                        <h4>Select Specialist</h4>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" />
                                                <span className="checkmark"></span> Urology
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" />
                                                <span className="checkmark"></span> Neurology
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" />
                                                <span className="checkmark"></span> Dentist
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" />
                                                <span className="checkmark"></span> Orthopedic
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" />
                                                <span className="checkmark"></span> Cardiologist
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" />
                                                <span className="checkmark"></span> Cardiologist
                                            </label>
                                        </div>
                                    </div>
                                    <div className="btn-search">
                                        <button type="button" className="btn btn-block">Search</button>
                                    </div>
                                </div>
                            </Card>
                        </StickyBox>
                    </Col>
                    <Col md={9} className="therapist-list-container">
                        {/* <div className="row border bgBlue sort ">
                    <select id="sort" name="sort" className="form-select ">
                        <option selected>Sort By</option>
                        <option value="name">Name</option>
                        <option value="rating">Rating</option>
                        <option value="pricelh">Price low to high</option>
                        <option value="pricehl">Price high to low</option>
                        <option value="distance">Distance</option>
                    </select>
                    </div> */}
                        {stockData.map(data => (
                            <TherapistCard id={data.id} avatar={data.avatar} first_name={data.first_name} last_name={data.last_name} location={data.location} specialized={data.specialized} education={data.education} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Search;
