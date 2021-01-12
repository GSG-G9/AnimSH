import React from 'react';

import './App.css';

import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
