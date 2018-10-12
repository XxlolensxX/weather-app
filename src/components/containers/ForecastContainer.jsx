import React, { Component } from 'react';
import ForecastList from './../Forecast/ForecastList.jsx';

class ForecastContainer extends Component {
    render() {
        return (
            <ForecastList city={this.props.city} />
        );
    }
}

export default ForecastContainer;