import React, { Component } from 'react';
import Players from './Players';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Scorekeepr</div>
        <Players />
        <Footer />
      </div>
    );
  }
}


export default App;
