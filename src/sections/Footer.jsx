import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="row align-items-center">
        <div className="row justify-content-around align-items-center footer-row">
          <div className="col-12 footer-1 logo">
            <h1>Ahsan's Portfolio</h1>
          </div>
          <div className="col-lg-3 col-sm-6 social .footer-2">
            <ul>
              <li>
                <a href="tel:+923120177576">
                  <i className="footer-fa fa fa-phone">
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "1.4rem",
                        fontWeight: "700",
                      }}
                    >
                      &nbsp;&nbsp;- Call
                    </span>
                  </i>
                </a>
              </li>
              <li>
                <a href="mailto:mohammadahsan7744@gmail.com" target="_blank">
                  <i className="footer-fa fa fa-envelope">
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "1.4rem",
                        fontWeight: "700",
                      }}
                    >
                      &nbsp; - Email Us
                    </span>
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mohammad-ahsan-1030a3157/"
                  target="_blank"
                >
                  <i className="footer-fa fa-brands fa-linkedin">
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "1.4rem",
                        fontWeight: "700",
                      }}
                    >
                      &nbsp;&nbsp;&nbsp;- LinkedIn
                    </span>
                  </i>
                </a>
              </li>

              <li>
                <a href="https://github.com/IamAhxan" target="_blank">
                  <i className="footer-fa fa-brands fa-github">
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "1.4rem",
                        fontWeight: "700",
                      }}
                    >
                      &nbsp; - Github
                    </span>
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 footer-3">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" col-12 custom-color copyright">
          <hr />
          <a href="#">ahxan.dev</a> | All Rights Reserved
        </div>
      </footer>

      <a
        className="whats-app"
        href="https://wa.me/923120177576"
        target="_blank"
      >
        <i className="fa-brands fa-whatsapp my-float"></i>
      </a>
    </>
  );
};

export default Footer;
