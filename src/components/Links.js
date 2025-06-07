import React from 'react';
import './Links.css';

const Links = () => {
  return (
    <section id="links">
      <h2>Find Me Online</h2>
      <div className="link-buttons">
        <a href="https://github.com/iakzs" className="link-button" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://discordapp.com/users/622795838032314388" className="link-button" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="https://www.roblox.com/users/7600402522/profile" className="link-button" target="_blank" rel="noopener noreferrer">Roblox</a>
        <a href="https://t.me/nyapasuuu" className="link-button" target="_blank" rel="noopener noreferrer">Telegram</a>
      </div>
    </section>
  );
};

export default Links;
