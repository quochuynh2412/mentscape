import { Link } from "react-router-dom";
import default_pic from "../../assets/img/default_profile.jpeg";
import "../../css/style.css"
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { specialties } from "../../data/const"

export const SignUp = ({ isDoctor }) => {
  const [avatar, setAvatar] = useState();
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
      <div className="content">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">User Register</li>
          </ol>
          <div className="p-5 info-box">
          <Form noValidate validated={validated} onSubmit={handleSubmit} encType="multipart/form-data">
              <h2 className="text-center">Register for new account</h2>
              <Row>
                <Col xs={12} className="mb-2 d-flex justify-content-center">
                  <div className="my-4 profile-picture">
                    <label htmlFor="img-file">
                      <span>Change Image</span>
                    </label>
                    <input type="file" id="img-file" name="profile-img" onChange={handlePreviewAvatar} required />
                    <img src={avatar ? avatar.preview : default_pic} alt="profile avatar" />
                    <Form.Control.Feedback type="invalid" className="text-center">
                      Please provide a profile image.
                    </Form.Control.Feedback>
                  </div>
                </Col>
                <Col xs={12} className="mb-2">
                  <Form.Label htmlFor="email" className="required">Email</Form.Label>
                  <Form.Control type="email" id="email" name="email" placeholder="Email address" required/>
                  <Form.Control.Feedback type="invalid">
                    Please enter your email address
                  </Form.Control.Feedback>
                </Col>
                <Col xs={12} className="mb-2">
                  <Form.Label htmlFor="password" className="required">Password</Form.Label>
                <Form.Control type="password" id="password" name="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
                  <Form.Control.Feedback type="invalid">
                    Password must be at least 8 characters, contain at least 1 lowercase character, 1 uppercase letter, and 1 digit
                  </Form.Control.Feedback>
                </Col>
                <Col xs={12} className="mb-2">
                  <Form.Label htmlFor="name" className="required">Full Name</Form.Label>
                  <Form.Control type="text" id="name" name="name" placeholder="Customer name" required/>
                  <Form.Control.Feedback type="invalid">
                    Please provide your full name
                  </Form.Control.Feedback>
                </Col>
                <Col md={6} className="mb-2">
                  <Form.Label htmlFor="age" className="required">Age</Form.Label>
                  <Form.Control type="number" id="age" name="age" placeholder="Age" min="1" required/>
                  <Form.Control.Feedback type="invalid">
                    Please provide your age
                  </Form.Control.Feedback>
                </Col>
                <Col md={6} className="mb-2">
                  <Form.Label htmlFor="phone" className="required">Phone Number</Form.Label>
                  <Form.Control type="tel" id="phone" name="phone" placeholder="Phone number" required/>
                  <Form.Control.Feedback type="invalid">
                    Please provide your phone number
                  </Form.Control.Feedback>
                </Col>
                <Col xs={12} className="mb-2">
                  <Form.Label htmlFor="address">Address</Form.Label>
                  <Form.Control type="text" id="address" name="address" placeholder="Address"/>
                </Col>

                {isDoctor && 
                  <>
                    <Col xs={12} className="mb-2">
                      <Form.Label htmlFor="cv" className="required">CV Link</Form.Label>
                      <Form.Control type="text" id="cv" name="cv" placeholder="CV link" />
                    </Col>
                    <Col xs={12} className="mb-2">
                      <Form.Label htmlFor="description" className="required">Description</Form.Label>
                      <Form.Control as="textarea" id="description" name="description" placeholder="Description" />
                    </Col>
                    <Col xs={12} className="mb-2">
                      <Form.Label>Specialties</Form.Label>
                    <Form.Select aria-label="Specialties options">
                        <option>Choose your specialty</option>
                        {
                        specialties.map(specialty => 
                          <option value={specialty}>{specialty}</option>)
                        }
                      </Form.Select>
                    </Col>
                  </>
                }

                <Col xs={12} className="mb-2">
                  <button className="mt-2 w-100 btn btn-primary" type="submit" name="act">Register</button>
                </Col>
              </Row>
              </Form>
          </div>
        </div>
      </div>
  )
}
