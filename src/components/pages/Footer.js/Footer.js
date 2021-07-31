import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaPencilAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media-wrap">
        <div className="footer-logo">
          <Link to="/" className="social-logo">
            <FaPencilAlt className="navbar-icon" />
            Counsly
          </Link>
        </div>

        <small className="website-terms">
          <Link to="/terms" class="website-terms">
            Terms of Service
          </Link>
        </small>

        <small className="website-terms">
          <Link to="/policy" class="website-terms">
            Privacy Policy
          </Link>
        </small>

        <small className="website-rights">Counsly © 2021</small>
        <div className="social-icons">
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook />
          </Link>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </Link>
          {/* <Link
            className="social-icon-link"
            to={
              "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
            }
            target="_blank"
            aria-label="Youtube"
          >
            <FaYoutube />
          </Link> */}
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>
          {/* <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
