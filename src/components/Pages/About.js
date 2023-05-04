import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about-info">
              <h2>
                Start your IT Career to a better life with online/offline practical
                courses
              </h2>

              <figure>
                <span>
                  <i className="fa fa-users"></i>
                </span>
                <figcaption>
                  <h3>Professional Trainers</h3>
                  <p>
                  Our Professional Trainers are highly experienced and knowledgeable experts in their respective fields, 
                  committed to delivering effective training programs tailored to your needs.
                  </p>
                </figcaption>
              </figure>

              <figure>
                <span>
                  <i className="fa fa-certificate"></i>
                </span>
                <figcaption>
                  <h3>Certifications</h3>
                  <p>
                    We provide you Training and Internship certificates which helps you to start your IT Career.
                  </p>
                </figcaption>
              </figure>

              <figure>
                <span>
                  <i className="fa fa-bar-chart-o"></i>
                </span>
                <figcaption>
                  <h3>3 Days Demo Batch</h3>
                  <p>
                   Come and join us in 3 Days Free Demo class and get insights which course suits you better.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="col-md-offset-1 col-md-4 col-sm-12">
            <div className="entry-form">
              <form action="#" method="post">
                <h2>Register for Free Demo Session</h2>
                <input
                  type="text"
                  name="full name"
                  className="form-control"
                  placeholder="Full Name"
                  required=""
                />

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your email address"
                  required=""
                />

                <input
                  type="text"
                  name="contact Number"
                  className="form-control"
                  placeholder="Contact Number"
                  required=""
                />
              {/* <select  className="form-control">
                <option value='fsk'>  Master in Full stack</option>
                <option value='fro'> Master in  Front End </option>
                <option value='flu'>  Master in Flutter</option>
                <option value='qae'>  Quality Engineer</option>                
                <option value='hik'>  200% Salary Hike in Next JOB </option>
              </select> */}
                <button className="submit-btn form-control" id="form-submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
