import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import React, { useState, useEffect } from 'react';
import { Comment } from "./Comment";
import {getCurrentUser} from '../../firebase/authFunc';
import { getStory } from '../../firebase/myStory';


export default function Advice() {
  // if (getCurrentUser().id == null) {
  //   console.log("v2312");
  // } else {console.log("may")};
  const userID = getCurrentUser().id;
    const [open, setOpen] = useState(false);
 

   
  const [Story, setStory] = useState([]);
  useEffect(() => {
    const loadStory = async (userID) => {
      const user = getCurrentUser();
      console.log(userID);
      const results = await getStory(userID);
      setStory(results);
    }
    loadStory(userID);
    
  }, []);

  return (
      <section>
        {Story.map(story =>
          <div className="container my-5 py-5">
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
                          {story.description}
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
          <Comment/>
  
          </div>
        </Collapse>
                  </div>
                </div>
              </div>
              </div>
              </div>
        )}
              </section> 
  )
}
