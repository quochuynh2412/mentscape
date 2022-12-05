import { collection, getDocs, query, where, } from "firebase/firestore";
import { db } from '../firebase-config';
export const getNoteInfo = async Therapist_id => {
    const q = query(collection(db, "Therapist_note"), where("Therapist_id", "==", "ImJXLPio8qVWCLYJ6ss1FafOf1g2"));
    const querySnapshot = await getDocs(q);

    // console.log(querySnapshot.docs);

    const therapist_notes = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    })
    );
    return therapist_notes
}