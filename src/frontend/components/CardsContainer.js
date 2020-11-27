import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/styles/components/CardsContainer.styl';
import Card from './Card';

const CardsContainer = () => {
  const { filterProducts: products } = useSelector((state) => state);
  return (
    <div className="cards-container">
      {products.map((product) => (
        <Card {...product} key={product.id} />
      ))}
    </div>
  );
};

export default CardsContainer;
