import { collection, getDocs, query, where, } from "firebase/firestore";
import { db } from '../firebase-config';

export const getStory = async Patient_id => {
    const q = query(collection(db, "Patient_Story"), where("patient_id", "==", Patient_id));
    const querySnapshot = await getDocs(q);
    console.log(Patient_id)

    // console.log(querySnapshot.docs);

    const patient_story = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        
    })

    );
    return patient_story
}