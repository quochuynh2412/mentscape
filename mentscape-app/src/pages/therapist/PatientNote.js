import { doc, getDoc, setDoc, collection, getDocs,query,where, } from "firebase/firestore";
import { db, auth } from '../../firebase-config';
import {getCurrentUserInfo, getUserInfo} from '../../firebase/user';
import {getCurrentUser} from '../../firebase/authFunc';
import { useState, useEffect } from 'react'

const getNoteInfo = async Therapist_id => {
    const docSnap = await getDoc(doc(db, "Therapist_note", Therapist_id));

    const userInfo = docSnap.data();

    if (!userInfo) return null;

    return {
        ...userInfo,
        id: docSnap.id,
    };
    
}

export default async function  PatientNote() {
    const user = getCurrentUser()
    const Note = []
    console.log(user.id);
    const q = query(collection(db, "Therapist_note"), where('Therapist_id', "==",user.id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    
    console.log(user.id, " => ", doc.data());
    console.log(getNoteInfo(user.id));
});

return(<div>dd</div>)
}



export const DisplayNote = () => {

    const [Note, setNotInfo] = useState({});
    useEffect(() => {
      const loadNoteInfo = async () => {
        const results = await getNoteInfo();
        setNotInfo(results);
      }
      loadNoteInfo();
    }, []);
    return (<div>{Note.Note}</div>)
}

