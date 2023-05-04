import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonial() {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>
                Student Reviews <small>from around the world</small>
              </h2>
            </div>

            <OwlCarousel className="owl-theme" items={3}>
              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="tst-image">
                    <img
                      src="/assets/images/tst-image1.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="tst-author">
                    <h4>Ravi</h4>
                    <span>Flutter Developer</span>
                  </div>
                  <p>
                  The institute's facilities were top-notch, with well-equipped classrooms and modern training tools.
                   The staff was friendly and helpful, and they always went out of their way to ensure that we had a
                    comfortable and productive learning environment.
                  </p>
                  <div className="tst-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="tst-image">
                    <img
                      src="/assets/images/tst-image3.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="tst-author">
                    <h4>Sonal</h4>
                    <span>Senior Software Engineer</span>
                  </div>
                  <p>
                  I recently took a course at this training institute with the goal of increasing my salary in my next job switch,
                   and I have to say that it was one of the best decisions I've ever made. The course was specifically designed to help individuals like myself learn the skills and strategies 
                  needed to negotiate a higher salary and succeed in the job market.
                  </p>
                  <div className="tst-rating">
                  <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="tst-image">
                    <img
                      src="/assets/images/tst-image2.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="tst-author">
                    <h4>Nitin</h4>
                    <span>Fullstack Developer</span>
                  </div>
                  <p>
                  I recently completed a course at this training institute and I must say that I am thoroughly impressed with the
                   quality of education and training provided. The instructors were extremely knowledgeable and experienced, 
                  and they made the learning experience engaging and interactive.
                  </p>
                  <div className="tst-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>

            

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="tst-image">
                    <img
                      src="/assets/images/tst-image4.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="tst-author">
                    <h4>Abdul</h4>
                    <span>Frontend Developer</span>
                  </div>
                  <p>
                  I recently took a course at this training institute with the goal of increasing my salary in my next job switch,
                   and I have to say that it was one of the best decisions I've ever made. The course was specifically designed to help individuals like myself learn the skills and strategies 
                  needed to negotiate a higher salary and succeed in the job market.
                  </p>
                  <div className="tst-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
