import { db } from '../firebase-config';
import { doc, getDocs, getDoc, setDoc, addDoc, deleteDoc, where, query } from "firebase/firestore";
import { collection } from 'firebase/firestore';
import { getUserInfo } from './user';
import { async } from '@firebase/util';
import { faL } from '@fortawesome/free-solid-svg-icons';
export class Appointment {
    constructor(creation_date, date, note, patient_id, problem, status, therapist_id) {
        this.creation_date = creation_date;
        this.date = date;
        this.note = note;
        this.patient_id = patient_id;
        this.problem = problem;
        this.status = status;
        this.therapist_id = therapist_id;
    }
}
export async function getAppointments(isPatient, userId) {
    const searchRole = isPatient ? "patient_id" : "therapist_id";
    const querySnapshot = await getDocs(query(collection(db, "Appoinment"), where(searchRole, "==", userId)));
    const apm = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    })
    );
    return apm
}
export async function getAvailability(id) {
    const docSnap = await getDoc(doc(db, "Therapist_Available", id));
    const availability = docSnap.data();
    return availability;
}
const appointmentConverter = {
    toFirestore: (apm) => {
        return {
            creation_date: apm.creation_date,
            date: apm.date,
            note: apm.note,
            patient_id: apm.patient_id,
            problem: apm.problem,
            status: apm.status,
            therapist_id: apm.therapist_id
        };
    },
    // fromFirestore: (snapshot, options) => {
    //     const data = snapshot.data(options);
    //     return new Appointment();
    // }
};

export async function addAppointment(apm) {
    const ref = await addDoc(collection(db, "Appoinment").withConverter(appointmentConverter), apm);
    if (ref) {
        return true;
    } else {
        return false;
    }
}

export const deleteAppoinment = async (id) => {
    await deleteDoc(doc(db, "Appoinment", id));
}
export async function cancelAppointment(id) {
    const ref = doc(db, "Appoinment", id)
    setDoc(ref, { status: "cancelled" }, { merge: true })
}