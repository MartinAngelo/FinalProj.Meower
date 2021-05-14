import React from "react";
import { Link } from "react-router-dom";

import firebase from "../utils/firebase";

export default function nav() {
  const signout = () => {

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}

return (
    <div class="navigate">
        <h1 class="logo">faceboot</h1>
        <ul>
            <li><Link to="/home"> HOME </Link></li>
            <li><Link to="/Messages">MESSAGES</Link></li>
            <li><Link to="/notifications">NOTIFICATIONS</Link></li>
            <li><Link to="/profile">PROFILE</Link></li>
            <li>
              <button onClick={signout}>SIGN OUT</button>
            </li>
           
        </ul>
    </div>
)
}
