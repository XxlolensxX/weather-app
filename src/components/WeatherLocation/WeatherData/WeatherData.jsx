import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo.jsx';
import WeatherTemperature from './WeatherTemperature.jsx';
import './styles.css';

const WeatherData = ({ data: {temperature,weatherState,humidity,wind} }) => {
    return (
        <div className="WeatherDataCont">
            <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
            <WeatherExtraInfo humidity={humidity} wind={wind}/> 
        </div>
    );
};

WeatherData.propTypes ={
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,

    })
}

export default WeatherData;