 import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <span className="section-subtitle">Get in Touch</span>
      <div className="contact-container container grid">
        <div className="contact-info">
          <div className="contact-card">
            <h3 className="contact-card-title">Email</h3>
            <span className="contact-card-data">karthikvh004@gmail.com</span>
            <a href="mailto:karthikvh004@gmail.com" className="contact-button">
              Write me &rarr;
            </a>
          </div>
          <div className="contact-card">
            <h3 className="contact-card-title">LinkedIn</h3>
            <span className="contact-card-data">karthik-v-h</span>
             <a href="https://linkedin.com/in/karthik-v-h-7425182b3" target="_blank" rel="noreferrer" className="contact-button">
              Connect with me &rarr;
            </a>
          </div>
        </div>

        {/* --- FORM UPDATES START HERE --- */}

        {/* 1. We add special attributes to the <form> tag to activate Netlify Forms. */}
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          className="contact-form"
        >
          {/* 2. This hidden input is REQUIRED by Netlify to identify your form. */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="contact-inputs">
            <div className="contact-content">
              {/* 3. Each input MUST have a 'name' attribute. */}
              <input type="text" name="name" placeholder=" " className="contact-input" />
              <label htmlFor="name" className="contact-label">Name</label>
            </div>
            <div className="contact-content">
              <input type="email" name="email" placeholder=" " className="contact-input" />
              <label htmlFor="email" className="contact-label">Email</label>
            </div>
          </div>
          <div className="contact-content">
            <textarea name="message" cols="0" rows="7" placeholder=" " className="contact-input"></textarea>
            <label htmlFor="message" className="contact-label">Message</label>
          </div>
          <div>
            <button type="submit" className="contact-send-button">Send Message</button>
          </div>
        </form>
        {/* --- FORM UPDATES END HERE --- */}

      </div>
    </section>
  );
};

export default Contact;
