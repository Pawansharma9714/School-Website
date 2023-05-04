import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="footer-info">
              <div className="section-title">
                <h2>Headquarter</h2>
              </div>
              <address>
                <p>
                  1800 dapibus a tortor pretium,
                  <br /> Integer nisl dui, ABC 12000
                </p>
              </address>

              <ul className="social-icon">
                <li>
                  <a
                    href="#"
                    className="fa fa-facebook-square"
                    attr="facebook icon"
                  ></a>
                </li>
                <li>
                  <a href="#" className="fa fa-twitter"></a>
                </li>
                <li>
                  <a href="#" className="fa fa-instagram"></a>
                </li>
              </ul>

              <div className="copyright-text">
                <p>Copyright &copy; 2018 Company</p>
                <p>
                  Design:{" "}
                  <a
                    rel="nofollow"
                    href="http://templatemo.com"
                    title="html5 templates"
                    target="_parent"
                  >
                    Template Mo
                  </a>
                </p>
                <p>
                  Distribution: <a href="https://themewagon.com/">ThemeWagon</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="footer-info">
              <div className="section-title">
                <h2>Contact Info</h2>
              </div>
              <address>
                <p>+65 2244 1100, +66 1800 1100</p>
                <p>
                  <a href="mailto:youremail.com">hello@youremail.co</a>
                </p>
              </address>

              <div className="footer_menu">
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Investor</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="footer-info newsletter-form">
              <div className="section-title">
                <h2>Newsletter Signup</h2>
              </div>
              <div>
                <div className="form-group">
                  <form action="#" method="get">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                      required=""
                    />
                    <input
                      type="submit"
                      className="form-control"
                      name="submit"
                      id="form-submit"
                      value="Send me"
                    />
                  </form>
                  <span>
                    <sup>*</sup> Please note - we do not spam your email.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
