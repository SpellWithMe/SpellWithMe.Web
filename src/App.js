import React, { Component } from 'react';
import './App.css';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import GoogleLogin from './components/auth/google'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/images/SpellWithMe_logo_md.jpg'}  className="App-logo" alt="SpellWith.Me" />
        </header>
        <GoogleLogin />        
      </div>      
    );
  }
}

export default App;
