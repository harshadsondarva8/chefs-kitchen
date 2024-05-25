import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 p-0 mb-2 bnr">
      <div className="p-0 mt-4 pb-4 btnkd">
        <img src={props.img} alt="cardimg" className="img-fluid" />
        <div className="text-center ">
          <h1 className="fontbe">{props.title}</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do
          </p>
          <NavLink
            type="button"
            role="button"
            to="/buttons"
            className="fontbu btno btne"
          >
            Order Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
