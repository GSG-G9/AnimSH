import React from 'react';

import './Home.css';

import data from './data';
import CardContainer from '../../common/CardContainer';

const Home = () => {
  const title = 'top ranks';
  return (
    <div className="main">
      <CardContainer title={title} searchResult={data} />
    </div>
  );
};

export default Home;
