import React, { createContext, useState, useEffect } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { toast } from 'react-toastify';

export const AuthProvider = createContext();

const UseContext = ({children}) =>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);

    // createUserWithEmailAndPassword
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // signInWithEmailAndPassword

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuthStateChanged UseEffect 
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            console.log('onAuthStateChanged UseEffect', currentUser);
            setUser(currentUser)
        })
    },[])


    // singOut
     const logOut = () => {
        return signOut(auth)
    }


const [products, setPorduct] = useState([])
    // Home data loader in useEffect 
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setPorduct(data))
            .catch(error => {
                console.error(error)
        })
    }, [products]);


    const authInfo = { createUser, signIn, user, logOut, products }




    return(
        <AuthProvider.Provider value={authInfo}>
            {
                children
            }
        </AuthProvider.Provider>
    )
}

export default UseContext;