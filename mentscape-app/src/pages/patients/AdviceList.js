import React from 'react'
import { Header } from '../../components/Header';
import Advice from './Advice';
import { getCurrentUser } from '../../firebase/authFunc';
import { getStory } from '../../firebase/myStory';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Container, Form, FormGroup} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { addDoc,collection } from "firebase/firestore"; 
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
          <Container className="mb-3 mt-3">
            <div className='text-end'>
              <Button variant='success' size="lg" onClick={openModal}>Add story</Button>
            </div>
          <Modal isOpen={modalIsOpen}  onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
            <Form onSubmit={addStory} >
              <FormGroup>
                  <h1>My story</h1>
                  <div className="mb-2 mt-2">
                    <Form.Control type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"/>
                  </div>
                  <div className="mb-2 mt-2">
                    <Form.Control type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"/>
                  </div>
                  <div className="mt-3">
                    <h4>Choose an avatar for your story:</h4>
                    </div>
                    <div className="form-check form-check-inline">
                        <Form.Check type="radio" id="inline" name="story_ava" value="/img/story_ava/ava1.png" onChange={() => setStory_ava("/img/story_ava/ava1.png")} />
                        <img src="/img/story_ava/ava1.png"  width="100" height="100" alt="ava-1"/> 
                    </div>
                    <div className="form-check form-check-inline">
                        <Form.Check type="radio"  id="inline" name="story_ava" onChange={()=> setStory_ava("/img/story_ava/ava2.png")} value="/img/story_ava/ava2.png"  />
                <img src="/img/story_ava/ava2.png" width="100" height="100" alt="ava-2" /> 
                    </div>
                    <div className="form-check form-check-inline">
                        <Form.Check type="radio" id="inline" name="story_ava" onChange={() => setStory_ava("/img/story_ava/ava3.png")} value="/img/story_ava/ava3.png" />
                <img src="/img/story_ava/ava3.png" width="100" height="100" alt="ava-3" /> 
                    </div>
                    <div className="form-check form-check-inline">
                        <Form.Check type="radio" id="inline" name="story_ava" onChange={() => setStory_ava("/img/story_ava/ava4.png")} value="/img/story_ava/ava4.png"/>
                <img src="/img/story_ava/ava4.png" width="100" height="100" alt="ava-4" /> 
                    </div>
                    <Button variant="primary" className="mt-2 w-100" type="submit" name="act" onSubmit={addStory} >Submit</Button>
                </FormGroup>
            </Form>
          </Modal>

          {Story.map(story => <Advice {...story} key={story.id}/>)}
      </Container>
      </>
  )
}
