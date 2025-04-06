import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption-border">Our Services</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="We provide the best development solutions." />
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                The power of design help us to solve complex problems and
                cultivate business solutions.
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Web Development <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Graphic Design <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Digital Marketing<span className="number">03</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Web Development</h4>
                  <p className="text-gray mb-0">
                  Websites that tell your story and connect with your audience.
                  </p>
                  <ul className="mb-0 text-gray">
                    <li>Custom Web App</li>
                    <li>E-commerce</li>
                    <li>UI/UX Design</li>
                    <li>SEO Optimization</li>
                    <li>Website Maintenance</li>
                  </ul>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/page/945x1016-web.png"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Graphic Design</h4>
                  <p className="text-gray mb-0">
                  Visual identities that capture attention and build brand loyalty.
                  </p>
                  <ul className="mb-0 text-gray">
                    <li>Brand Identity</li>
                    <li>Printing</li>
                    <li>Illustrations</li>
                    <li>Social Media Graphics</li>
                    <li>Motion Graphics</li>
                  </ul>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/page/945x1016-web-2.png"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Digital Marketing</h4>
                  <p className="text-gray mb-0">
                  Data-driven strategies that grow your online presence.
                  </p>
                  <ul className="mb-0 text-gray">
                    <li>Search Engine Optimization</li>
                    <li>Social Media Marketing</li>
                    <li>Content Marketing</li>
                    <li>Email Marketing</li>
                    <li>Analytics and Reporting</li>
                  </ul>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/page/945x1016-web-3.png"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
