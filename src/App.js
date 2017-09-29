import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/images/SpellWithMe_logo_md.jpg'}  className="App-logo" alt="SpellWith.Me" />
        </header>
      </div>
    );
  }
}

export default App;
