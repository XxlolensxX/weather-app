import React from 'react';
import PropTypes from 'prop-types';

import WeatherTemperature from './WeatherTemperature.jsx';

import './styles.css';

const WeatherData = ({ data: { temperature, weatherState, dt } }) => {
    return (
        <div className="WeatherDataCont">
            <WeatherTemperature temperature={temperature} weatherState={weatherState} dt={dt}/>
        </div>
    );
};

WeatherData.propTypes ={
    data: PropTypes.shape({
        temperature: PropTypes.string.isRequired,
        weatherState: PropTypes.string.isRequired,
        //humidity: PropTypes.number.isRequired,
        //wind: PropTypes.string.isRequired,

    })
}

export default WeatherData;