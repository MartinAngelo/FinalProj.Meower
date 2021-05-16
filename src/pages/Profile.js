import React, {useEffect, useState} from 'react'
import Nav from "../Components/nav"

import firebase from "../utils/firebase";

export default function Profile() {

    const [state, setState] = useState({
        user: null
    })
    
    useEffect(() => {
        var signedUser = firebase.auth().currentUser;
    
        if (signedUser) {
            // User is signed in.
            setState({user : signedUser})
        } else {
            // No user is signed in.
            setState(null)
        }
    }, [])
    


    return (
        <div>
            <Nav />
            <h1 class="welcome">Welcome   {state.user ? state.user.email : "null"}</h1>
            <p class="tag">Account Details</p>
            
        </div>
    )
}
