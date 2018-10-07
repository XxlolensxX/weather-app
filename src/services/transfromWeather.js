import convert from 'convert-units';

const convertTemp = grades => {
    return convert(grades).from('K').to('C').toFixed(0);
};

const transformWeather = weather_data => {
    const { humidity, temp, temp_max, temp_min } = weather_data.main;
    const { speed } = weather_data.wind;
    const { main, description } = weather_data.weather[0];
    const { dt } = weather_data;
    const temperature = convertTemp(temp);
    const tempMin = convertTemp(temp_min);
    const tempMax = convertTemp(temp_max);
    const data = {
        humidity,
        temperature,
        tempMax,
        tempMin,
        wind: `${speed} m/s`,
        weatherState : main,
        description,
        dt
    }

    return data;

};

export default transformWeather;