import moment from 'moment';
import transformWeather from './transfromWeather';

const thisDay = new Date().getDay();

const forecastTransformData  = forecastData => (
    forecastData.list.filter(
        item => ( 
            moment.unix(item.dt).day() === thisDay       
            )).map( item => (
                {
                    weekDay: moment.unix(item.dt).format('ddd'),
                    hour: moment.unix(item.dt).hour(),
                    data: transformWeather(item)
                }
                ))
                );

//con parentesis no es necesario usar return
export default forecastTransformData;