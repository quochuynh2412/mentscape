import { Button, Card, Col, Row } from "react-bootstrap"

export const StoryItem = (props) => {
  return (
      <div>    
        <div className="story_item">
            <Row className="h-100">
                <Col xs={3} className="d-flex justify-content-center align-items-center">
              <img className="story_ava" src={props.img} alt="avatar" />
                  </Col>
                  <Col xs={9} className="px-3">
                    <Card>
                        <Card.Title className="text-start ms-3 mb-0" >Just some thoughts</Card.Title>
                          <Card.Body className="pb-0">
                              <p className="story_description text-start">React Bootstrap is maintained by a  on Github. We have a growing team and if you are interested in re-building the most popular front-end framework with React we would love to hear from you.
                              React Bootstrap is maintained by a  on Github. We have a growing team and if you are interested in re-building the most popular front-end framework with React we would love to hear from you.
                              React Bootstrap is maintained by a  on Github. We have a growing team and if you are interested in re-building the most popular front-end framework with React we would love to hear from you.</p>
                          </Card.Body>
                          <div className="input-group mb-3 px-3">
                          <input type="text" placeholder="Enter your advice" className="form-control"/>
                          <Button variant="primary" id="button-addon2">
                              Send
                          </Button>
                          </div>
                      </Card>
                  </Col>
            </Row>
        </div>
        </div>
  )
}
