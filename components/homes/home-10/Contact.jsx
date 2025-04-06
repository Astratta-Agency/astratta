"use client";
import { contactItems } from "@/data/contact";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="row mb-90 mb-sm-50">
        <div className="col-lg-5 col-xl-4 mb-md-90 mb-sm-50 wow fadeInUp">
          <h2 className="section-title-strong mb-40">
            Let’s work <span className="font-alt">together</span>
          </h2>
          <p className="mb-5">
          Unlock your digital potential. Share your vision with us, and we'll craft a tailored solution to help your business thrive online.
          </p>
          <div className="contact-2 mb-md-90 mb-sm-50">
            {/* Contact Info Item */}
            {contactItems.map((elm, i) => (
              <div key={i} className="contact-2-item">
                <div className="contact-2-icon">
                  <i className={elm.iconClass} />
                </div>
                <div className="contat-2-intro">
                  <h4 className="contact-2-title">
                    {elm.text.split(" ")[0]}{" "}
                    <span className="font-alt">
                      {elm.text.split(" ")[1]}
                    </span>
                  </h4>
                  <div className="contact-2-text">
                    <a href={elm.link.url}>{elm.link.text}</a>
                  </div>
                </div>
              </div>
            ))}
            {/* End Contact Info Item */}
          </div>
        </div>
        <div className="col-lg-7 offset-xl-1">
          {/* Contact Form */}
        <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form"
            id="contact_form"
          >
            <div className="row">
              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Enter your name"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-md-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Enter your email"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
            {/* company and service */}
            <div className="row">
              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="input-lg round form-control"
                    placeholder="Enter your company name"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="input-lg round form-control"
                    placeholder="Enter your company current website"
                    pattern=".{3,100}"
                    aria-required="true"
                  />
                </div>
              </div>
              </div>
              <div className="row">
              <div className="col-md-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="service">What services are you interested in?</label>
                  <div className="mb-20 mb-md-10">
                          <label className="checkbox-inline me-3">
                            <input
                              type="checkbox"
                              id="inlineCheckbox1"
                              className="form-check-input"
                              defaultValue="Web Development"
                            />{" "}
                            <span className="form-check-label">Web Development</span>
                          </label>
                          <label className="checkbox-inline me-3">
                            <input
                              type="checkbox"
                              id="inlineCheckbox2"
                              className="form-check-input"
                              defaultValue="Graphic Design"
                            />{" "}
                            <span className="form-check-label">Graphic Design</span>
                          </label>
                          <label className="checkbox-inline me-3">
                            <input
                              type="checkbox"
                              id="inlineCheckbox3"
                              className="form-check-input"
                              defaultValue="Digital Marketing"
                            />{" "}
                            <span className="form-check-label">Digital Marketing</span>
                          </label>
                          <label className="checkbox-inline me-3">
                            <input
                              type="checkbox"
                              id="inlineCheckbox3"
                              className="form-check-input"
                              defaultValue="Brand Identity"
                            />{" "}
                            <span className="form-check-label">Brand Identity</span>
                          </label>
                          <label className="checkbox-inline me-3">
                            <input
                              type="checkbox"
                              id="inlineCheckbox3"
                              className="form-check-input"
                              defaultValue="Social Media"
                            />{" "}
                            <span className="form-check-label">Social Media</span>
                          </label>
                          <label className="checkbox-inline me-3">
                            <input
                              type="checkbox"
                              id="inlineCheckbox3"
                              className="form-check-input"
                              defaultValue="Email Marketing"
                            />{" "}
                            <span className="form-check-label">Email Marketing</span>
                          </label>
                        </div>
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Tell us about your project</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="Enter your message"
                defaultValue={""}
                required
              />
            </div>
            <div className="row">
              <div className="col-sm-6">
                {/* Inform Tip */}
                <div className="form-tip pt-20 pt-sm-0">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="#">Terms &amp; Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </div>
              </div>
              <div className="col-sm-6">
                {/* Send Button */}
                <div className="text-end pt-20">
                  <button
                    type="submit"
                    id="submit_btn"
                    aria-controls="result"
                    className="submit_btn btn btn-mod btn-white btn-large btn-round btn-hover-anim align-middle"
                  >
                    <span> Send Message </span>
                  </button>
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
      

        </div>
      </div>
    </div>
  );
}
