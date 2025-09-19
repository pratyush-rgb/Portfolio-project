import React from "react";
import "./Contact.css";
import call from "../../assets/call.png";
import mail from "../../assets/mail.png";
import loc from "../../assets/loc.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "142600a4-0a53-4a23-902c-0ca43c9c0925");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("✅ Message sent successfully!");
      event.target.reset(); // <-- clears the form
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-Section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects and open to
            discussing new opportunities. Please feel free to get in touch, and
            I will get back to you as soon as possible.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>letscode269@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>+91 XXXXXXXXXX </p>
            </div>
            <div className="contact-detail">
              <img src={loc} alt="" />
              <p>Kolkata, West Bengal </p>
            </div>
          </div>
        </div>

        {/* ✅ Wrap inputs in a <form> */}
        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              required
            />

            <label>Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
