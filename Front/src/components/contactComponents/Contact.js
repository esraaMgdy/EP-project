import React, { Component } from "react";
import "./Contact.css";
import Navbar from "./../sharedComponents/Navbar";
import Anime from "react-anime";
import Footer from "../sharedComponents/Footer";
export default class Contact extends Component {
  render() {
    return (
      <div id="contactfile">
        <Navbar />
        <header id="contactheader">
          <h1 className="headingcontact">Contact Us</h1>
          <p>
            In the history of modern astronomy, there is probably no one greater
            leap forward than the building and launch of the space telescope
            known as the Hubble.
          </p>
          <p className="down">
            <a href="#contactform">
              <i className="fas fa-angle-double-down"></i>
            </a>
          </p>
        </header>
        <section id="contactform">
          <h1>Contact Us</h1>
          <form className="contactForm">
            <input
              className="contactInput"
              type="text"
              placeholder="YourName .."
            />
            <br></br>
            <input
              className="contactInput"
              type="email"
              placeholder="Email.."
            />
            <br></br>
            <textarea></textarea>
            <br></br>
            <button className="send">send</button>
            <br></br>
          </form>
        </section>
        <Footer />
      </div>
    );
  }
}
