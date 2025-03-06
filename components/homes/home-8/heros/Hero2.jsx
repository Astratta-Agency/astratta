import React from "react";
import Image from "next/image";
export default function Hero2() {
  return (
    <div className="min-height-100vh d-flex flex-row flex-wrap pt-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
     {/* <div className="home-content pb-sm-60 text-start position-relative">
        <div className="d-flex flex-row flex-wrap">*/}
          <div className="d-block wow fadeRotateIn col-lg-4 z-index-1" >
                    <Image
                      src="/assets/images/astratta-agency-logo-white.png"
                      alt="Astratta Agency Logo"
                      width={600}
                      height={100}
                      className="light-mode-logo hero-logo"
                      style={{ width: "100%", height: "auto" }}
                      priority={true}
                    /></div>
          <div className="d-block wow fadeRotateIn col-lg-4 align-content-end" ata-wow-delay="0.2s"
            data-wow-offset={0}>
              <Image
                                  src="/assets/images/astratta-man.png"
                                  alt="Image Description"
                                  width={872}
                                  height={866}
                                  className="wow scaleOutIn hero-image"
                                  data-wow-duration="1.2s"
                                  priority={true}
                                />
          </div>
          <div className="d-block text-left wow fadeRotateIn col-lg-4 align-content-center" data-wow-delay="0.4s"
            data-wow-offset={0}><h1 className="hs-title-1 font-alt overflow-hidden mb-30 mb-sm-20">Modern designs. Sustainable solutions.</h1>
          </div>
         {/*</div>
       <h1 className="hs-title-5 font-alt overflow-hidden mb-30 mb-sm-20">
          <span className="d-block text-center wow fadeRotateIn">
            Jane Garsia
          </span>
          <span
            className="d-block wow fadeRotateIn"
            data-wow-delay="0.2s"
            data-wow-offset={0}
          >
            Creative
          </span>
          <span
            className="d-block text-center wow fadeRotateIn"
            data-wow-delay="0.4s"
            data-wow-offset={0}
          >
            Studio
          </span>
        </h1>
        <h2
          className="hs-title-6 font-alt text-center mb-sm-20 wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-offset={0}
        >
          Specialized in Branding, Web Design and Photography
        </h2>
        <p className="hs-paragraph-2 wow clipRightIn" data-wow-delay="0.8s">
          We are a full-service creative studio creating beautiful digital
          experiences and products. Our mission is to make work process
          meaningful.
        </p>*/}
      {/*</div>*/}
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-2 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" className="scroll-down-2">
            <Image
              src="/assets/images/demo-modern/arrow-down-white.svg"
              alt="Scroll Down"
              width={51}
              height={132}
            />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Social Media Links */}
      <div className="hs-social left wow fadeInUp" data-wow-offset={0}>
        <a href="#" className="hs-social-link">
          <span className="visually-hidden">Instagram</span>
          <i className="fa-instagram" />
        </a>
        <a href="#" className="hs-social-link">
          <span className="visually-hidden">Twitter</span>
          <i className="fa-twitter" />
        </a>
        <a href="#" className="hs-social-link">
          <span className="visually-hidden">Facebook</span>
          <i className="fa-facebook-f" />
        </a>
      </div>
      {/* End Social Media Links */}
    </div>
  );
}
