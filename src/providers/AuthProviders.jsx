import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
    const [flag, setFlag] = useState(false);
    const [user, setUser] = useState(null)

    const createUser = (name, p_url, email, password) => {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                //console.log(result.user);
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: p_url
                })
                .then(() => {
                    //console.log("profile updated");
                    setFlag(true)
                    //resolve(result); // Resolve the outer promise with the result
                })
                .catch(error => {
                    console.error(error);
                    reject(error); // Reject the outer promise with the error
                });
            })
            .catch(error => {
                console.error(error);
                reject(error); // Reject the outer promise with the error
            });
        });
    };
    

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
    }, [flag])

    const authInfo = {
        user, createUser, signIn, logout, GoogleSignIn, GithubSignIn, flag
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;