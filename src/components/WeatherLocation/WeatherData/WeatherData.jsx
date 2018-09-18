import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo.jsx';
import WeatherTemperature from './WeatherTemperature.jsx';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className="WeatherDataCont">
        <WeatherTemperature temperature={20} weatherState={CLOUDY}/>
        <WeatherExtraInfo humidity={80} wind={'10 m/s'}/>
    </div>
);

export default WeatherData;