import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to work together or just say hi, feel free to reach out!</p>
      <a href="https://discordapp.com/users/622795838032314388" className="btn" target="_blank" rel="noopener noreferrer">Send me a DM on Discord</a>
      <a href="mailto:benjamin@iakzs.dev" className="btn" target="_blank" rel="noopener noreferrer">Send me an email</a>
      <a href="https://t.me/nyapasuuu" className="btn" target="_blank" rel="noopener noreferrer">Send me a message on Telegram</a>
    </section>
  );
};

export default Contact;
