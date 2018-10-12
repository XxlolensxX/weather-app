import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Skeleton from './../Skeleton/Skeleton.jsx';

import transformWeather from './../../services/transfromWeather';
import getUrlByCity from './../../services/getUrlByCity';

import Location from './Location';
import WeatherData from './WeatherData/WeatherData.jsx';
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
import WeklyList from './WeatherData/WeklyList.jsx';
import ForecastContainer from './../containers/ForecastContainer.jsx';

import BackgroundCloud from './../../images/background-weatherapp-rainy.jpg';
//import BackgroundRain from './../../images/background-weatherapp-rainy.jpg';

export default class WeatherLocation extends Component {
    constructor(props) {
        
        super(props);
        
        const { city } = props;

        this.state = {
            city
        }
    }

    componentDidMount(){
        this.handleUpdateCity(this.state.city);
        
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city) {
            this.setState({
                city: nextProps.city,
                data: null
            });

            this.handleUpdateCity(nextProps.city);
        }

    }


    handleUpdateCity = (city) => {

        const query = getUrlByCity(city); 

        fetch(query).then( resolve => {
            return resolve.json().then(data => {
                const newWeather = transformWeather(data);
                this.setState({
                    data: newWeather
                });
                }
            );
        });
    };

    render(){

        const { city, data } = this.state;

        const backgroundImage = {
            backgroundImage: `url(${BackgroundCloud})`
        }

    return(
        <div className="backgroundApp">
            <div className="container">
        { data ? 
                 
            <React.Fragment>
                <div className="mainInfoCont" style={backgroundImage}>
                    <Location city={city} data={data}/>
                    <WeatherData data={data}/>                    
                    <ForecastContainer city={city} />
                </div>
                <WeklyList data={data} />                    
                <WeatherExtraInfo humidity={data.humidity} wind={data.wind} tempMin={data.tempMin} tempMax={data.tempMax} />
            </React.Fragment> :

            <Skeleton />
                
        }    
            </div>
        </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired
}