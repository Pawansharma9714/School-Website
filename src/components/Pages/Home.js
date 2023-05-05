import React from "react";
import Feature from "./Feature";
import About from "./About";
import Team from "./Team";
import Courses from "./Courses";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="row">
          <OwlCarousel className="owl-carousel owl-theme home-slider" items={1} dots={false} loop>
            <div className="item item-first">
              <div className="caption">
                <div className="container">
                  <div className="col-md-6 col-sm-12">
                    <h1>
IT Training Institute | Job Placements | Massive Hike</h1>
                    <h3>
                    Prepare yourself to become a competent and skilled IT Specialist that is ready for the demands and challenges of the industry.
                    </h3>
                    <a
                      href="#feature"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Discover more
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="item item-second">
              <div className="caption">
                <div className="container">
                  <div className="col-md-6 col-sm-12">
                    <h1>Start your journey with our practical courses</h1>
                    <h3>
                      Our online courses are built in partnership with
                      technology leaders and are designed to meet industry
                      demands.
                    </h3>
                    <a
                      href="#courses"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Take a course
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="item item-third">
              <div className="caption">
                <div className="container">
                  <div className="col-md-6 col-sm-12">
                    <h1>Efficient Learning Methods</h1>
                    <h3>
                    We believe in Involve active participation, such as taking notes and asking questions, and breaking down complex concepts into smaller, manageable pieces. Additionally, regular practice, repetition, and seeking feedback can enhance understanding and retention of information.{" "}
                      <a
                        href="#courses"
                        target="_parent"
                      >
                        Check out Courses
                      </a>{" "}
                      NOW!
                    </h3>
                    <a
                      href="#contact"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Let's chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
          {/* <div className="owl-carousel owl-theme home-slider">
            <div className="item item-first">
              <div className="caption">
                <div className="container">
                  <div className="col-md-6 col-sm-12">
                    <h1>Distance Learning Education Center</h1>
                    <h3>
                      Our online courses are designed to fit in your industry
                      supporting all-round with latest technologies.
                    </h3>
                    <a
                      href="#feature"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Discover more
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="item item-second">
              <div className="caption">
                <div className="container">
                  <div className="col-md-6 col-sm-12">
                    <h1>Start your journey with our practical courses</h1>
                    <h3>
                      Our online courses are built in partnership with
                      technology leaders and are designed to meet industry
                      demands.
                    </h3>
                    <a
                      href="#courses"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Take a course
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="item item-third">
              <div className="caption">
                <div className="container">
                  <div className="col-md-6 col-sm-12">
                    <h1>Efficient Learning Methods</h1>
                    <h3>
                      Nam eget sapien vel nibh euismod vulputate in vel nibh.
                      Quisque eu ex eu urna venenatis sollicitudin ut at libero.
                      Visit{" "}
                      <a
                        href=""
                        target="_parent"
                      >
                        templatemo
                      </a>{" "}
                      page.
                    </h3>
                    <a
                      href="#contact"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Let's chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <Feature />
      <About />
      {/* <Team /> */}
      <Courses />
      <Testimonial />
      <Contact />
    </>
  );
}
