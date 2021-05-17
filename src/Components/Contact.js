import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1>Contact us</h1>
      <div className="container-input">
        <input type="text" required placeholder="Full Name"></input>
        <br />
        <input type="email" required placeholder="Type your email"></input>
        <br />
        <textarea required placeholder="Write here...."></textarea>
        <br />
        <button className="btn">Send</button>
      </div>
    </div>
  );
};

export default Contact;
