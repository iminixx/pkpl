import React from "react";
import "../css/style.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-5 text-center">
            <img
              src="src/img/logo-ilab.png"
              alt="ILab Logo"
              width="70"
              height="30"
              className="mb-3 logo-ilab"
            />
            <p className="text-muted">Copyright 2022</p>
          </div>
          <div className="col-md-2">
            <h5>Services</h5>
            <ul className="list-unstyled text-small">
              <li>Email Marketing</li>
              <li>Campaign</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Follow Us</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a href="#">
                  <img
                    src="src/img/logo-facebook.png"
                    alt="Facebook"
                    className="me-1"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="src/img/logo-twitter.png"
                    alt="Twitter"
                    className="me-1"
                  />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="src/img/logo-instagram.png"
                    alt="Instagram"
                    className="me-1"
                  />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
