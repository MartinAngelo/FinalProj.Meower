import React from "react";
import Nav from "../Components/nav";

import bg from '../pic/bg.jpg'

export default function Home() {
  return (
    <div className="bg">
      <Nav />
      
      <img src={bg} width="100%" height="100%"  alt="pic"/>
     


    </div>
  );
}
