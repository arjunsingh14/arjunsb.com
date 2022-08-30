import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="footer" className="mt-5">
      <h2 className="text-light text-center pt-3">Contact me</h2>
      <div className="container text-center">
        <div className="mt-4 pb-4">
          <a className="text-light p-2" href="https://github.com/arjunsingh14">
            <FaGithub className="icon" />
          </a>
          <a
            className="text-light p-2"
            href="https://www.linkedin.com/in/arjun-bhandal-1406/"
          >
            <FaLinkedin className="icon" />
          </a>
          <a className="text-light p-2" href="mailto:arjun.bhandal@ryerson.ca">
            <MdEmail className="icon" />
          </a>
        </div>
      </div>
      <hr style={{ color: "white" }} />
      <div className="container text-center text-light p-2">
        <p>Arjun Bhandal &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
