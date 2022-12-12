
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import React, { useState, useEffect } from 'react';
import { Comment } from "./Comment";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,

} from "mdb-react-ui-kit";
import { getCurrentUser } from '../../firebase/authFunc';
import { getStory } from '../../firebase/myStory';

const Advice = (props) => {
    const [open, setOpen] = useState(false);
  return (
      <section>

          <div className="container my-5 py-5" key={story.id}>
            <div className="row d-flex justify-content-center">
              <div class="col-md-12 col-lg-10 col-xl-8">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-start align-items-center">
                      <img class="rounded-circle shadow-1-strong me-3"
                        src="https://tse4.mm.bing.net/th?id=OIP.4TJLgIdQDKHOaaZ9tN5pGAHaHw&pid=Api&P=0" alt="avatar" width="60"
                        height="60" />
                      <div>
                        <p class="text-muted small mb-0"></p>
                      </div>
                    </div>
                        <p class="mt-3 mb-4 pb-2">
                          {props.story}
                      </p>
                  </div>
                  <div class="card-footer py-3 border-0" >
                  <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          View advices
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
          {/* <Comment/> */}
          <MDBContainer className="py-5" style={{alignItems: 'center' }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10">
            <MDBCard className="text-dark">
              <MDBCardBody className="p-4">
                <MDBTypography tag="h4" className="mb-0">
                  Recent comments
                </MDBTypography>
                <p className="fw-light mb-4 pb-2">
                </p>

                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://tse4.mm.bing.net/th?id=OIP.4TJLgIdQDKHOaaZ9tN5pGAHaHw&pid=Api&P=0"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h6" className="fw-bold mb-1">
                      Friendly user
                    </MDBTypography>
                    <div className="d-flex align-items-center mb-3">

                    </div>
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it.
                    </p>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
       
      
      </MDBContainer>
      
  
          </div>
        </Collapse>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </section> 
  )
}

export default Advice;

