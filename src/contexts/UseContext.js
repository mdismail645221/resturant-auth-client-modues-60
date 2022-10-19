import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import {getAuth} from 'firebase/auth'


const AuthProvider = createContext();

const UseContext = ({children}) =>{

    const [user, setUser] = useState({name: 'abc'});
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app)



    const authInfo = { user }




    return(
        <AuthProvider.Provider value={authInfo}>
            {
                children
            }
        </AuthProvider.Provider>
    )
}

export default UseContext;