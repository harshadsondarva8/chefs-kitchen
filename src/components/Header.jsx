import React from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";

import { BsPlus } from "react-icons/bs";
import logo from "../images/logo.png";
import phonel from "../images/Phone Icon.png";

const Header = () => {
  $(function () {
    $("#menuicon").click(function () {
      $("#menuicon").toggleClass("change");
    });
    window.onscroll = () => {
      let header = document.getElementById("header");
      let nav = document.getElementById("navbar");
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        header?.classList?.add("header-top");
        nav?.classList?.remove("pt-lg-4");
      } else {
        header?.classList?.remove("header-top");
        nav?.classList?.add("pt-lg-4");
      }
    };
  });

  return (
    <>
      <header className="fontbe  navb" id="header">
        <nav className="navbar navbar-expand-lg p-1 p-md-2" id="navbar">
          <div
            className="container-fluid d-flex d-lg-grid mx-sm-4"
            style={{ gridAutoFlow: "column" }}
          >
            <div className="navbar-brand m-0 col-auto d-flex">
              <NavLink
                className="p-0 brd"
                to="/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Home"
              >
                <img src={logo} alt="logo" className="img-fluid" />
              </NavLink>
              <p className="h2 m-0 ms-2">
                CHEFS <br className="" />
                KITCHEN
              </p>
            </div>
            <button
              id="menuicon"
              className="menu d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Navbar"
              aria-controls="Navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="bit-1"></div>
              <div className="bit-2"></div>
              <div className="bit-3"></div>
            </button>
            <div
              className="collapse navbar-collapse col-auto flex-column text-center"
              id="Navbar"
            >
              <div className="row ms-auto text-end my-2 d-none d-lg-flex">
                <p
                  className="d-flex flex-column col-auto h5 m-0 p-0 align-self-end"
                  style={{ color: "#b09165" }}
                >
                  <span className="">Express delivery</span>
                  <span className="h3 m-0 fw-semibold">+1 234 567 890</span>
                </p>
                <img
                  src={phonel}
                  alt="phone logo"
                  className="col-auto img-fluid"
                />
              </div>
              <ul className="navbar-nav pt-2 pt-lg-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/menu"
                    id="Dropdownlink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                    <BsPlus />
                  </NavLink>
                  <ul
                    className="dropdown-menu text-center"
                    aria-labelledby="Dropdownlink"
                    id="showr"
                  >
                    <li className="nav-item">
                      <NavLink
                        className="nav-link dropdown-item"
                        to="/menu/CompanyProfile"
                      >
                        Company Profile
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ourstory">
                    Our Story{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
