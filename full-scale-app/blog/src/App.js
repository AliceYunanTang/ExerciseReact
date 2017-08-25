import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        <Header />
        <Main />
        <hr />
        <Footer />

      </div>
    );
  }
}

export default App;
