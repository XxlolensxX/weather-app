import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import CircularProgress from '@material-ui/core/CircularProgress';
import Skeleton from './../Skeleton/Skeleton.jsx';

import transformWeather from './../../services/transfromWeather';
import getUrlByCity from './../../services/getUrlByCity';

import Location from './Location';
import WeatherData from './WeatherData/WeatherData.jsx';
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
import WeklyList from './WeatherData/WeklyList.jsx';
import ForecastList from './../Forecast/ForecastList.jsx';

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
            console.log(nextProps);
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

    // getBackground = (background) => {
     

    //     const backGrounds = {
    //        clouds: 'url(./../../images/background-weatherapp-cloudy.jpg)',
    //        rain: 'url(./../../images/background-weatherapp-rainy.jpg)'
    //    };

    //     if(background === 'clouds')
    //         return const back = {backgroundImage: backGrounds['clouds'] }
    //     else 
    //         return const back = {backgroundImage: backGrounds['rain'] }
    //      //console.log(back);

    //     return back;
    // }
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
                        <ForecastList city={city} />
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