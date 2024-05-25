import React from "react";
import Scrolltop from "../components/Scrolltop";

const Ourstory = () => {
  return (
    <>
      <section className="p-0 wow fadeIn mt-lg-5 pt-lg-5">
        <div className="container-fluid mt-lg-5 pt-lg-3">
          <div className="row">
            <div className="col-12 h-px p-0">
              <iframe
                title="map"
                className="w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.6820205692!2d70.75125561952338!3d22.27363079367063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1654145845652!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Scrolltop />
    </>
  );
};
export default Ourstory;
