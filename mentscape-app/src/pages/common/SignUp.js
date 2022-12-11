import { Link } from "react-router-dom";
import default_pic from "../../assets/img/default_profile.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import { specialties } from "../../data/const"
import { firebaseSignout, firebaseSignUp } from "../../firebase/authFunc";
import { uploadFile } from "../../firebase/uploadFile";
import { db } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { Header } from "../../components/Header";


export const SignUp = ({ isDoctor }) => {
  const navigate = useNavigate()

  // User Input
  const [avatar, setAvatar] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cv_link, setCvLink] = useState('');
  const [description, setDescription] = useState('');
  const [focusSpecialty, setFocusSpecialty] = useState(
    new Array(specialties.length).fill(false)
  );

  const finalSpecialty = [];
  const returnFinalSpecialty = () => {
    for (let i = 0; i < focusSpecialty.length; i++) {
      if (focusSpecialty[i]) {
        finalSpecialty.push(specialties[i]);
      }
    }
    return finalSpecialty
  }

  const handleCheckChange = (position) => {
    const updatedCheckedState = focusSpecialty.map((item, index) =>
      index === position ? !item : item
    );
    setFocusSpecialty(updatedCheckedState);
  }

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
  }

  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === true) {

      const userId = await firebaseSignUp(email, password);
      const profilePictureUrl = avatar ? await uploadFile(avatar, 'profilePictures') : null;

      if (!isDoctor) {
        await setDoc(doc(db, 'User', userId), {
          email,
          fullname,
          age,
          phone,
          address,
          role: "patient",
          profile_pic: profilePictureUrl
        });
      } else {
        returnFinalSpecialty();
        await setDoc(doc(db, 'User', userId), {
          email,
          fullname,
          age,
          phone,
          address,
          cv_link,
          description,
          role: "therapist",
          profile_pic: profilePictureUrl,
          date_available: null,
          approved: false,
          specialties : finalSpecialty
        });
      }

      alert('Account created successfully');
      await firebaseSignout();
      navigate('/login');
    }
    setValidated(true);
  };


  return (
    <>
    <Header />
      <div className="content">
        <Container>
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
                  <Form.Label className="required">Email</Form.Label>
                  <Form.Control type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" required/>
                  <Form.Control.Feedback type="invalid">
                    Please enter your email address
                  </Form.Control.Feedback>
                </Col>
                <Col xs={12} className="mb-2">
                  <Form.Label className="required">Password</Form.Label>
                <Form.Control type="password" id="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
                  <Form.Control.Feedback type="invalid">
                    Password must be at least 8 characters, contain at least 1 lowercase character, 1 uppercase letter, and 1 digit
                  </Form.Control.Feedback>
                </Col>
                <Col xs={12} className="mb-2">
                  <Form.Label className="required">Full Name</Form.Label>
                <Form.Control type="text" id="fullname" value={fullname} placeholder="Customer name" onChange={e => setFullname(e.target.value)} required/>
                  <Form.Control.Feedback type="invalid">
                    Please provide your full name
                  </Form.Control.Feedback>
                </Col>
                <Col md={6} className="mb-2">
                  <Form.Label className="required">Age</Form.Label>
                  <Form.Control type="number" id="age" value={age} onChange={e => setAge(e.target.value)} placeholder="Age" min="1" required/>
                  <Form.Control.Feedback type="invalid">
                    Please provide your age
                  </Form.Control.Feedback>
                </Col>
                <Col md={6} className="mb-2">
                  <Form.Label className="required">Phone Number</Form.Label>
                <Form.Control type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone number" required/>
                  <Form.Control.Feedback type="invalid">
                    Please provide your phone number
                  </Form.Control.Feedback>
                </Col>
                <Col xs={12} className="mb-2">
                  <Form.Label>Address</Form.Label>
                <Form.Control type="text" id="address" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address"/>
                </Col>

                {isDoctor && 
                  <>
                    <Col xs={12} className="mb-2">
                      <Form.Label className="required">CV Link</Form.Label>
                  <Form.Control type="text" id="cv" value={cv_link} onChange={e => setCvLink(e.target.value)} placeholder="CV link" required />
                    </Col>
                    <Col xs={12} className="mb-2">
                      <Form.Label className="required">Description</Form.Label>
                  <Form.Control as="textarea" id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required/>
                    </Col>
                  <Col xs={12} className="mb-2 ">
                      <Form.Label>Specialties</Form.Label>
                      {specialties.map(( (specialty, index) => {
                          return (
                            <div key={specialty} className="mb-3">
                              <input type="checkbox" checked={focusSpecialty[index]} onChange={() => handleCheckChange(index)} />
                              <label className="ms-2">{specialty} </label>
                            </div>)
                        }))
                    }
                    </Col>
                  </>
                }

                <Col xs={12} className="mb-2">
                  <Button variant="primary" className="mt-2 w-100" type="submit" name="act">Register</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </div>
      </>
  )
}
