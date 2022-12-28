import TherapistCard from '../../components/Therapist_Card/Therapist_card.js';
import "../../css/Vinh_css.css";
import { Card, Col, Container, Row } from 'react-bootstrap';
import StickyBox from "react-sticky-box";
import { getUserInfo } from '../../firebase/user.js';
import { useEffect, useState } from 'react';
import { getUserList } from '../../firebase/user.js';
import { Header } from '../../components/Header.js';
function Search() {
    var gender_type = new Array();
    var speacialties = new Array();
    const [therapistData, setTherapistData] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        const loadTherapist = async () => {
            const data = await getUserList(false);
            setTherapistData(data)
            setData(data)
        }
        loadTherapist();
    }, [])
    const filterData = (filterFields) => {
        const result = therapistData.filter((therapist) => {
            return therapist.speacialties.some(item => filterFields.includes(item))
        })
        setData(result);
    }
    function changeField(event) {
        if (event.target.checked) {
            if (event.target.name === "gender_type") {
                const data = event.target.value
                gender_type.push(data);
            } else {
                const data = event.target.value
                speacialties.push(data);
            }
        } else {
            if (event.target.name === "gender_type") {
                const data = event.target.value
                var index = gender_type.indexOf(data);
                if (index > -1) {
                    gender_type.splice(index, 1);
                }
            } else {
                const data = event.target.value
                var index = speacialties.indexOf(data);
                if (index > -1) {
                    speacialties.splice(index, 1);
                }
            }
        }
    }
    return (
        <>
        <Header />
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
                                                <input type="checkbox" name="gender_type" value="male" onChange={changeField} />
                                                <span className="checkmark"></span> Male Doctor
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" value="female" onChange={changeField} />
                                                <span className="checkmark"></span> Female Doctor
                                            </label>
                                        </div>
                                    </div>
                                    <div className="filter-widget">
                                        <h4>Select Specialist</h4>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" value="depression" onChange={changeField} />
                                                <span className="checkmark"></span> Depression
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" value="cognitive" onChange={changeField} />
                                                <span className="checkmark"></span> Cognitive
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" value="counselling" onChange={changeField} />
                                                <span className="checkmark"></span> Counselling
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" value="developmental" onChange={changeField} />
                                                <span className="checkmark"></span> Developmental
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" value="clinical" onChange={changeField} />
                                                <span className="checkmark"></span> Clinical
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="select_specialist" value="adhd" onChange={changeField} />
                                                <span className="checkmark"></span> ADHD
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
                        <Row>
                        {data.map(therapist => (
                            <TherapistCard {...therapist} />
                        ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    );
}
export default Search;
