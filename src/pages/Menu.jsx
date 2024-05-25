import React from "react";
import "atropos/css";
import company from "../images/silider1.jpg";
import Scrolltop from "../components/Scrolltop";

const Menu = () => {
  return (
    <>
      <div className="h-100 w-100 mt-lg-5 pt-lg-5">
        <div className="mt-lg-5 pt-5">
          <h1
            className="display-1 htital m-0 text-center fontbu text-effect"
            style={{ color: "#b09165" }}
          >
            <span>C</span>
            <span>o</span>
            <span>m</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>y</span>
            <span> </span>
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>f</span>
            <span>i</span>
            <span>l</span>
            <span>e</span>
          </h1>
          <div id="demo" className=""></div>
        </div>
        <div id="demo" className="container-fluid">
          <div className="atropos my-atropos col-12 col-lg-10 m-auto ">
            <div className="atropos-scale p-sm-5 p-4">
              <div className="atropos-rotate">
                <div className="atropos-inner">
                  <img
                    src={company}
                    className="w-100 imgcom"
                    data-atropos-opacity="0.8;1"
                    alt="company"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scrolltop />
    </>
  );
};
export default Menu;
