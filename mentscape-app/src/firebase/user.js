import { db } from '../firebase-config';
import { doc, getDoc } from "firebase/firestore";
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