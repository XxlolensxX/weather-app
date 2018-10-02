import React, { Component } from 'react';
import Header from './components/SearchingHeader/Header.jsx';
import WeatherLocation from './components/WeatherLocation/WeatherLocation.jsx';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = { city :'Washington,us' };
  }
  render() {

    const { city } = this.state;

    return (
      <div className="App">
        <Header />
        <WeatherLocation city={city}/>
      </div>
    );
  }
}

export default App;
