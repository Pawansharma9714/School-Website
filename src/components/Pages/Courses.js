import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Courses() {
  return (
    <>
      <style jsx>{`
        .owl-theme .owl-nav [class*="owl-"] {
          background: #d6d6d6 !important;
        }
      `}</style>
      <section id="courses">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="section-title">
                <h2>
                  Popular Courses
                  <small>Start your IT Career with Top Trending/High paying courses</small>
                </h2>
              </div>

              <OwlCarousel
                className="owl-theme"
                items={3}
                nav={true}
                dots={false}
                loop
              >
                <div className="col-md-4 col-sm-4">
                  <div className="item">
                    <div className="courses-thumb">
                      <div className="courses-top">
                        <div className="courses-image">
                          <img
                            src="/assets/images/courses-image1.jpg"
                            className="img-responsive"
                            alt="Master in .Net Full Stack"
                          />
                        </div>
                        <div className="courses-date">
                          <span>
                            <i className="fa fa-calendar"></i> 12 / 06 / 2023
                          </span>
                          <span>
                            <i className="fa fa-clock-o"></i> 1 Hours
                          </span>
                        </div>
                      </div>

                      <div className="courses-detail">
                        <h3>
                          <a href="#">Master in .Net Full Stack</a>
                        </h3>
                        <p>
                        A .NET Full-Stack Developer is a professional who has expertise in developing software applications using the Microsoft .NET framework. They are skilled in both front-end and back-end development, and can work with a variety of tools and technologies such as C#, ASP.NET, MVC, Angular, and React. They are responsible for designing, developing, and deploying web applications, ensuring they meet the required standards and specifications. They collaborate with other members of the development team, and may also be involved in testing and debugging the application.
                        </p>
                      </div>

                      <div className="courses-info">
                        <div className="courses-author">
                          <img
                            src="/assets/images/author-image1.jpg"
                            className="img-responsive"
                            alt=""
                          />
                          <span>Full Stack Expert</span>
                        </div>
                        <div className="courses-price">
                          <a href="#about" className="smoothScroll">
                          <span>INR 999</span>
                         </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="item">
                    <div className="courses-thumb">
                      <div className="courses-top">
                        <div className="courses-image">
                          <img
                            src="/assets/images/courses-image2.jpg"
                            className="img-responsive"
                            alt="No 1 IT Institute in Surat"
                          />
                        </div>
                        <div className="courses-date">
                          <span>
                            <i className="fa fa-calendar"></i> 12 / 06 / 2023
                          </span>
                          <span>
                            <i className="fa fa-clock-o"></i> 1 Hours
                          </span>
                        </div>
                      </div>

                      <div className="courses-detail">
                        <h3>
                          <a href="#">Master in Flutter</a>
                        </h3>
                        <p>
                        A Flutter Developer is a professional who specializes in developing mobile applications using the Flutter framework. They have expertise in developing cross-platform applications for iOS and Android using a single codebase. They are skilled in both front-end and back-end development, and can work with a variety of tools and technologies such as Dart, Firebase, and Flutter widgets. They are responsible for designing, developing, and deploying mobile applications, ensuring they meet the required standards and specifications. They collaborate with other members of the development team, and may also be involved in testing and debugging the application.
                        </p>
                      </div>

                      <div className="courses-info">
                        <div className="courses-author">
                          <img
                            src="/assets/images/author-image2.jpg"
                            className="img-responsive"
                            alt="No 1 IT Institute in Surat"
                          />
                          <span>Flutter Expert</span>
                        </div>
                        <div className="courses-price">
                        <a href="#about" className="smoothScroll">
                          <span>INR 999</span>
                         </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="item">
                    <div className="courses-thumb">
                      <div className="courses-top">
                        <div className="courses-image">
                          <img
                            src="/assets/images/courses-image3.jpg"
                            className="img-responsive"
                            alt="No 1 IT Institute in Surat"
                          />
                        </div>
                        <div className="courses-date">
                          <span>
                            <i className="fa fa-calendar"></i> 15 / 8 / 2018
                          </span>
                          <span>
                            <i className="fa fa-clock-o"></i> 6 Hours
                          </span>
                        </div>
                      </div>

                      <div className="courses-detail">
                        <h3>
                          <a href="#">Massive Salary Hike</a>
                        </h3>
                        <p>
                        "Massive Hike Formula" which is a deep strategic program for working professionals to attract 🧲 more Interview calls & then closing them with Highest CTC Offer Letters 
                        </p>
                      </div>

                      <div className="courses-info">
                        <div className="courses-author">
                          <img
                            src="/assets/images/author-image3.jpg"
                            className="img-responsive"
                            alt="No 1 Hike Specialist in Surat"
                          />
                          <span>Hike Specialist </span>
                        </div>
                        <div className="courses-price free">
                        <a href="#about" className="smoothScroll">
                          <span>INR 999</span>
                         </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="item">
                    <div className="courses-thumb">
                      <div className="courses-top">
                        <div className="courses-image">
                          <img
                            src="/assets/images/courses-image4.jpg"
                            className="img-responsive"
                            alt="Master in Frontend and Get Secured in IT Career"
                          />
                        </div>
                        <div className="courses-date">
                          <span>
                            <i className="fa fa-calendar"></i> 10 / 8 / 2023
                          </span>
                          <span>
                            <i className="fa fa-clock-o"></i> 2 Hours
                          </span>
                        </div>
                      </div>

                      <div className="courses-detail">
                        <h3>
                          <a href="#">Master in Frontend</a>
                        </h3>
                        <p>
                        A Frontend Developer is a professional who specializes in developing the user interface and user experience of a website or application. They are skilled in programming languages such as HTML, CSS, and JavaScript, and have expertise in front-end frameworks such as React, Angular, and Vue. They are responsible for designing and developing the visual elements of a website or application, ensuring they are user-friendly, responsive, and accessible. They collaborate with other members of the development team, including designers and back-end developers, to ensure a seamless user experience. They also test and debug the front-end code to ensure it meets the required standards and specifications.
                        </p>
                      </div>

                      <div className="courses-info">
                        <div className="courses-author">
                          <img
                            src="/assets/images/author-image1.jpg"
                            className="img-responsive"
                            alt="Master in Frontend"
                          />
                          <span>Frontend Expert</span>
                        </div>
                        <div className="courses-price">
                        <a href="#about" className="smoothScroll">
                          <span>INR 999</span>
                         </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="item">
                    <div className="courses-thumb">
                      <div className="courses-top">
                        <div className="courses-image">
                          <img
                            src="/assets/images/courses-image5.jpg"
                            className="img-responsive"
                            alt="Master in  QA Engineer"
                          />
                        </div>
                        <div className="courses-date">
                          <span>
                            <i className="fa fa-calendar"></i> 5 / 07 / 2023
                          </span>
                          <span>
                            <i className="fa fa-clock-o"></i> 1 Hours
                          </span>
                        </div>
                      </div>

                      <div className="courses-detail">
                        <h3>
                          <a href="#">Master in  &amp; QA Engineer</a>
                        </h3>
                        <p>
                        A QA (Quality Assurance) is a professional who is responsible for ensuring that a product or service meets the required quality standards before it is released to the customers. In the software industry, a QA is a key member of the development team who performs various tests on the software product to identify and report defects or issues. They work closely with the development team to ensure that the product meets the requirements and specifications, and also ensure that it is user-friendly and meets the expected performance criteria. A QA may also be responsible for creating and maintaining test plans, test cases, and test scripts, and for analyzing and reporting test results.
                        </p>
                      </div>

                      <div className="courses-info">
                        <div className="courses-author">
                          <img
                            src="/assets/images/author-image2.jpg"
                            className="img-responsive"
                            alt="Master in QA Engineer"
                          />
                          <span>Senior QA</span>
                        </div>
                        <div className="courses-price free">
                        <a href="#about" className="smoothScroll">
                          <span>INR 999</span>
                         </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>

              {/* <div className="owl-carousel owl-theme owl-courses">
              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="courses-thumb">
                    <div className="courses-top">
                      <div className="courses-image">
                        <img
                          src="/assets/images/courses-image1.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="courses-date">
                        <span>
                          <i className="fa fa-calendar"></i> 12 / 7 / 2018
                        </span>
                        <span>
                          <i className="fa fa-clock-o"></i> 7 Hours
                        </span>
                      </div>
                    </div>

                    <div className="courses-detail">
                      <h3>
                        <a href="#">Social Media Management</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    <div className="courses-info">
                      <div className="courses-author">
                        <img
                          src="/assets/images/author-image1.jpg"
                          className="img-responsive"
                          alt=""
                        />
                        <span>Mark Wilson</span>
                      </div>
                      <div className="courses-price">
                        <a href="#">
                          <span>USD 25</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="courses-thumb">
                    <div className="courses-top">
                      <div className="courses-image">
                        <img
                          src="/assets/images/courses-image2.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="courses-date">
                        <span>
                          <i className="fa fa-calendar"></i> 20 / 7 / 2018
                        </span>
                        <span>
                          <i className="fa fa-clock-o"></i> 4.5 Hours
                        </span>
                      </div>
                    </div>

                    <div className="courses-detail">
                      <h3>
                        <a href="#">Graphic & Web Design</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    <div className="courses-info">
                      <div className="courses-author">
                        <img
                          src="/assets/images/author-image2.jpg"
                          className="img-responsive"
                          alt=""
                        />
                        <span>Jessica</span>
                      </div>
                      <div className="courses-price">
                        <a href="#">
                          <span>USD 80</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="courses-thumb">
                    <div className="courses-top">
                      <div className="courses-image">
                        <img
                          src="/assets/images/courses-image3.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="courses-date">
                        <span>
                          <i className="fa fa-calendar"></i> 15 / 8 / 2018
                        </span>
                        <span>
                          <i className="fa fa-clock-o"></i> 6 Hours
                        </span>
                      </div>
                    </div>

                    <div className="courses-detail">
                      <h3>
                        <a href="#">Marketing Communication</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    <div className="courses-info">
                      <div className="courses-author">
                        <img
                          src="/assets/images/author-image3.jpg"
                          className="img-responsive"
                          alt=""
                        />
                        <span>Catherine</span>
                      </div>
                      <div className="courses-price free">
                        <a href="#">
                          <span>Free</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="courses-thumb">
                    <div className="courses-top">
                      <div className="courses-image">
                        <img
                          src="/assets/images/courses-image4.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="courses-date">
                        <span>
                          <i className="fa fa-calendar"></i> 10 / 8 / 2018
                        </span>
                        <span>
                          <i className="fa fa-clock-o"></i> 8 Hours
                        </span>
                      </div>
                    </div>

                    <div className="courses-detail">
                      <h3>
                        <a href="#">Summer Kids</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    <div className="courses-info">
                      <div className="courses-author">
                        <img
                          src="/assets/images/author-image1.jpg"
                          className="img-responsive"
                          alt=""
                        />
                        <span>Mark Wilson</span>
                      </div>
                      <div className="courses-price">
                        <a href="#">
                          <span>USD 45</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="courses-thumb">
                    <div className="courses-top">
                      <div className="courses-image">
                        <img
                          src="/assets/images/courses-image5.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="courses-date">
                        <span>
                          <i className="fa fa-calendar"></i> 5 / 10 / 2018
                        </span>
                        <span>
                          <i className="fa fa-clock-o"></i> 10 Hours
                        </span>
                      </div>
                    </div>

                    <div className="courses-detail">
                      <h3>
                        <a href="#">Business &amp; Management</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    <div className="courses-info">
                      <div className="courses-author">
                        <img
                          src="/assets/images/author-image2.jpg"
                          className="img-responsive"
                          alt=""
                        />
                        <span>Jessica</span>
                      </div>
                      <div className="courses-price free">
                        <a href="#">
                          <span>Free</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
