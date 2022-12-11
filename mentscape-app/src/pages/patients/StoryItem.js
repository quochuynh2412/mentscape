import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap"
import { setNewAdvices } from "../../firebase/story";

export const StoryItem = (props) => {
    const [advice, setAdvice] = useState("");
    const submitAdvice = async (e) => {
        const advices = props.advices
        // console.log(props)
        advices.push(advice);
        // console.log(advices);
        setNewAdvices(props.id, advices);
        alert("Send advices successfully");
        setAdvice("");
    }
  return (
      <div>    
        <div className="story_item">
            <Row className="h-100">
                <Col xs={3} className="d-flex justify-content-center align-items-center">
              <img className="story_ava" src={props.story_ava} alt="avatar" />
                  </Col>
                  <Col xs={9} className="px-3">
                    <Card>
                        <Card.Title className="text-start ms-3 mb-0" >{props.title}</Card.Title>
                          <Card.Body className="pb-0">
                              <p className="story_description text-start">{props.description}</p>
                          </Card.Body>
                          <div className="input-group mb-3 px-3">
                              <input type="text" placeholder="Enter your advice" className="form-control" value={advice} onChange={e => setAdvice(e.target.value)} />
                          <Button variant="primary" id="button-addon2" onClick={submitAdvice}>
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
