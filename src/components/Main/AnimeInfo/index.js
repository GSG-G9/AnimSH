import React from 'react';
import propTypes from 'prop-types';
import './AnimeInfo.css';

const AnimeInfo = ({
  match: {
    params: { name },
  },
}) => {
  return (
    <>
      AnimeInfo
      {name}
    </>
  );
};

AnimeInfo.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      name: propTypes.string,
    }),
  }).isRequired,
};

export default AnimeInfo;

export { AnimeInfo };
