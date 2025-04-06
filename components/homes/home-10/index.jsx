"use client";

import Service from "@/components/homes/home-1/Service";
import Portfolio from "./Portfolio";
import Faq from "@/components/homes/home-1/Faq";
import Blog from "./Blog";
import Contact from "./Contact";
import Link from "next/link";
import { useEffect } from "react";
import { featuresListData } from "@/data/features";
import Image from "next/image";

export default function Home10({ onePage = false, dark = false }) {
  useEffect(() => {
    const addPaddingLeft = () => {
      document.getElementById("paddingLeft").style.paddingLeft = `${
        (window.innerWidth -
          document.getElementById("paddingLeftContainer").offsetWidth) /
        2
      }px`;
    };
    const addPaddingRight = () => {
      document.getElementById("paddingRight").style.paddingRight = `${
        (window.innerWidth -
          document.getElementById("paddingRightContainer").offsetWidth) /
        2
      }px`;
    };
    addPaddingLeft();
    addPaddingRight();
    window.addEventListener("resize", addPaddingLeft);
    window.addEventListener("resize", addPaddingRight);
    return () => {
      window.removeEventListener("resize", addPaddingLeft);
      window.removeEventListener("resize", addPaddingRight);
    };
  }, []);

  return (
    <>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-caption-border">About Astratta</h2>
              <h3 className="section-title-strong mb-90 mb-sm-50">
                Group <span className="font-alt">of</span> Creators 
                <span className="font-alt"> and</span> Minimalism Lovers
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 mb-xs-50">
              <div className="call-action-4-images">
                <div className="call-action-4-image-1">
                  <Image
                    width={500}
                    height={692}
                    src="/assets/images/page/500x1016-web-01.png"
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                  />
                </div>
                <div className="call-action-4-image-2">
                  <Image
                    width={500}
                    height={692}
                    src="/assets/images/page/500x1016-web-2.png"
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset="0"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10">
              <div className="wow linesAnimIn" data-splitting="lines">
                <p className="lead mt-0 mb-40">
                Empowering you brand with innovative <span className="strong">Web Development</span>, Dynamic <span className="strong">Digital Marketing</span> and Stunning <span className="strong">Graphic Design</span>.
                </p>
                <p className="mb-40">
                At Astratta Agency, we deliver modern design and sustainable solutions that drive real results. Our team stays ahead of the curve, providing innovative digital marketing strategies to help your brand stand out in the competitive online landscape.
                </p>
              </div>

              <div className="local-scroll wow fadeInUp" data-wow-offset="0">
                {onePage ? (
                  <>
                    <a
                      href="#contact"
                      className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    >
                      <span>
                        Get in touch
                        <span className="visually-hidden">About Us</span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/strong-about${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    >
                      <span>
                        Get in touch
                        <span className="visually-hidden">About Us</span>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-2 offset-xl-1 d-none d-lg-block">
              <div className="round overflow-hidden">
                <Image
                  width={330}
                  height={894}
                  src="/assets/images/page/us-330-894.webp"
                  alt="Image description"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-30">
        <div id="paddingLeftContainer" className="container"></div>
        <div className="row g-0">
          <div className="col-lg-6">
            <div
              id="paddingLeft"
              className={`split-column-left ${
                dark ? "bg-dark-2" : "bg-primary-1"
              }  light-content position-relative d-flex align-items-center`}
            >
              {/* Decorative Dots */}
              <div className="position-absolute top-0 end-0 pt-2 pe-2 opacity-02">
                <Image
                  width={192}
                  height={222}
                  src="/assets/images/demo-strong/decoration.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}
              <div>
                <h2 className="section-title mb-30">
                <span className="font-alt"> Elevate Your Brand.</span>  Captivate Your Audience. Dominate Digital.
                </h2>
                <p className="mb-50">
                At Astratta Agency, we blend creativity, strategy, and technology to craft stunning websites, impactful digital marketing campaigns, and eye-catching designs.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <>
                      <a
                        href="#contact"
                        className="btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>Start a Project</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                        href={`/strong-contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>Start a Project</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              className="split-image-right"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              <Image
                width={1100}
                height={930}
                src="/assets/images/page/1100X930-Elevate-Your-Brand.png"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </section>
      <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="services"
            >
              {" "}
              <Service />
            </section>
            <section className="pt-30">
        <div id="paddingRightContainer" className="container" />
        <div className="row g-0">
          <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              id="paddingRight"
              className={`split-column-right ${
                dark ? "bg-dark-2" : "bg-primary-1"
              } light-content position-relative d-flex align-items-center`}
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              {/* Decorative Dots */}
              <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
                <Image
                  width={192}
                  height={222}
                  src="/assets/images/demo-strong/decoration.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}
              <div>
                <h2 className="section-title mb-30">
                  Responsive, <span className="font-alt">flexible</span> and
                  customizable.
                </h2>
                <p className="mb-50">
                We craft tailored web solutions, dynamic marketing strategies, and stunning visuals that adapt to your business’s unique needs. Our responsive designs, flexible strategies, and customizable services ensure your brand stands out and thrives in the ever-evolving digital landscape.
                </p>
                {/* Features List */}
                <div className="row mt-n20">
                  {/* Features List Item */}
                  {featuresListData.map((item, index) => (
                    <div
                      key={index}
                      className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                    >
                      <div className="features-list-icon">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">{item.text}</div>
                    </div>
                  ))}
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
            <div className="split-image-left">
              <Image
                width={1100}
                height={930}
                src="/assets/images/page/1100X930-resp.png"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </section>
      {/*<section
        className={`page-section  scrollSpysection  overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />
      </section>*/}
      
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <div className="container position-relative">
          <div className="row">
            {/* Images */}
            <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
              <div className="call-action-2-images">
                <div
                  className="call-action-2-image-1"
                  data-rellax-y=""
                  data-rellax-speed="0.5"
                  data-rellax-percentage="0.7"
                >
                  <Image
                    width={386}
                    height={400}
                    src="/assets/images/page/386x500-01.png"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={255}
                  />
                </div>
                <div className="call-action-2-image-2">
                  <Image
                    width={810}
                    height={512}
                    src="/assets/images/page/810x500-01.png"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={134}
                  />
                </div>
                <div
                  className="call-action-2-image-3"
                  data-rellax-y=""
                  data-rellax-speed="-0.5"
                  data-rellax-percentage="0.5"
                >
                  <Image
                    width={386}
                    height={500}
                    src="/assets/images/page/386x500-02.png"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={0}
                  />
                </div>
              </div>
            </div>
            {/* End Images */}
            {/* Text */}
            <div className="col-lg-5 d-flex align-items-center">
              <div
                className="wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-offset={255}
              >
                <h2 className="section-caption-border">Our Process</h2>
                <h2 className="section-title mb-50 mb-sm-20">Crafting Your Digital Journey Together</h2>
                <Faq />
                <div className="local-scroll">
                  {onePage ? (
                    <a
                      href="#contact"
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                    >
                      <span>Start a Project</span>
                    </a>
                  ) : (
                    <Link
                      href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                    >
                      <span>Start a Project</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {/* End Text */}
          </div>
        </div>
      </section>
      <section
        className={`small-section ${
          dark ? "bg-dark-2 light-content" : "bg-primary-1 light-content"
        } `}
      >
        <div className="container">
          <div className="row mb-n10">
            <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 mb-sm-30 text-center text-md-start">
              <h2 className="section-title-small mb-0">
                Like our creative works?
              </h2>
            </div>
            <div className="col-md-4 col-lg-3 text-center text-md-end">
            <div className="local-scroll">
                  {onePage ? (
                    <>
                      <a
                        href="#contact"
                        className="btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>Start a Project</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                        href={`/strong-contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>Start a Project</span>
                      </Link>
                    </>
                  )}
                </div>
            </div>
          </div>
        </div>
      </section>
     {/* <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />*/}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      >
        <Blog />
      </section>
      {/* Marquee Section */}
      <div className="page-section overflow-hidden pt-0 pb-0">
                {/* Marquee Text Line */}
                <div className="marquee marquee-style-2 no-rotate">
                  <div className="marquee-track marquee-animation-1">
                    <div>Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brandse</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                    <div aria-hidden="true">Powering New Brands</div>
                  </div>
                </div>
                {/* End Marquee Text Line */}
              </div>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
