import React, { useRef, useState } from "react";
import "../css/Contact.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from "@emailjs/browser";
import data from "../data";

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
            message: data.contact.successMessage,
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
            message: data.contact.errorMessage,
            type: "danger",
          });
        },
      );
  };

  return (
    <div>
      <div className="main-header">
        <h1 className="page-title">{data.contact.pageTitle}</h1>
        <span className="experience-badge">{data.contact.badge}</span>
      </div>
      <div className="contact-container">
        <div className="map-wrapper">
          <iframe
            src={data.contact.mapUrl}
            className="google-map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={data.contact.mapTitle}
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
            {data.contact.details.map((detail) => (
              <div className="info-item" key={detail.value}>
                <div className="info-icon">
                  <i className={`bi ${detail.icon} info-icon`}></i>
                </div>
                <div className="info-text">
                  <h3>{detail.value}</h3>
                  <p>{detail.description}</p>
                </div>
              </div>
            ))}
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

            <h2 className="form-title">{data.contact.formTitle}</h2>

            <form className="contact-form" onSubmit={sendEmail} ref={form}>
              <div className="inputs-column">
                {data.contact.fields.filter((field) => field.type !== "textarea").map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="input-field"
                    required
                  />
                ))}
              </div>

              <div className="message-column">
                {data.contact.fields.filter((field) => field.type === "textarea").map((field) => (
                  <textarea
                    key={field.name}
                    placeholder={field.placeholder}
                    name={field.name}
                    className="textarea-field"
                    required
                  ></textarea>
                ))}
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  {data.contact.submitLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}