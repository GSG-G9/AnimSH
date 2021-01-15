import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Main.css';
import Home from './Home';
import Search from './Search';
import { AnimeInfo } from './AnimeInfo';

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search" component={Search} />
        <Route exact path="/animeInfo/:id" component={AnimeInfo} />
        <Route path="*">
          <div>
            <h1>404 NOT Found</h1>
            <Link to="/">Go Home</Link>
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Main;
