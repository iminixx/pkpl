import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import teamMember1 from "../img/9.jpg";
import teamMember2 from "../img/9.jpg";
import teamMember3 from "../img/9.jpg";
import "../css/aboutus.css";

const About = () => {
  return (
    <div>
      <div className="about-us-container">
        <div className="hero-section">
          <h1>About Us</h1>
          <p>
            Welcome to our company! We are dedicated to providing the best
            outdoor products to ensure your adventures are safe and enjoyable.
            Our mission is to inspire and equip outdoor enthusiasts with
            high-quality gear.
          </p>
        </div>
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={teamMember1} alt="Team Member 1" />
              <h3>Jane Doe</h3>
              <p>CEO & Founder</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="team-member">
              <img src={teamMember2} alt="Team Member 2" />
              <h3>John Smith</h3>
              <p>Head of Marketing</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="team-member">
              <img src={teamMember3} alt="Team Member 3" />
              <h3>Emily Johnson</h3>
              <p>Lead Designer</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import Navbar from "../components/navbar";

// const About = () => {
//   return (
//     <div>
//       <Navbar />
//       <h2>About Us</h2>
//       <p>Learn more about our company here.</p>
//     </div>
//   );
// };

// export default About;
