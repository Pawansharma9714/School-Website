import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="footer-info">
              <div className="section-title">
                <h2>Surat Address</h2>
              </div>
              <address>
                <p>
                145, Devi Darshan Nagar,
                <br /> Above Maurya Bati chokha,
                <br /> Tere Name Char rasta,
                 Althan Road
                 <br />Pandesara, SURAT 394220                  
                </p>
                <a href="mailto:ajmultimediaeducation@gmail.com">ajmultimediaeducation@gmail.com</a>
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
                <p>Copyright &copy; 2023 AJ Multimedia Education</p>
                <p>
                  Design &amp; Developed By:{" "}
                  <a
                    rel="nofollow"
                    href="http://www.avinyasoftware.com/"
                    title="Avinya Software Solutions"
                    target="_blank"
                  >
                    Avinya Software
                  </a>
                </p>
                {/* <p>
                  Distribution: <a href="">ThemeWagon</a>
                </p> */}
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="footer-info">
              <div className="section-title">
                <h2>Jaunpur Address</h2>
              </div>
              <address>
                <p>
                Anupam Market,Sultanpur road
                <br /> 
                Tehsil: Badlapur 
                District: JAUNPUR 222125                                                  
                </p>
                <a href="mailto:ajmultimediaeducation@gmail.com">ajmultimediaeducation@gmail.com</a>
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
