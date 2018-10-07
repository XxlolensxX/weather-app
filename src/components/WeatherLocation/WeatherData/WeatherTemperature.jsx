import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE

} from '../../../constants/weathers';

import './styles.css';

const icons = {
    [CLOUD]: 'cloudy',
    [SUN]: 'sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'lightning',
    [DRIZZLE]: 'showers'
};


const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="4x" />;
    else 
        return <WeatherIcons name="day-sunny" size="4x" />;
}

 const WeatherTemperature = ({ temperature, weatherState }) => {
     return (
    <div className="WeatherTemperatureCont">
        <div className="weatherinfo">
            <span className="weatherTemperature">{ `${temperature} `}</span>
            <span className="weatherMedition">Cº</span>
        </div>
        {
            getWeatherIcon(weatherState)
        }
    </div>
    )
 };

 //validate type of properties
 WeatherTemperature.propTypes = {
     temperature: PropTypes.string.isRequired,
     weatherState: PropTypes.string.isRequired
 };

 export default WeatherTemperature;