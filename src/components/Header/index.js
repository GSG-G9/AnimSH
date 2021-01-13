import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  state = {
    inputValue: '',
  };

  inputLogger = (e) => {
    this.setState({
      inputValue: e.target.value.trim().toLowerCase(),
    });
  };

  render() {
    const { inputValue } = this.state;
    const btnIcon = <span className="fas fa-search" />;
    return (
      <nav>
        <ul>
          <Link to="/">
            <li className="logo">
              <img src="./resources/logo.png" alt="" />
              <h1>AnimSH</h1>
            </li>
          </Link>
          <li className="search-icon">
            <input
              id="first-name"
              type="search"
              name="icon"
              placeholder="Enter anime name ..."
              onChange={this.inputLogger}
            />
            {inputValue === '' ? (
              <div name="icon" className="icon">
                {btnIcon}
              </div>
            ) : (
              <Link className="icon" to={`/search?q=${inputValue}`}>
                {btnIcon}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
