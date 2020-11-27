import React from 'react';
import CardsContainer from '../components/CardsContainer';
import Filters from '../components/Filters';

const Home = () => {
  return (
    <React.Fragment>
      <Filters />
      <CardsContainer />
    </React.Fragment>
  );
};

export default Home;
