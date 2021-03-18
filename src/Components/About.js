import React from 'react';
import Aboutphoto from '../assets/about.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="img-container">
        <img src={Aboutphoto} alt="about"></img>
      </div>
      <div className="text-container">
        <h1>Learn more about us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          mattis hendrerit. Sed ut sapien venenatis, varius quam a, molestie
          augue. Nunc non porttitor nulla. Etiam vestibulum auctor posuere. Nunc
          sit amet leo eget mi tincidunt tincidunt a ac lectus.
        </p>
        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default About;
