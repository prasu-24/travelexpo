// ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact">
      <h2 align="center">CONTACT US</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
