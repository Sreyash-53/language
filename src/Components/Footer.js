import React from "react";
import "../style/landing.css";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer">
          <div className="company">
            <h4>COMPANY</h4>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Brand Center</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="help">
            <h4>HELP &nbsp CENTER</h4>
            <ul>
              <li>
                <a href="/">Discord</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="legal">
            <h4>LEGAL</h4>
            <ul>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Licensing</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="download">
            <h4>DOWNLOAD</h4>
            <ul>
              <li>
                <a href="/">iOS</a>
              </li>
              <li>
                <a href="/">Android</a>
              </li>
              <li>
                <a href="/">Windows</a>
              </li>
              <li>
                <a href="/">MacOS</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          Copyright &copy 2022 HEALTH/WEB&trade;. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
