import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./aboutUs.css"
const Aboutus =()=>{
  return (
    <div className="aboutUs">
      <h1 className="head-about">WE Are EP.IT Members</h1>
      <p className="mission">We aim to enrich the Arabic content</p>
      <Link to="/aboutUs-2">
        <button className="readmore">Read More</button>
      </Link>
    </div>
  );
}


