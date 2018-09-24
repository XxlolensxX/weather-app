const APIKEY = '39c6b725ab948921f0e36eb928f419d0';
const ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather';
const LOCATION = 'Santiago,cl';

export const QUERY = `${ENDPOINT}?q=${LOCATION}&appid=${APIKEY}`;