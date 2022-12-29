import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { Comment } from "./Comment";

export default function Advice(props) {
 
  const [open, setOpen] = useState(false); 
  return (
    <div className="mb-2 py-4">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-lg-10 col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-start align-items-center">
                <img className="rounded-circle shadow-1-strong me-3"
                  src={props.story_ava} alt="avatar" width="60"
                  height="60" />
                <div>
                  <h4>{props.title}</h4>
                  <p className="text-muted small mb-0"></p>
                </div>
              </div>
                  <p className="mt-3 mb-4 pb-2">
                  {props.description}
                </p>
            </div>
            <div className="card-footer py-3 border-0" >
              <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}> View advices </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  {props.advices.map((advice, index) => <Comment advice={advice} key={index}/>)}
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
     
  )
}
