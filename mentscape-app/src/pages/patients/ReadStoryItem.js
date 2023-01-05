import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap"
import { setNewAdvices } from "../../firebase/story";
import { gsap } from "gsap";

export const ReadStoryItem = (props) => {
    const [advice, setAdvice] = useState("");
    const [activeSend, setActiveSend] = useState(false);
    const submitAdvice = async ({ currentTarget }) => {
        const advices = props.advices
        advices.push(advice);
        setNewAdvices(props.id, advices);
        // alert("Send advices successfully");
        setAdvice("");

        /*************************************************************** 
        * Title: Paper plane animation
        * Author: CodeFree
        * Date: 21 December 2022 
        * Code version: V1 
        * Availability: https: //codepen.io/aaroniker/pen/NWGZzXx (Accessed 1 December 2021) 
        ****************************************************************/
        if (!activeSend) {

            setActiveSend(true);

            gsap.to(currentTarget, {
                keyframes: [{
                    '--left-wing-first-x': 50,
                    '--left-wing-first-y': 100,
                    '--right-wing-second-x': 50,
                    '--right-wing-second-y': 100,
                    duration: .2,
                    onComplete() {
                        gsap.set(currentTarget, {
                            '--left-wing-first-y': 0,
                            '--left-wing-second-x': 40,
                            '--left-wing-second-y': 100,
                            '--left-wing-third-x': 0,
                            '--left-wing-third-y': 100,
                            '--left-body-third-x': 40,
                            '--right-wing-first-x': 50,
                            '--right-wing-first-y': 0,
                            '--right-wing-second-x': 60,
                            '--right-wing-second-y': 100,
                            '--right-wing-third-x': 100,
                            '--right-wing-third-y': 100,
                            '--right-body-third-x': 60
                        })
                    }
                }, {
                    '--left-wing-third-x': 20,
                    '--left-wing-third-y': 90,
                    '--left-wing-second-y': 90,
                    '--left-body-third-y': 90,
                    '--right-wing-third-x': 80,
                    '--right-wing-third-y': 90,
                    '--right-body-third-y': 90,
                    '--right-wing-second-y': 90,
                    duration: .2
                }, {
                    '--rotate': 50,
                    '--left-wing-third-y': 95,
                    '--left-wing-third-x': 27,
                    '--right-body-third-x': 45,
                    '--right-wing-second-x': 45,
                    '--right-wing-third-x': 60,
                    '--right-wing-third-y': 83,
                    duration: .25
                }, {
                    '--rotate': 55,
                    '--plane-x': -8,
                    '--plane-y': 24,
                    duration: .2
                }, {
                    '--rotate': 40,
                    '--plane-x': 45,
                    '--plane-y': -180,
                    '--plane-opacity': 0,
                    duration: .3,
                    onComplete() {
                        setTimeout(() => {
                            currentTarget.removeAttribute('style');
                            gsap.fromTo(currentTarget, {
                                opacity: 0,
                                y: -8
                            }, {
                                opacity: 1,
                                y: 0,
                                clearProps: true,
                                duration: .3,
                                onComplete() {
                                    setActiveSend(false);
                                }
                            })
                        }, 2000)
                    }
                }]
            })

            gsap.to(currentTarget, {
                keyframes: [{
                    '--text-opacity': 0,
                    '--border-radius': 0,
                    '--left-wing-background': "#133FC0",
                    '--right-wing-background': "#133FC0",
                    duration: .1
                }, {
                    '--left-wing-background': "#275EFE",
                    '--right-wing-background': "#275EFE",
                    duration: .1
                }, {
                    '--left-body-background': "#2055EE",
                    '--right-body-background': "#133FC0",
                    duration: .4
                }, {
                    '--success-opacity': 1,
                    '--success-scale': 1,
                    duration: .25,
                    delay: .25
                }]
            })

        }
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
                          <button id="button-addon2" className="send-btn" onClick={submitAdvice}>
                                  <span className="default">Send</span>
                                  <span className="success">Sent</span>
                                  <div className="left"></div>
                                  <div className="right"></div>
                          </button>
                          </div>
                      </Card>
                  </Col>
            </Row>
        </div>
        </div>
  )
}
