import { Container, Card, Row, Col } from "react-bootstrap";

export const Comment = (props) => {

    return (
        <Container className="py-5" style={{alignItems: 'center' }}>
        <Row className="justify-content-center">
          <Col md="12" lg="10">
            <Card className="text-dark">
              <Card.Body className="p-4">
                <h4 className="mb-0">
                  Recent comments
                </h4>
                <p className="fw-light mb-4 pb-2">
                </p>

                <div className="d-flex flex-start">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://tse4.mm.bing.net/th?id=OIP.4TJLgIdQDKHOaaZ9tN5pGAHaHw&pid=Api&P=0"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold mb-1">
                      Friendly user
                    </h6>
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
              </Card.Body>

            </Card>
          </Col>
        </Row>
      </Container>


    )    
}