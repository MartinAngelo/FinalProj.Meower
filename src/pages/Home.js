import React from "react";
import Nav from "../Components/nav";

import bg from '../pic/poster.jpg'

export default function Home() {
  return (
    <div >
      <Nav />
      <div className="image">
        <img src={bg} width="100%" height="100%" alt="pic" />
        <h1 ><span>
          MovieFlix
          </span>
        </h1>

      </div>
    </div >
  );
}
