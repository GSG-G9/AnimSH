import React, { Component } from 'react';
import propTypes from 'prop-types';
import fetch from 'node-fetch';
import { Redirect } from 'react-router-dom';

import './AnimeInfo.css';
import Loader from '../../common/Loader';

// const data = {
//   airing: false,
//   end_date: '2014-06-25T00:00:00+00:00',
//   episodes: 12,
//   image_url:
//     'https://cdn.myanimelist.net/images/anime/5/65187.jpg?s=c65f0c38eb1316921799ce74ab1316f2',
//   mal_id: 19815,
//   members: 1672993,
//   rated: 'PG-13',
//   score: 8.22,
//   start_date: '2014-04-09T00:00:00+00:00',
//   synopsis: `No Game No Life is a surreal comedy that follows Sora and Shiro, shut-in NEET siblings and the online gamer duo behind the legendary username "Blank." They view the real world as just another lousy ga...`,
//   title: 'No Game No Life',
//   type: 'TV',
//   url: 'https://myanimelist.net/anime/19815/No_Game_No_Life',
// };
class AnimeInfo extends Component {
  state = {
    results: {},
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    fetch(`https://api.jikan.moe/v3/anime/${id}`)
      .then((res) => res.json())
      .then((results) => {
        this.setState({
          results,
          isLoaded: true,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  render() {
    const { results, isLoaded, error } = this.state;
    if (results.status === 400 || results.status === 404) {
      return <Redirect exact to="/" />;
    }
    if (!isLoaded || error) {
      return <Loader />;
    }

    return (
      <div className="animeInfo main">
        <div className="poster-wrapper">
          <a href={results.url}>
            <img src={results.image_url} alt="poster" />
          </a>
        </div>
        <div className="content">
          <h1 className="mainTitle">{results.title}</h1>
          <a href="/">Tags</a>
          <p className="description">
            <strong>prologue</strong>
            {results.synopsis}
          </p>
          <div className="details">
            <a href="/">{`Rating :${results.score}`}</a>
            <a href="/">{`Status :${results.rated}`}</a>
            <a href="/">{`Type :${results.type}`}</a>
            <a href="/">{`Episodes :${results.episodes}`}</a>
          </div>
          <iframe
            title={results.title}
            width="560"
            height="315"
            src={results.trailer_url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

AnimeInfo.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
};

export default AnimeInfo;

export { AnimeInfo };
