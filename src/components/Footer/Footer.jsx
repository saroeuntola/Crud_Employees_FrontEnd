import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsGithub } from "react-icons/bs";
import "./Footer.css";
const Footer = (props) => {
  return (
    <footer className={`main-footer ${props.darkMode ? "dark" : ""}`}>
      <section className="container py-5">
        <div className="row px-sm-5">
          <div className="phone col-lg-3 col-md-6 col-sm-12 mb-sm-3">
            <h5>Phone</h5>
            <p>+855 88-989-0692</p>
          </div>

          <div className="email col-lg-3 col-md-6 col-sm-12 mb-sm-3">
            <h5>Email</h5>
            <p>saroeuntola123@gmail.com</p>
            <p>tolasweatboy@gmail.com</p>
          </div>

          <div className="follow col-lg-3 col-md-6 col-sm-12 mb-sm-4">
            <h5 className="">Follow Me</h5>
            <div className="icon d-flex gap-2 mt-2">
              <a href="https://web.facebook.com/Lee.Taehun377/" target="blank">
                <FaFacebook size={25} color="276ADE" />
              </a>
              <a href="https://www.instagram.com/la_smokeyy_/" target="blank">
                <BsInstagram size={25} color="C95835" />
              </a>

              <a href="https://github.com/saroeuntola" target="blank">
                <BsGithub size={25} color="1D1E1F" />
              </a>
            </div>
          </div>

          <div className="powered col-lg-3 col-md-6 col-sm-12 mt-sm-2">
            <p>© 2035 By Saroeun Tola.</p>
            <p>
              Powered and secured by{" "}
              <a href="https://github.com/" target="blank">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
