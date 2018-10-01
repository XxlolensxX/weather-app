
import { ENDPOINT, ENDPOINT_FORECAST, APIKEY } from './../constants/keys';

const getUrlByCity = city => {
    return `${ENDPOINT}?q=${city}&appid=${APIKEY}`;
}

export default getUrlByCity;