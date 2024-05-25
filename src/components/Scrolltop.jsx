import React from "react";
import $ from "jquery";
import { IoIosArrowUp } from "react-icons/io";

$(window).scroll(function () {
  if ($(this).scrollTop() >= 300) {
    $("#return-to-top").fadeIn(200);
  } else {
    $("#return-to-top").fadeOut(200);
  }
});
$("#return-to-top").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 500);
});

const Scrolltop = () => {
  return (
    <span id="return-to-top">
      <IoIosArrowUp className="i" />
    </span>
  );
};

export default Scrolltop;
