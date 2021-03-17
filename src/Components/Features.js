import React from 'react';
import Featurebox from './Featurebox';
import imagen01 from '../assets/1.svg';
import imagen02 from '../assets/2.svg';
import imagen03 from '../assets/3.svg';
import imagen04 from '../assets/4.svg';

const Features = () => {
  return (
    <div id="features">
      <h1>Features</h1>
      <div className="box-container">
        <Featurebox image={imagen01} title="WeightLifting" />
        <Featurebox image={imagen02} title="Specefic Muscle" />
        <Featurebox image={imagen03} title="Flex your Muscle" />
        <Featurebox image={imagen04} title="Cardio Excercise" />
      </div>
    </div>
  );
};

export default Features;
