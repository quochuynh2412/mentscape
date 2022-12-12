import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
  
  } from "mdb-react-ui-kit";

export const Comment = (props) => {

    
    
    return (
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


    )    
}