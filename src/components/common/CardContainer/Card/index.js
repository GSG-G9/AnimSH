/* eslint-disable camelcase */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = (props) => {
  const { id, name, des, image_url } = props;
  return (
    <div id={id} className="card">
      <Link to={`/AnimeInfo/${id}`}>
        <div
          className="front-card"
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        >
          <div className="name-box">{name}</div>
        </div>
        <div className="back-card">
          <div className="back-card__container">
            <h3 className="title">{name}</h3>
            <p className="description">{des}</p>
          </div>
          <div className="rating-box">rating</div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  des: propTypes.string.isRequired,
  image_url: propTypes.string.isRequired,
};

export default Card;
