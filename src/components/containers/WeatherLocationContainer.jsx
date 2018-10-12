import React, { Component } from 'react';
import WeatherLocation from './../WeatherLocation/WeatherLocation.jsx';
import { connect } from 'react-redux';

class WeatherLocationContainer extends Component {
    render() {
        return (
            <WeatherLocation city={this.props.city}/>
        );
    }
};

const mapStateToProps = ({ city }) => ({
    city
});

export default connect(mapStateToProps,null)(WeatherLocationContainer);