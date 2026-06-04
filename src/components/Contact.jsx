import React, { useRef, useState } from "react";
import "../css/Contact.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ show: false, message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus({
            show: true,
            message: "Message sent successfully!",
            type: "success",
          });
          e.target.reset();
          setTimeout(
            () => setStatus((prev) => ({ ...prev, show: false })),
            5000,
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus({
            show: true,
            message: "Something went wrong. Please try again.",
            type: "danger",
          });
        },
      );
  };

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.4354420756688!2d78.30039776956262!3d16.48860829901583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca6b007d70818b%3A0xf449ad0d1e1dc5b6!2sShailaja%20nilayam!5e0!3m2!1sen!2sin!4v1770086763345!5m2!1sen!2sin";

  return (
    <div>
      <div className="main-header">
        <h1 className="page-title">Contact</h1>
        <span className="experience-badge">Get in Touch</span>
      </div>
      <div className="contact-container">
        <div className="map-wrapper">
          <iframe
            src={mapSrc}
            className="google-map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Contact Location Map"
          ></iframe>

          {/* The "View larger map" overlay seen in your image */}
          {/* <a
            href={viewLargerLink}
            target="_blank"
            rel="noreferrer"
            className="view-larger-btn"
          >
            View larger map
          </a> */}
        </div>

        <div className="contact-content">
          {/* Left Info Column */}
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-phone info-icon"></i>
              </div>
              <div className="info-text">
                <h3>85004 42994</h3>
                <p>Feel free to contact me at this number.</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-geo-alt-fill info-icon"></i>
              </div>
              <div className="info-text">
                <h3>Telangana, India</h3>
                <p>Willing to relocate.</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-envelope-at-fill info-icon"></i>
              </div>
              <div className="info-text">
                <h3>sainitheeshreddy45@gmail.com</h3>
                <p>Please contact me direct at this Email Id.</p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-section">
            {status.show && (
              <div
                className={`alert alert-${status.type} alert-dismissible fade show mb-4`}
                role="alert"
              >
                <i
                  className={`bi bi-hand-thumbs-${status.type === "success" ? "up" : "down"}-fill me-2`}
                ></i>
                {status.message}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setStatus({ ...status, show: false })}
                ></button>
              </div>
            )}

            <h2 className="form-title">How Can I Help You?</h2>

            <form className="contact-form" onSubmit={sendEmail} ref={form}>
              <div className="inputs-column">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Full Name"
                  className="input-field"
                  required
                />
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Email Address"
                  className="input-field"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input-field"
                  required
                />
              </div>

              <div className="message-column">
                <textarea
                  placeholder="Message"
                  name="message"
                  className="textarea-field"
                  required
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}