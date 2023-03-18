import React from "react";
import "./service.css";
import Line from "../../assets/Line.png";
import Serviceicon1 from "../../assets/Service Icon 1.svg";
import Serviceicon2 from "../../assets/Service Icon 2.svg";
import Serviceicon3 from "../../assets/Service Icon 3.svg";
import Serviceicon4 from "../../assets/Service icon 4.svg";
import Serviceicon5 from "../../assets/Service Icon 5.svg";
import Serviceicon6 from "../../assets/Service Icon 6.svg";
import serviceSectionImg from "../../assets/trafalgar-illustration sec02 1.png";
import CardImg1 from "../../assets/CardImage1.svg";
import CardImg2 from "../../assets/CardImage2.svg";
import CardImg3 from "../../assets/CardImage3.svg";
import whiteLine from "../../assets/whiteline.png";
import TestiminyImg from "../../assets/testi-img.svg";

const Service = () => {
  return (
    <div>
      <div className="container marginTop product-details-main ">
        <div className="ServiceHeader text-center">
          <h2>Our Services</h2>
          <img className="lineImage mt-2" src={Line}></img>
          <p className="mt-3">
            We provide to you the best choices for you. Adjust it to your health
            needs and make sure your undergo treatment <br />
            with our highly qualified doctors you can consult with us which type
            of service is suitable for your health
          </p>
        </div>

        <div>
          <div className="row sm-query1">
            <div className="col-sm-12 col-lg-4 col-xl-4 maxHeight">
              <div className="card1">
                <img className="icon1 mt-3" src={Serviceicon1} />
                <h3 className="mt-4">Search doctor</h3>
                <p className="para">
                  Choose your doctor from thousands <br />
                  of specialist, general, and trusted <br />
                  hospitals.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4 col-xl-4 maxHeight">
              <div className="card1">
                <img className="icon2 mt-3" src={Serviceicon2} />
                <h3 className="mt-4">Online pharmacy</h3>
                <p className="para">
                  Buy your medicines with our
                  <br />
                  mobile application with a simple <br />
                  delivery system.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4 col-xl-4 maxHeight">
              <div className="card1">
                <img className="icon3 mt-3" src={Serviceicon3} />
                <h3 className="mt-4">Consultation</h3>
                <p className="para">
                  Free consultation with our trusted <br />
                  doctors and get the best <br />
                  recommendations.
                </p>
              </div>
            </div>
          </div>

          <div className="row sm-query2">
            <div className="col-sm-12 col-lg-4 col-xl-4 maxHeight">
              <div className="card1">
                <img className="icon4 mt-3" src={Serviceicon4} />
                <h3 className="mt-4">Details info</h3>
                <p className="para">
                  Free consultation with our trusted <br />
                  doctors and get the best <br />
                  recommendations.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4 col-xl-4 maxHeight">
              <div className="card1">
                <img className="icon5 mt-3" src={Serviceicon5} />
                <h3 className="mt-4">Emergency care</h3>
                <p className="para">
                  You can get 24/7 urgent care for <br />
                  yourself or your children and your <br />
                  lovely family.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4 col-xl-4 maxHeight">
              <div className="card1">
                <img className="icon6 mt-3" src={Serviceicon6} />
                <h3 className="mt-4">Tracking</h3>
                <p className="para">
                  Track and save your medical history
                  <br />
                  and health data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-button text-center mt-5">
          <button className="service-btn">Learn more</button>
        </div>
      </div>

      <div className="container servPosition">
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-xl-6 ">
            <img className="serviceImg" src={serviceSectionImg} />
          </div>

          <div className="col-sm-12 col-lg-6 col-xl-6 sm_Query">
            <h2>Leading healthcare providers</h2>
            <img className="lineImage2 " src={Line}></img>
            <p className="para mt-3">
              Trafalgar provides progressive, and affordable <br />
              healthcare, accessible on mobile and online for <br />
              everyone. To us, it's not just work. We take <br />
              pride in the solutions we deliver
            </p>

            <div className="service-button  mt-4">
              <button className="service-btn">Learn more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container servPosition">
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-xl-6 sm_Query">
            <h2>
              Download our <br /> mobile apps
            </h2>
            <img className="lineImage2 " src={Line}></img>
            <p className="para mt-3">
              Our dedicated patient engagement app and <br />
              web portal allow you to access information <br />
              instantaneously (no tedeous form, long calls, <br />
              or administrative hassle) and securely
            </p>

            <div className="service-button  mt-4">
              <button className="service-btn">Download</button>
            </div>
          </div>

          <div className="col-sm-12 col-lg-6 col-xl-6 ">
            <img className="serviceImg" src={serviceSectionImg} />
          </div>
        </div>
      </div>

      <div className="container cardCaro mt-5">
        <h2 className="">What our customer are saying</h2>
        <img className="lineImage" src={whiteLine} alt="Client image" />
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <img
                  className="Testi--image"
                  src={TestiminyImg}
                  alt="product image"
                />
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 c mt-4">
                <h3>Edward Newgate</h3>
                <p className="caro_para">Founder Circle</p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <p className="caro_para">
              “Our dedicated patient engagement app and <br/> web portal allow you to
              access information <br/>instantaneously (no tedeous form, long calls,<br/>
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="ServiceHeader text-center">
          <h2>Check out our latest article</h2>
          <img className="lineImage mt-2" src={Line}></img>
        </div>

        <div className="section blop">
          <div className="container">
            <div className="row sm-query1 ">
              <div className="col-sm-12 col-lg-4 col-xl-4 ">
                <div className="cardArticle">
                  <img className=" articleImge" src={CardImg1} />
                </div>
                <div>
                  <div className="articlePadding">
                    <h3 className="mt-4">
                      Disease detection, check <br /> up in the laboratory
                    </h3>
                    <p className="para">
                      In this case, the role of the health laboratory is very
                      important to do a disease detection...
                    </p>
                    <button className="btnReadMore">Read more</button>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-4 col-xl-4">
                <div className="cardArticle">
                  <img className=" articleImge" src={CardImg2} />
                </div>
                <div className="articlePadding">
                  <h3 className="mt-4">
                    Herbal medicines that are <br />
                    safe for consumption
                  </h3>
                  <p className="para">
                    Herbal medicine is very widely used at this time because of
                    its very good for your health...
                  </p>
                  <button className="btnReadMore">Read more</button>
                </div>
              </div>

              <div className="col-sm-12 col-lg-4 col-xl-4">
                <div className="cardArticle">
                  <img className=" articleImge" src={CardImg3} />
                </div>
                <div className="articlePadding">
                  <h3 className="mt-4">
                    Natural care for healthy <br /> facial skin
                  </h3>
                  <p className="para">
                    A healthy lifestyle should start from now and also for your
                    skin health. There are some...
                  </p>
                  <button className="btnReadMore">Read more</button>
                </div>
              </div>
            </div>
          </div>

          <div className="service-button text-center mt-5">
            <button className="service-btn">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
