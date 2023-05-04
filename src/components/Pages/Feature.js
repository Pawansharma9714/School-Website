import React from "react";

export default function Feature() {
  return (
    <section id="feature">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>01</span>
              <h3>
              <a href="#courses" className="smoothScroll">
              Trending Courses
              </a>
              </h3>
              <p>
              Enroll in one of our Trending Courses today and gain the competitive edge you need to succeed in your career.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>02</span>
              <h3>Live Class & Real Time Projects</h3>
              <p>
              Experience the best of both worlds with our Live Class & Real-Time Projects, designed to give you hands-on training and real-world experience.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>03</span>
              <h3>Certified Trainers</h3>
              <p>
              Our Certified Trainers are highly qualified professionals who are dedicated to providing quality education and training to help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
