import {getCurrentUser} from '../../firebase/authFunc';
import { useState, useEffect } from 'react'
import { getNoteInfo } from "../../firebase/note";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import DocSidebar from '../../components/SideBar/DocSideBar';
import { doc,addDoc,setDoc,collection,deleteDoc } from "firebase/firestore"; 
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { db } from '../../firebase-config';
import { Form, FormGroup} from "react-bootstrap";



export default function PatientNote() {
  const [title, setTitle] = useState("");
  const [Name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [background, setBackground] = useState("");
  const [note,setNote] = useState("");
  const user = getCurrentUser();
  const [Note, setNotInfo] = useState([]);
  useEffect(() => {
    const loadNoteInfo = async () => {
      const results = await getNoteInfo(user.id);
      setNotInfo(results);
    }
    loadNoteInfo();
  }, []);

  console.log(Note);
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
  }

  const deleteNoteInfo = async (e) => {
    e.preventDefault();
    await deleteDoc(doc(db, "cities", note.id));

  }
  

 

  return (
    <Container fluid>
      <Row>
        <Col lg={3}><DocSidebar /></Col>
        <Col md={9}>
          <Row>
            {Note.map(note => <Alert variant='info'>
              <Alert.Heading> <div key={note.id}>{note.title}</div></Alert.Heading>
              <div>
                <div key={note.id}>Patient name: {note.patient_name}</div> 
                <div key={note.id}>Background: {note.background}</div>
                <div key={note.id}>Problem: {note.problem}</div>  
                <div key={note.id}>Note: {note.note}</div> 
              </div>
              <hr />
              <div className="mb-0"><Button variant="outline-secondary">Delete</Button></div>
             </Alert>) }
          </Row>
          <Row>
            <Form onsumbit={addNoteInfo}>
              <FormGroup>
              <Form.Control type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"/>
              <Form.Control type="text" id="name" value={Name} onChange={e => setName(e.target.value)} placeholder="Patient name"/>
              <Form.Control type="text" id="problem" value={problem}  onChange={e => setProblem(e.target.value)} placeholder="Patient problem"/>
              <Form.Control type="text" id="background" value={background}  onChange={e => setBackground(e.target.value)} placeholder="Patient background"/>
              <Form.Control type="text" id="note" value={note}  onChange={e => setNote(e.target.value)} placeholder="Note"/>
              <Button variant="primary" className="mt-2 w-100" type="submit" name="act" onClick={addNoteInfo}>Submit</Button>
              </FormGroup>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
    
  )

  

}
