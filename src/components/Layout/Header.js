import React from "react";

export default function Header() {
  return (
    <section
      className="navbar custom-navbar navbar-fixed-top"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>

          <a href="#" className="navbar-brand">
            AJ Multimedia Education
          </a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-nav-first">
            <li>
              <a href="#top" className="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="smoothScroll">
                About
              </a>
            </li>
            {/* <li>
              <a href="#team" className="smoothScroll">
                Our Teachers
              </a>
            </li> */}
            <li>
              <a href="#courses" className="smoothScroll">
                Courses
              </a>
            </li>
            <li>
              <a href="#testimonial" className="smoothScroll">
                Reviews
              </a>
            </li>
            <li>
              <a href="#contact" className="smoothScroll">
                Contact
              </a>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <i className="fa fa-phone"></i> +91 84000 92848
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
