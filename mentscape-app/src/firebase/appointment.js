import { db } from '../firebase-config';
import { doc, getDocs, getDoc, setDoc, addDoc } from "firebase/firestore";
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
    const apm = [];
    const querySnapshot = await getDocs(collection(db, "Appoinment"));
    if (isPatient) {
        querySnapshot.forEach(doc => {
            if (doc.data().patient_id === userId) {
                apm.push(doc.data());
                console.log(true)
            }
        });
    } else {
        querySnapshot.forEach(doc => {
            if (doc.data().therapist_id === userId) {
                apm.push(doc.data());
            }
        });
    }
    return apm;
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