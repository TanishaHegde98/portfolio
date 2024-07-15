import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending message: ", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div class="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
      <div class="container-fluid">
        <div class="container">
          <div class="align-items-center">
            <div class="">
              <div class="contact-form">
                <h2 className="text-3xl text-white mb-2">Send a message</h2>

                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div class="control-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required="required"
                      data-validation-required-message="Please enter your name"
                    />
                    <p class="help-block"></p>
                  </div>
                  <div class="control-group">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Your Email"
                      required="required"
                      data-validation-required-message="Please enter your email"
                    />
                    <p class="help-block"></p>
                  </div>
                  <div class="control-group">
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p class="help-block"></p>
                  </div>
                  <div class="control-group">
                    <textarea
                      class="form-control"
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p class="help-block"></p>
                  </div>
                  <div>
                    <button class="btn" type="submit" id="sendMessageButton">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
