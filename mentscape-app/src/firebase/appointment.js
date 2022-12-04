import { db } from '../firebase-config';
import { doc, getDocs } from "firebase/firestore";
import { collection } from 'firebase/firestore';
import { getUserInfo } from './user';
export async function getAppointments() {
    const apm = [];
    const querySnapshot = await getDocs(collection(db, "Appoinment"));
    querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        apm.push(doc.data());
    });
    return apm;
}