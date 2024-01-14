import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import eng from "../assets/eng.png";
import kh from "../assets/Flag_of_Cambodia.svg.png";
// import on from '../assets/switch-on.png'
// import off from "../assets/switch-off.png";
// import { FaToggleOn, FaToggleOff } from "react-icons/fa";
const Navbar = (props) => {

  // const handleChangeDarkMode = ()=>{
  //   props.toggleDarkMode();
  // }
  const [Flag, setFlag] = useState(false);
  const handleFlagClick = () => {
    setFlag(!Flag);
    localStorage.setItem("flag", !Flag);
  };
  useEffect(() => {
    const storedFlag = localStorage.getItem("flag");
    if (storedFlag !== null) {
      setFlag(storedFlag === "true");
    }
  }, []);

  return (
    <header className="mb-5">
      <nav
        className={`navbar navbar-expand-lg fixed-top py-3 px-5 ${
          props.darkMode ? "dark" : "bg-light"
        }`}
      >
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link className="navbar-brand brand_name" to="/">
              Coffee
            </Link>
          </div>

          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close shadow-none border-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 px-4">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Add New
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About Us
                  </a>
                </li>
              </ul>

              <div
                className="nav-icon d-flex align-items-center gap-2 mt-md-4 ps-3 mt-lg-0"
                onClick={handleFlagClick}
              >
                <div>
                  <img
                    className="eng-logo"
                    src={Flag ? eng : kh}
                    alt={Flag ? "eng" : "kh"}
                  />
                </div>
              </div>

              {/* <div onClick={handleChangeDarkMode}>
                {props.darkMode ? <FaToggleOn color="blue" /> : <FaToggleOff />}
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
