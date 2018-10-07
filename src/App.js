import React, { Component } from 'react';
//import Header from './components/SearchingHeader/Header.jsx';
import WeatherLocation from './components/WeatherLocation/WeatherLocation.jsx';
import './App.css';

import './components/SearchingHeader/styles.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = { 
      city : 'Santiago',
      value: ''
    };
  }
  
  handleChange = event => {
    //cuando se cambia el state con el input el valor inicial no puede ser null o undefined
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
      this.setState({
        city: this.state.value,
      })
      event.preventDefault();
    }
  
  render() {
    const { city, value } = this.state;

    return (
      <div className="App">
        <div className="WeatherAppHeader">
          <span className="WeatherAppLogo">Logo</span>
              
            <form onSubmit={this.handleSubmit} className="WeatherSearchInputCont">
              <span>x</span>
              <input 
              className="WeatherSearchInputText" 
              type="text" 
              value={value} 
              name="search"
              onChange={this.handleChange.bind(this)}
              />
              <label className="WeatherSearchInputTextLabel" htmlFor="WeatherSearchInputText">Search</label>
            </form>  
          </div>
        <WeatherLocation city={city}/>
      </div>
    );
  }
}

export default App;
