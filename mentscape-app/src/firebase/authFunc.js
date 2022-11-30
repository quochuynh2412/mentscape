import { useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase-config";

// export const firebaseSignUp = async (email, password) => {
//     const userCredential = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//     );
//     const userId = await userCredential.user.uid;
//     return userId;
// };

export const firebaseLogIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;
    return userId;
};

export const firebaseSignout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw new Error('Error signing out');
    }
}

export const addAuthListener = (callback) => {
    const onChange = (user) => {
        if (user) {
            callback({});
        } else {
            callback(null);
        }
    }

    return onAuthStateChanged(auth, onChange)
}

export const getCurrentUser = () => {
    const user = auth.currentUser;
    if (!user) return null;
    return {
        id: user.uid,
    }
}

export const useAuth = () => {
    const [authInfo, setAuthInfo] = useState(() => {
        const user = getCurrentUser();
        const isLoading = !user;
        return { isLoading, user };
    });

    useEffect(() => {
        const unsubscribe = addAuthListener(user => {
            setAuthInfo({ isLoading: false, user });
        });

        return unsubscribe;
    }, []);

    return authInfo;
}
