import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import transformWeather from './../../services/transfromWeather';
import getUrlByCity from './../../services/getUrlByCity';

import Location from './Location';
import WeatherData from './WeatherData/WeatherData.jsx';
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
import WeklyList from './WeatherData/WeklyList.jsx';

import BackgroundCloudy from './../../images/background-weatherapp-cloudy.jpg';

class WeatherLocation extends Component {
    constructor(props) {
        
        super(props);
        
        const { city } = props;

        this.state = {
            city,
            data: null
        }
    }

    componentDidMount(){
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {

        const query = getUrlByCity(this.state.city); 

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
            backgroundImage: `url(${BackgroundCloudy})`
        }
    return(
        <div className="backgroundApp" style={backgroundImage}>
            <div className="container">
                <div className="mainInfoCont">
                    <Location city={city}/>
                        { data ?    

                        <WeatherData data={data}/>               
                        :
                        <CircularProgress />
                    }
                </div>
                    <WeklyList data={data} />
                
                    { data ? 
                    <WeatherExtraInfo humidity={data.humidity} wind={data.wind} tempMin={data.tempMin} tempMax={data.tempMax} /> :
                    <CircularProgress />
                    }
                
            </div>
        </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
    tempMin: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired,
    
}

export default WeatherLocation;