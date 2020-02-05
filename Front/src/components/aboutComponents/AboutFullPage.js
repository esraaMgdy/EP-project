import React from "react";
import { Link } from "react-router-dom";
import "./AboutFullPage.css";
import Navbar from "./../sharedComponents/Navbar";
import About1 from "./about1.PNG";
import Img1 from "../../imgs/img-1.jpg";
import Img2 from "../../imgs/img-2.jpg";
import Img3 from "../../imgs/img-3.jpg";
import Footer from "../sharedComponents/Footer";
const AboutFullPage =()=>{
  return(
    <div className="aboutPadge">
        <Navbar />
        <section id="about">
          <header id="contactheader">
            <h1 className="headingcontact">About Us</h1>
            <p className="descTxt">
              In the history of modern astronomy, there is probably no one
              greater leap forward than the building and launch of the space
              telescope known as the Hubble.
            </p>
            <p className="down">
              <a href="#ourWork">
                <i className="fas fa-angle-double-down"></i>
              </a>
            </p>
          </header>
        </section>
        <section id="ourWork">
          <img src={About1} className="about1" />
          <div className="info">
            <h1>
              Over 2500 Courses <br></br>from 5 Platform
            </h1>
            <p>
              There is a moment in the life of any aspiring astronomer that it
              is time to buy that first telescope. It’s exciting to think about
              setting up your own viewing station. In the life of any aspiring
              astronomer that it is time to buy that first telescope. It’s
              exciting to think about setting up your own viewing station.
            </p>
            <button>Exploer Courses</button>
          </div>
        </section>
        <section className="cards">
          <div>
            <h1>Faculty Members</h1>
            <p className="aboutTxt">
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $.17 each.
            </p>
          </div>
          <div className="teamMembers">
            <div className="c1">
              <img src={Img1} />
              <h3>Ethel Davis</h3>
              <p>
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price.
              </p>
              <p id="icons">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google-plus-g"></i>
              </p>
            </div>
            <div className="c2">
              <img src={Img2} />
              <h3>Rodney Cooper</h3>
              <p>
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price.
              </p>
              <p id="icons">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google-plus-g"></i>
              </p>
            </div>
            <div className="c3">
              <img src={Img3} />
              <h3>Dora Walker</h3>
              <p>
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price.
              </p>
              <p id="icons">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google-plus-g"></i>
              </p>
            </div>
            <div className="c3">
              <img src={Img3} />
              <h3>Dora Walker</h3>
              <p>
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price.
              </p>
              <p id="icons">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google-plus-g"></i>
              </p>
            </div>
          </div>
          <div className="joinUsCard">
            <p>Do you want to join us ?</p>
            <Link to="/join-us">
              <button className="joinUsBtn">Join us</button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
  )
}

export default AboutFullPage