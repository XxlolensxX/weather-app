import React from 'react';

import WeatherIcons from 'react-weathericons';

import './styles.css';

import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE

} from './../../constants/weathers';

const icons = {
    [CLOUD]: 'day-cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'day-rain',
    [SNOW]: 'day-showers',
    [THUNDER]: 'day-lightning',
    [DRIZZLE]: 'day-showers'
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="2x" />;
    else 
        return <WeatherIcons name="day-sunny" size="2x" />;
}

const ForecastItem = ( {hour, temperature ,weatherState}) => {

    return(
        <div className="ForecastItem">
            <div>
                <span>{`${hour}:00 hrs`}</span>
            </div>
            <div className="ForecastIcon">
            {
                getWeatherIcon(weatherState)
            }
            </div>
            <div>
                <span>{`${temperature}ºC`}</span>
            </div>
        </div>
    )
}

export default ForecastItem;