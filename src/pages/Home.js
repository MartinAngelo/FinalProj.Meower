import React from "react";
import Nav from "../Components/nav";

import bg from '../pic/frontbg.png'

export default function Home() {
  return (
    <div >
      <Nav />
      <div className="image">
        <img src={bg} width="100%" height="100%" alt="pic" />
       

      </div>
    </div >
  );
}
