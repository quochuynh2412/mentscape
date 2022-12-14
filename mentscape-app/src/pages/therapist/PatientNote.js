import {getCurrentUser} from '../../firebase/authFunc';
import { useState, useEffect } from 'react'
import { getNoteInfo } from "../../firebase/note";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import DocSidebar from '../../components/SideBar/DocSideBar';
import { doc,addDoc,setDoc,collection,deleteDoc } from "firebase/firestore"; 
import Button from 'react-bootstrap/Button';
import { db } from '../../firebase-config';
import { Form, FormGroup} from "react-bootstrap";
import Modal from 'react-modal';
import { Card } from 'react-bootstrap';
import { Header } from '../../components/Header';



export default function PatientNote() {
  const [title, setTitle] = useState("");
  const [Name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [background, setBackground] = useState("");
  const [note,setNote] = useState("");
  const user = getCurrentUser();

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
  const [Note, setNotInfo] = useState([]);
  useEffect(() => {
    const loadNoteInfo = async () => {
      const results = await getNoteInfo(user.id);
      setNotInfo(results);
    }
    loadNoteInfo();
  }, []);




  const addNoteInfo = async (e) => {
      e.preventDefault();
      console.log(title,Name,problem,background,note);
      await addDoc(collection(db, "Therapist_note"), {
        title,
        patient_name: Name,
        background,
        problem,
        note,
        Therapist_id: user.id,
      });
      window.location.reload(false);
  }

  const deleteNoteInfo = async (id) => {
    await deleteDoc(doc(db, "Therapist_note",id));
    window.location.reload(false);

  }
  
  return (
    <>
    <Header />
    <Container fluid>
      <Row>
        <Col lg={3}><DocSidebar /></Col>
        <Col md={9}>
          <Row>
            <div class="my-4 text-end">
              <Button variant='success' size="lg" onClick={openModal}>Add note</Button>
            </div>
              <Modal isOpen={modalIsOpen}  onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <Form onsumbit={addNoteInfo}>
                  <FormGroup>
                  <h1>Note</h1>
                  <div class="mb-2 mt-2">
                  <Form.Control type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"/>
                  </div>
                  <div class="mb-2 mt-2">
                  <Form.Control type="text" id="name" value={Name} onChange={e => setName(e.target.value)} placeholder="Patient name"/>
                  </div>
                  <div class="mb-2 mt-2">
                  <Form.Control type="text" id="problem" value={problem}  onChange={e => setProblem(e.target.value)} placeholder="Patient problem"/>
                  </div>
                  <div class="mb-2 mt-2">
                  <Form.Control type="text" id="background" value={background}  onChange={e => setBackground(e.target.value)} placeholder="Patient background"/>
                  </div>
                  <div class="mb-2 mt-2">
                  <Form.Control type="text" id="note" value={note}  onChange={e => setNote(e.target.value)} placeholder="Note"/>
                  </div>
                  <Button variant="primary" className="mt-2 w-100" type="submit" name="act" onClick={addNoteInfo}>Submit</Button>
                  </FormGroup>
                </Form>
              </Modal>
           
          </Row>
          <Row>
            <div className='mt-3'>

              {Note.map(note =>
              <Card border="secondary" className="mb-4" key={note.id}>
                  <Card.Header as="h5">{note.patient_name}</Card.Header>
                <Card.Body>
                  <Card.Text><span className='fw-bold'>Background:</span> {note.background}</Card.Text>
                  <Card.Text><span className='fw-bold'>Problem:</span> {note.problem}</Card.Text>
                  <Card.Text><span className='fw-bold'>Note:</span> {note.note}</Card.Text>
                    <Button variant="danger" onClick={() => deleteNoteInfo(note.id)}>Delete</Button>
                </Card.Body>
              </Card>

              )}
              </div>
              

          </Row>
          
        </Col>
        <div className="App">
      
      
      
      
    </div>
      </Row>
    </Container>
    </>
    
  )

  

}
