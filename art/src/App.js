import React, { Component } from 'react';

import Work from './work';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Art</h1>
        </header>
        <Work />
      </div>
    );
  }
}

export default App;
