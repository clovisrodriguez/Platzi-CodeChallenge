import React from 'react';
import { formatCurrency } from '../utils';
import '../assets/styles/components/Card.styl';

const Card = ({ title, price, image }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="description">
        <h4>{title}</h4>
        <p>{formatCurrency(price)}</p>
      </div>
    </div>
  );
};

export default Card;
