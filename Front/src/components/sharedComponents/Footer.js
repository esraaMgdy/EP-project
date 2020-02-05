import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footerBody">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12 col">
            <h4>Top Products</h4>
            <ul>
              <li>
                <a className="footerLink" href="#">Managed Website</a>
              </li>
              <li>
                <a className="footerLink" href="#">Manage Reputation</a>
              </li>
              <li>
                <a className="footerLink" href="#">Power Tools</a>
              </li>
              <li>
                <a className="footerLink" href="#">Marketing Service</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12 col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a className="footerLink" href="#">Jobs</a>
              </li>
              <li>
                <a className="footerLink" href="#">Brand Assets</a>
              </li>
              <li>
                <a className="footerLink" href="#">Investor Relations</a>
              </li>
              <li>
                <a className="footerLink" href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12 col">
            <h4>Features</h4>
            <ul>
              <li>
                <a className="footerLink" href="#">Jobs</a>
              </li>
              <li>
                <a className="footerLink" href="#">Brand Assets</a>
              </li>
              <li>
                <a className="footerLink" href="#">Investor Relations</a>
              </li>
              <li>
                <a className="footerLink" href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12 col">
            <h4>Resources</h4>
            <ul>
              <li>
                <a className="footerLink" href="#">Guides</a>
              </li>
              <li>
                <a className="footerLink" href="#">Research</a>
              </li>
              <li>
                <a className="footerLink" href="#">Experts</a>
              </li>
              <li>
                <a className="footerLink" href="#">Agencies</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-12 col">
            <h4>Newsletter</h4>
            <p>You can trust us. we only send promo offers,</p>
            <form className="footerForm">
              <input
                className="footer-input"
                type="text"
                placeholder="Your Email Address"
              />
              <button>Submit</button>
            </form>
          </div>
          <div className="social col-xl-12">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
