import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from '../../../constants/weathers';

import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy'

};


const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="4x" />;
    else 
        return <WeatherIcons name="day-sunny" size="4x" />;
}

 const WeatherTemperature = ({ temperature, weatherState}) => (
    <div className="WeatherTemperatureCont">
        <div className="weatherinfo">
            <span className="weatherTemperature">{ `${temperature} `}</span>
            <span className="weatherMedition">Cº</span>
        </div>
        {
            getWeatherIcon(weatherState)
        }
    </div>
 );

 //validate type of properties
 WeatherTemperature.propTypes = {
     temperature: PropTypes.number.isRequired,
     weatherState: PropTypes.string.isRequired
 };

 export default WeatherTemperature;