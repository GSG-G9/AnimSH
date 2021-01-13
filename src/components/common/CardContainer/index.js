import React from 'react';
import propTypes from 'prop-types';

import './CardContainer.css';

import Card from './Card';

const CardContainer = ({ title, searchResult }) => {
  return (
    <div className="card-container">
      <div className="catagory-name">
        <h1>{title}</h1>
        <div className="catagory-line" />
      </div>
      {searchResult ? (
        searchResult.map((item) => {
          if (item.rated !== 'Rx') {
            return (
              <Card
                id={item.mal_id}
                key={item.mal_id}
                name={item.title}
                des={item.synopsis}
                image_url={item.image_url}
              />
            );
          }
          return <></>;
        })
      ) : (
        <h1>There is no data</h1>
      )}
    </div>
  );
};

CardContainer.propTypes = {
  title: propTypes.string.isRequired,
  searchResult: propTypes.instanceOf(Array).isRequired,
};

export default CardContainer;
