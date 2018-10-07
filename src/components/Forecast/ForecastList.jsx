import React, { Component } from 'react';

import ForecastItem from './ForecastItem.jsx';

import { APIKEY, ENDPOINT_FORECAST } from './../../constants/keys';
import forecastTransformData from './../../services/ForecastTransform';
import './styles.css';

//const query = `${ENDPOINT_FORECAST}?q=${city}&appid=${APIKEY}`;
const query = `${ENDPOINT_FORECAST}?q=Santiago&appid=${APIKEY}`;

export default class ForecastList extends Component{
    constructor(){
        super();

        this.state = {
            newData : null
        };
    }

    componentDidMount() {
        fetch(query).then( resolve => {
            return resolve.json().then( forecastData => {
                const newData = forecastTransformData(forecastData);
                this.setState(
                    {newData}
                );
            });
        })
    }
    
    ForecastItemIterate = (newData) => {
        const extendedForecast = newData;

        return extendedForecast.map( forecast =>  
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`} 
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            temperature={forecast.data.temperature} 
            weatherState={forecast.data.weatherState}
        /> );
    
    }

    RenderProgress = () => {
        return 'cargando...'
    }

    render(){
        const { newData } = this.state;
        return(
            <div className="ForecastListCont">
                {   newData ?
                    this.ForecastItemIterate(newData) :
                    this.RenderProgress()
                }
            </div>
        )
    }
};