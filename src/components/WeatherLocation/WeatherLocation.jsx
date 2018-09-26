import React, { Component } from 'react';
import transformWeather from './../../services/transfromWeather';
import { QUERY } from './../../constants/keys';
import Location from './Location';
import WeatherData from './WeatherData/WeatherData.jsx';
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
import PropTypes from 'prop-types';

import BackgroundCloudy from './../../images/background-weatherapp-cloudy.jpg';

const data = {
    temperature: 5,
    weatherState: "SUN",
    humidity: 10,
    wind: '10 m/s',
    minTemp: 1,
    maxTemp: 100
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
        fetch(QUERY).then( resolve => {
            return resolve.json().then(data => {
                const newWeather = transformWeather(data);
                console.log(newWeather);
                    this.setState({
                        city: 'Santiago',
                        data: newWeather
                    });
                }
            );
        });

            
    };

    render(){
        const { city, data } = this.state
        const backgroundImage = {
            backgroundImage: `url(${BackgroundCloudy})`
        }
    return(
        <div className="backgroundApp" style={backgroundImage}>
            <div className="container">
                <div className="mainInfoCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                </div>

                <button onClick={this.handleUpdateClick}>Actualizar</button>
                <WeatherExtraInfo humidity={data.humidity} wind={data.wind} minTemp={data.minTemp} maxTemp={data.maxTemp}/>
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