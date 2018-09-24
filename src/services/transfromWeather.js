import convert from 'convert-units';
import {
    SUN,
} from './../constants/weathers';

const getWeatherState = () => {
    return SUN;
};

const convertTemp = grades => {
    return convert(grades).from('K').to('C').toFixed(2);
};

const transformWeather = weather_data => {
    const { humidity, temp, temp_max, temp_min } = weather_data.main;
    const { speed } = weather_data.wind;
    const { weatherState } = getWeatherState(weather_data);
    const temperature = convertTemp(temp);

    const data = {
        humidity,
        temperature,
        temp_max,
        temp_min,
        wind: `${speed} m/s`,
        weatherState  
    }

    return data;

};

export default transformWeather;