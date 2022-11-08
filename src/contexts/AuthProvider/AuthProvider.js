import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

 const [user, setUser] = useState(null);
    
//google
const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
}

//log out
const logOut = () => {
    return signOut(auth);
}

useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    console.log('hi', currentUser);
})
return () => {
    unsubscribe();
}
},[])

   const authInfo = {
    user,
    providerLogin,
    logOut,
};

    return (
<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
    );
};

export default AuthProvider;