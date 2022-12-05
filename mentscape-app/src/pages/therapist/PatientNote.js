import {getCurrentUser} from '../../firebase/authFunc';
import { useState, useEffect } from 'react'
import { getNoteInfo } from "../../firebase/note";



// export default async function  PatientNote() {
//     const user = getCurrentUser()
//     const Note = []
//     console.log(user.id);
//     const q = query(collection(db, "Therapist_note"), where('Therapist_id', "==",user.id));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
    
//     console.log(user.id, " => ", doc.data());
//     console.log(getNoteInfo(user.id));
// });

// return(<div>dd</div>)
// }



export default function PatientNote() {

  const [Note, setNotInfo] = useState([]);
  useEffect(() => {
    const user = getCurrentUser();
    const loadNoteInfo = async () => {
      const results = await getNoteInfo(user.id);
      setNotInfo(results);
    }
    loadNoteInfo();
  }, []);

  console.log(Note);
  return (
    <div>
    {Note.map(note => <div key={note.id}>{note.Note}</div>) }
    </div>
  )

}

