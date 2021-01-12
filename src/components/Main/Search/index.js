import React, { Component } from 'react';
import propTypes from 'prop-types';
import queryString from 'qs';
import fetch from 'node-fetch';

import './Search.css';

import CardContainer from '../../common/CardContainer';

class Search extends Component {
  status = {
    isLoaded: false,
    searchResult: {},
    q: '',
  };

  componentDidMount() {
    const { q } = this.state;
    fetch(`https://api.jikan.moe/v3/search/anime?q=${q}&page=1`)
      .then((res) => res.json())
      .then((searchResult) => {
        this.setState({
          searchResult,
          isLoaded: true,
        });
      })
      .catch(console.log);
  }

  render() {
    const { location } = this.props;
    const { search } = location;
    const { q } = queryString.parse(search.slice(1));
    this.setState({ q });
    const { searchResult, isLoaded } = this.state;
    return <CardContainer searchResult={searchResult} isLoaded={isLoaded} />;
  }
}

Search.propTypes = {
  location: propTypes.shape({
    search: propTypes.shape({
      slice: propTypes.string,
    }),
  }).isRequired,
};

export default Search;
