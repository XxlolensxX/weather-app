import React, { Component } from 'react';
import { connect } from 'react-redux';

//import { FaSearch } from 'react-icons/fa';
import WeatherLocationContainer from './components/containers/WeatherLocationContainer.jsx';
import SearchingHeader from './components/SearchingHeader/Header.jsx'
import './App.css';

import './components/SearchingHeader/styles.css';

import { setCity } from './actions/setCity';

//import poweredByGoogleLogo from './../src/images/logos/powered_by_google_on_white.png';



class App extends Component {

  constructor(props){
    super(props);

    this.state = { 
      value: ''
    };
  }

  
  render() {


    return (
      <div className="App">
        <SearchingHeader/>
        <WeatherLocationContainer/>
      </div>
    );
  }
}

const func1 = () => {};
const mapDispatchToProps = dispatch => ({
  setCity: payload => dispatch(setCity(payload))
});

const connectedApp = connect(func1,mapDispatchToProps)(App);

export default connectedApp;
