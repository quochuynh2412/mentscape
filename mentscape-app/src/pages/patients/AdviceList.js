import React from 'react'
import { Header } from '../../components/Header';
import Advice from './Advice';
import { getCurrentUser } from '../../firebase/authFunc';
import { getStory } from '../../firebase/myStory';
import { useState, useEffect } from 'react';
import { getCurrentUserInfo } from '../../firebase/user';
import Modal from 'react-modal';
import { Form, FormGroup} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { doc,addDoc,setDoc,collection, } from "firebase/firestore"; 
import { db } from '../../firebase-config';

export const AdviceList = () => {
    const user = getCurrentUser();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [story_ava,setStory_ava] = useState("");
    console.log(title,description);

    const customStyles = {
        content: {
          width: "80%",
          height: "50%",
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          outerWidth: '80%'
        },
      };

     //function to make popup form
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
      setIsOpen(true);
    }
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
    function closeModal() {
      setIsOpen(false);
    }
//

const addStory = async (e) => {
    e.preventDefault();
   
    await addDoc(collection(db, "Patient_Story"), {
      title: title,
      description: description,
      patient_id: user.id,
      story_ava: story_ava,
      advices: [],
    });
    console.log(title,description);
    console.log(story_ava);
    window.location.reload(false);
    
  }

    const [Story, setStory] = useState([]);
  useEffect(() => {
    const loadStory = async () => {
      const results = await getStory(user.id);
      setStory(results);
    }
    loadStory();

  }, []);
  return (
      <>
          <Header />
          <div class="mb-3 mt-3">
          <Button variant='success float-end' size="lg" onClick={openModal}>Add story</Button>
          <Modal isOpen={modalIsOpen}  onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
            <Form onSubmit={addStory} >
              <FormGroup>
                  <h1>My story</h1>
                  <div class="mb-2 mt-2">
                    <Form.Control type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"/>
                  </div>
                  <div class="mb-2 mt-2">
                    <Form.Control type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"/>
                  </div>
                  <div class="mt-3">
                    <h4>Choose an avatar for you story:</h4>
                    </div>
                    <div class="form-check form-check-inline">
                        <Form.Check type="radio" id="inline" name="story_ava" value="/img/story_ava/ava1.png" onChange={() => setStory_ava("/img/story_ava/ava1.png")} />
                        <img src="/img/story_ava/ava1.png"  width="100" height="100"/> 
                    </div>
                    <div class="form-check form-check-inline">
                        <Form.Check type="radio"  id="inline" name="story_ava" onChange={()=> setStory_ava("/img/story_ava/ava2.png")} value="/img/story_ava/ava2.png"  />
                        <img src="/img/story_ava/ava2.png"  width="100" height="100"/> 
                    </div>
                    <div class="form-check form-check-inline">
                        <Form.Check type="radio" id="inline" name="story_ava" onChange={() => setStory_ava("/img/story_ava/ava3.png")} value="/img/story_ava/ava3.png" />
                        <img src="/img/story_ava/ava3.png"  width="100" height="100"/> 
                    </div>
                    <div class="form-check form-check-inline">
                        <Form.Check type="radio" id="inline" name="story_ava" onChange={() => setStory_ava("/img/story_ava/ava4.png")} value="/img/story_ava/ava4.png"/>
                        <img src="/img/story_ava/ava4.png"  width="100" height="100"/> 
                    </div>
                    <Button variant="primary" className="mt-2 w-100" type="submit" name="act" onSubmit={addStory} >Submit</Button>
                </FormGroup>
            </Form>
          </Modal>
        </div>
          <div>
          {Story.map(story => <Advice {...story} />)}
          </div>
      </>
  )
}
