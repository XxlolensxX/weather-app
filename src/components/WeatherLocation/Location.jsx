import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => (

    <div className="locationCont">
        <div className="locationInfoCont">
            <h1 className="locationTitle">{city}</h1>
            <p className="locationDate">monday, 18 Sep.</p>
        </div>
        <p className="weatherType">Sunny</p>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;