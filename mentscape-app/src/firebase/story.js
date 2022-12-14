import { collection, getDocs, query, limit, doc, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase-config';

export const getStory = async patient_id => {
    const q = query(collection(db, "Patient_Story"), where("patient_id", "!=", patient_id), limit(4));
    const querySnapshot = await getDocs(q);

    // console.log(querySnapshot.docs);

    const patient_stories = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    })
    );
    return patient_stories
}

export const setNewAdvices = async (story_id, advices) => {
    await updateDoc(doc(collection(db, "Patient_Story"), story_id),
    {
        advices,
    })
}