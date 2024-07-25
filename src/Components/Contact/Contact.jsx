import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_irvr4y7', 'template_734bdbb', form.current, 'nReywNJQQj_IW_rFd')
      .then(
        () => {
          alert('Form sent successfully! 😊');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send form. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contact' className="contact-section">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="from_name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="from_email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
