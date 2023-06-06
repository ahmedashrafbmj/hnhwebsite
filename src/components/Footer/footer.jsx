/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json"

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>Block 1 Nazimabad, Karachi, Pakistan</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>info@hnhtechsolutions.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+92-332-307-2025</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/logo-light.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                        We work with a passion of taking challenges and creating new ones in advertising sector.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">5 jan 2019</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  {/* <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div> */}
                  {/* <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div> */}
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
              <a href="#0" >
                  <Link
                    href={`https://www.facebook.com/hnhtechsolutions/`}
                    passHref
                  >
                    <a>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </Link>
                </a>
                <a href="#0">
                  <Link
                    href={`https://www.linkedin.com/company/hnh-tech-solutions/`}
                    passHref
                  >
                    <a>
                      <i className="fab fa-linkedin"></i>{" "}
                    </a>
                  </Link>
                </a>
                {/* <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
              <div className="copy-right">
                <p>
                © 2023 HnH Tech Solutions. All rights reserved.
                  {/* <Link
                    href="https://themeforest.net/user/themescamp/portfolio"
                    
                  >
                    <a target="_blank">ThemesCamp</a>
                  </Link> */}
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
