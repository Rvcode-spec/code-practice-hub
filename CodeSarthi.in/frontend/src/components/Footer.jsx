import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTelegram } from "react-icons/fa";
import Logoimg from "./img/Logo/logo.png";

function Footer() {
  return (
    <footer className="footer-color mt-auto py-5">
      <Container>
        <Row className="align-items-start">
          {/* Left Section */}
          <Col md={4} className="mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <img
                src={Logoimg}
                alt="CodeSarthi Logo"
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
              />
              <h5 className="ms-3 mb-0">CodeSarthi</h5>
            </div>
            <p className="fs-6">
              We understand that every student has unique needs and abilities, that’s why our curriculum is designed to adapt to your needs and help you grow!
            </p>
            <h5 className="mt-4">Let’s get social:</h5>
            <div className="d-flex gap-3 fs-5 mt-2">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaTwitter />
              <FaTelegram />
            </div>
          </Col>

          {/* Right Section */}
          <Col md={8}>
            <Row>
              {/* Company Section */}
              <Col xs={6} md={4} className="mb-4">
                <h5>Company</h5>
                <ul className="list-unstyled fs-6 mt-3">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Careers</li>
                  <li>Updates</li>
                  <li>Account Deletion</li>
                </ul>
              </Col>

              {/* Our Centres Section */}
              <Col xs={6} md={4} className="mb-4">
                <h5>Our Centres</h5>
                <ul className="list-unstyled fs-6 mt-3">
                  <li>New Delhi</li>
                </ul>
              </Col>

              {/* Popular Exams Section */}
              <Col xs={6} md={4} className="mb-4">
                <h5>Popular Exams</h5>
                <ul className="list-unstyled fs-6 mt-3">
                  <li>IIT JEE</li>
                  <li>NEET</li>
                  <li>GATE</li>
                  <li>Defence</li>
                  <li>UPSC</li>
                  <li>School Prep</li>
                </ul>
              </Col>
            </Row>

            {/* Connect With Us */}
            <Row className="mt-4">
              <Col xs={12} md={4}>
                <h5>Connect With Us</h5>
                <ul className="list-unstyled fs-6 mt-3">
                  <li>Email Us</li>
                  <li>Talk to A Counselor</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
