import React from 'react';

const Featurebox = (props) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="gym-logos" />
      </div>
      <div className="a-b-title">
        <h2> {props.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Featurebox;
