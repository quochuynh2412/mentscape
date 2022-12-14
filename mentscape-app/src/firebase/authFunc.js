import { useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { Navigate } from 'react-router-dom';

export const firebaseSignUp = async (email, password) => {
    //tao trong db auth
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    const userId = userCredential.user.uid;
    //tra ve uid
    return userId;
};

// check uid???
export const firebaseLogIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // console.log(email)
    // console.log(password)
    console.log(userCredential)

    const userId = userCredential.user.uid;
    return userId;
};

export const firebaseSignout = async () => {
    try {
        await signOut(auth);
        // Navigate('/')

    } catch (error) {
        throw new Error('Error signing out');
    }
}
//??? chuc nang la gi the
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

// lay data cua user bay gio
export const getCurrentUser = () => {
    // console.log(auth);
    const user = auth.currentUser;
    if (!user) return null;
    return {
        id: user.uid,
    }
}

// check user xem ton tai k ???
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
