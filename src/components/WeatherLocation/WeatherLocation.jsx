import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import transformWeather from './../../services/transfromWeather';
import getUrlByCity from './../../services/getUrlByCity';

import Location from './Location';
import WeatherData from './WeatherData/WeatherData.jsx';
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
import WeklyList from './WeatherData/WeklyList.jsx';
import ForecastList from './../Forecast/ForecastList.jsx';

import BackgroundCloudy from './../../images/background-weatherapp-cloudy.jpg';

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

        console.log(data);

        const backgroundImage = {
            backgroundImage: `url(${BackgroundCloudy})`
        }

    return(
        <div className="backgroundApp" style={backgroundImage}>
            <div className="container">
            { data ? 
                <React.Fragment>
                    <div className="mainInfoCont">
                        <Location city={city} data={data}/>
                        <WeatherData data={data}/>                    
                    </div>
                    <ForecastList />
                    <WeklyList data={data} />                    
                    <WeatherExtraInfo humidity={data.humidity} wind={data.wind} tempMin={data.tempMin} tempMax={data.tempMax} />
                </React.Fragment> :
                    <CircularProgress />
                
            }    
            </div>
        </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired
}