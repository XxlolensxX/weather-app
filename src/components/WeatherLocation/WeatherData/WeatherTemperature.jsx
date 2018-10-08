import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import moment from 'moment';

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


const getWeatherIcon = (dt ,weatherState) => {

    const icon = icons[weatherState];
    const hour = moment.unix(dt).hour();

    if (icon && hour <= 9 && hour >= 19 )
        return <WeatherIcons name={`day-${icon}`} size="4x" />;
    else 
        return <WeatherIcons name={`night-${icon}`} size="4x" />;
}

 const WeatherTemperature = ({ temperature, weatherState, dt }) => {
     return (
    <div className="WeatherTemperatureCont">
        <div className="weatherinfo">
            <span className="weatherTemperature">{ `${temperature} Cº`}</span>
        </div>
        {
            getWeatherIcon(dt, weatherState)
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