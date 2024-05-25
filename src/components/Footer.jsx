import React from "react";
import { NavLink } from "react-router-dom";

import flogo from "../images/footerlogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <footer className="px-sm-2 px-lg-5 pb-lg-5">
        <div className="footerback p-2">
          <div className="container-fluid row px-1 px-md-4 footp">
            <div className="col-12 col-lg-6">
              <div className="m-0 d-flex">
                <NavLink
                  exact="true"
                  className="p-0 brd"
                  to="/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Home"
                >
                  <img src={flogo} alt="logo" className="img-fluid" />
                </NavLink>
                <p className="h2 m-0 ms-2 fontbe">
                  CHEFS <br className="" />
                  KITCHEN
                </p>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br className="d-none d-lg-block" /> eiusmod tempor incididunt
                ut labore et dolore magna aliqua.{" "}
                <br className="d-none d-lg-block" /> Quis ipsum suspendisse
                ultrices gravida. Risus commodo viver{" "}
                <br className="d-none d-lg-block" /> ra maecenas accumsan lacus
                vel facilisis.
              </p>
            </div>
            <div className="col-12 col-lg-3 ms-auto d-flex flex-column fontbe align-self-end mt-4">
              <p className="address">
                <FaMapMarkerAlt className="me-3" />
                <span>Main Road, Building Name, Country</span>
              </p>
              <a href="email" className="address">
                <GrMail className="me-3" />
                <span>info@companyname.com</span>
              </a>
            </div>
          </div>
          <div
            className="d-flex justify-content-between flex-wrap p-4"
            style={{ lineHeight: "3pc" }}
          >
            <p className="fontbe m-0">
              © Company Name 2020. All rights reserved.
            </p>
            <div className="footericon iconh">
              <a href="/" className="px-1">
                <FaInstagram />
              </a>
              <a href="/" className="px-1">
                <FaFacebookF />
              </a>
              <a href="/" className="px-1">
                <FaTwitter />
              </a>
              <a href="/" className="px-1">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
