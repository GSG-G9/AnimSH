import React from 'react';
import './CardContainer.css';

import Card from './Card';

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="catagory-name">
        <h1>TOP Ranks</h1>
        <div className="catagory-line" />
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardContainer;
