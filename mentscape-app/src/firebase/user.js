import { db } from '../firebase-config';
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { getCurrentUser } from './authFunc';

export const getUserInfo = async usedId => {
    const docSnap = await getDoc(doc(db, "User", usedId));

    const userInfo = docSnap.data();

    if (!userInfo) return null;

    return {
        ...userInfo,
        id: docSnap.id,
    };

}

export const getCurrentUserInfo = async () => {
    const currentUser = getCurrentUser();
    if (!currentUser) return null;
    return await getUserInfo(currentUser.id);
}

export async function getUserList(isPatient) {
    const apm = [];
    const querySnapshot = await getDocs(collection(db, "User"));
    if (isPatient) {
        querySnapshot.forEach(doc => {
            if (doc.data().role === "patient") {
                apm.push({
                    ...doc.data(),
                    id: doc.id
                });
            }
        });
    } else {
        querySnapshot.forEach(doc => {
            if (doc.data().role === "therapist") {
                apm.push({
                    ...doc.data(),
                    id: doc.id
                });
            }
        });
    }
    return apm;
}