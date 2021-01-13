import React, { Component } from 'react';
import propTypes from 'prop-types';
import queryString from 'querystring';
import fetch from 'node-fetch';

import './Search.css';

import CardContainer from '../../common/CardContainer';
import Loader from '../../common/Loader';

class Search extends Component {
  state = {
    isLoaded: false,
    searchResult: {},
    q: '',
    error: null,
  };

  componentDidMount() {
    this.fetchAnimeData();
  }

  componentDidUpdate({ location: { search } }) {
    this.fetchAnimeData(search);
  }

  fetchAnimeData = (oldSearch) => {
    const { location } = this.props;

    const newSearch = location.search;
    if ((oldSearch && oldSearch !== newSearch) || !oldSearch) {
      const { q } = queryString.parse(newSearch.slice(1));
      this.setState({
        q,
      });
      fetch(`https://api.jikan.moe/v3/search/anime?q=${q}&page=1`)
        .then((res) => res.json())
        .then(({ results }) => {
          this.setState({
            q,
            searchResult: results,
            isLoaded: true,
          });
        })
        .catch((error) => {
          this.setState({
            error,
          });
        });
    }
  };

  render() {
    const { searchResult, isLoaded, q, error } = this.state;

    return (
      <div className="searchResult main">
        {isLoaded && q && !error ? (
          <CardContainer title={q} searchResult={searchResult} />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

Search.propTypes = {
  location: propTypes.shape({
    search: propTypes.string,
  }).isRequired,
};

export default Search;
