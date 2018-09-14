import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/WeatherData.jsx';
import PropTypes from 'prop-types';

const WeatherLocation = () => (
    <div>
        <Location city={'Santiago'}/>
        <WeatherData />
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;