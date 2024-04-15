import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const GoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const GithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        const unsSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
        });
        return () => {
            unsSubscribe();
        }
    }, [])

    const authInfo = {
        user, createUser, signIn, logout, GoogleSignIn, GithubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;