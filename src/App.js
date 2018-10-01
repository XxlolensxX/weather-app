import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation/WeatherLocation.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation city="Washington,us"/>
      </div>
    );
  }
}

export default App;
