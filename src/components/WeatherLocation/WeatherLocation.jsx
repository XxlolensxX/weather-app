import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/WeatherData.jsx';
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
import PropTypes from 'prop-types';

import {
    SUN,
} from './../../constants/weathers';

import BackgroundCloudy from './../../images/background-weatherapp-cloudy.jpg';

const APIKEY = '39c6b725ab948921f0e36eb928f419d0';
const ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather';
const LOCATION = 'Santiago,cl';
const QUERY = `${ENDPOINT}?q=${LOCATION}&appid=${APIKEY}`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data
        }
    }

    handleUpdateClick = () => {
        console.log('Updated');
        fetch(QUERY);
        this.setState({
            city: 'Santiago',
        })
            
    };

    
    render(){
        const { city, data } = this.state
        const backgroundImage = {
            backgroundImage: `url(${BackgroundCloudy})`
        }
    return(
        <div className="backgroundApp" style={backgroundImage}>
            <div className="container">
                <div>
                <Location city={city}/>
                <WeatherData data={data}/>
                </div>

                <WeatherExtraInfo humidity={20} wind={'10 m/s'}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherLocation;