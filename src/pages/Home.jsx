import React from "react";
import icon1 from "../images/s1Icons.png";
import Hotdog from "../images/Hotdog1.png";
import Card from "../components/Card";
import Carddata from "../components/Carddata";
import CustomArrows from "../components/Slider";
import Scrolltop from "../components/Scrolltop";
import Form from "../components/Form";

const Home = () => {
  function reveal() {
    var left = document.querySelectorAll(".reveal");
    var right = document.querySelectorAll(".reveal1");

    let windowHeight = window.innerHeight;

    for (let i = 0; i < left.length; i++) {
      let elementTop = left[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        left[i].classList.add("actives");
      } else {
        left[i].classList.remove("actives");
      }
    }

    for (let i = 0; i < right.length; i++) {
      let elementTop = right[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        right[i].classList.add("actives");
      } else {
        right[i].classList.remove("actives");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <>
      <div className="Home">
        {/* section start */}
        <section className="sec1">
          <div className="container-fluid pt-3">
            <div className="row">
              <div className="fontbu align-self-center col-12 col-lg-5 ms-auto p-0 text-center">
                <span>
                  <h1 className="display-1 htital m-0">Classic </h1>
                  <h1 className="display-1 lh-1"> Hot Dogs </h1>
                </span>
                <div className="d-flex justify-content-center flex-wrap my-3 m-lg-auto">
                  <div
                    className="py-2 darkfont"
                    style={{
                      borderBottom: "1px solid #745f44",
                      borderTop: "1px solid #745f44",
                    }}
                  >
                    <p className="fontbe h3">
                      <span style={{ wordSpacing: "4px" }}>
                        Special Hot Dog
                      </span>
                      <br />
                      <span>+1 Drink+Coffee</span>
                    </p>
                    <img src={icon1} alt="icon" className="img-fluid" />
                  </div>
                  <p className="d-flex m-0">
                    <span className="display-3 fontbe mx-3">$</span>
                    <span
                      className="price fonttital lh-1"
                      style={{ fontSize: "8pc" }}
                    >
                      10
                    </span>
                  </p>
                </div>
              </div>
              <div
                className="col-12 col-lg-6 p-0"
                style={{ boxShadow: " -45px 0 0 0 rgba(176, 145, 101, 0.01)" }}
              >
                <img
                  src={Hotdog}
                  alt="Hotdogimg"
                  className="col-12 img-fluid animated"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="sec2" className="my-5">
          <div className="text-center">
            <span className="fontbe fs-4">Always Tasty Hot Gogs</span>
            <h1 className="fontbu display-5">Choose & Enjoy</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inacididunt ut labore et dolore magna aliqua. Quis{" "}
              <br className="d-none d-lg-block" /> ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.{" "}
            </p>
          </div>
          <div className="container-fluid">
            <div className="row my-auto justify-content-center py-5 px-1">
              {Carddata.map((val, index) => {
                return <Card key={index} img={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </section>

        <section id="sec3">
          <div className="container my-4">
            <div className="container-fluid row ms-2 gx-0 gx-md-5 mend">
              <div className="benar1 col-12 col-md-6 p-0 mb-4 mb-md-0 bnr p-1 reveal">
                <p className="fonttital h1 p-5">
                  <span className="fontbe darkfont fs-4">Try it today</span>
                  <br />
                  Most <br /> Popular
                  <br /> Hot Dog
                </p>
              </div>
              <div className="col-12 col-md-6 reveal1">
                <div className="benar2 mb-4 bnr">
                  <p className="fonttital h1 p-4  pb-5">
                    <span className="fontbe darkfont fs-4">Try it today</span>
                    <br />
                    More fun
                    <br /> more taste
                  </p>
                </div>
                <div className="benar3 align-self-end bnr">
                  <p className="fonttital h1 p-4 pb-5">
                    <span className="fontbe darkfont fs-4">Try it today</span>
                    <br />
                    Fresh <br />& Chili
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec4" className="my-4 my-md-">
          <div className="pt-4">
            <div className="text-center">
              <span className="fontbe darkfont fs-4">Discover</span>
              <h1 className="fontbu h1">Upcoming Events</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna{" "}
                <br className="d-none d-lg-block" /> aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.{" "}
              </p>
            </div>
            <div className="container-fluid row m-auto pt-3 pt-md-4">
              <CustomArrows />
            </div>
          </div>
        </section>

        <section id="sec6" className="backimg">
          <div className="container p-0 my-5 py-3 py-md-5">
            <div className="text-center">
              <span className="fontbe darkfont fs-4">Reservation</span>
              <h1 className="fontbu h1">Book your table</h1>
            </div>
            <Form
              className="col-12 col-lg-8 my-lg-5 pt-5 py-lg-5 needs-validation"
              part="has-validation form-floating col-12 col-md-6 py-3"
              submitbtn="col-12 col-md-6 py-3 w-md-50"
              btn="Find A Table"
            />
          </div>
        </section>
      </div>
      <Scrolltop />
    </>
  );
};
export default Home;
