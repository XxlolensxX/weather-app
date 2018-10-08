import React, { Component } from 'react';

import ForecastItem from './ForecastItem.jsx';

import { APIKEY, ENDPOINT_FORECAST } from './../../constants/keys';
import forecastTransformData from './../../services/ForecastTransform';

import './styles.css';

export default class ForecastList extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            newData : null
        };
    }
    
    componentDidMount() {
        const query = `${ENDPOINT_FORECAST}?q=${this.props.city}&appid=${APIKEY}`;

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