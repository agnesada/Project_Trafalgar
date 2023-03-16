import React from "react";
import "./footer.css";
import LogoWhite from "../../assets/logo_white.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-xl-6">
              <div>
                <img src={LogoWhite} />
              </div>

              <p className="copyright textP">
                Trafalgar provides progressive, and affordable <br/>
                healthcare, accessible on mobile and online <br/> for everyone
              </p>

              <p className="copyright">
                ©Trafalgar PTY LTD 2020. All rights reserved
              </p>
            </div>

            <div className="col-sm-12 col-lg-2 col-xl-2 links1">
              <h1 className="head">Company</h1>

              <p className="links">About</p>

              <p className="links">Testimonials</p>
              <p className="links">Find a doctor</p>
              <p className="links">Apps</p>
            </div>

            <div className="col-sm-12 col-lg-2 col-xl-2 links1">
              <h1 className="head">Region</h1>

              <p className="links">Indonesia</p>

              <p className="links">Singapore</p>
              <p className="links">Hongkong</p>
              <p className="links">Canada</p>
            </div>

            <div className="col-sm-12 col-lg-2 col-xl-2 links1">
              <h1 className="head">Help</h1>

              <p className="links">Help center</p>

              <p className="links">Contact support</p>
              <p className="links">Instructions</p>
              <p className="links">How it works</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
