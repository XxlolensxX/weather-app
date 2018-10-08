import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Location = ({ city, data : {dt, weatherState} }) => {

    return(
    <div className="locationCont">
        <div className="locationInfoCont">
            <h1 className="locationTitle">{city}</h1>
            <p className="locationDate">{moment.unix(dt).format('dddd D, Y')}</p>
        </div>
        <p className="weatherType">{weatherState}</p>
    </div>
    )};

Location.propTypes = {
    city: PropTypes.string.isRequired,
    data: PropTypes.shape({
        dt: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
    }),
}

export default Location;