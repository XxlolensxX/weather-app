import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import './styles.css';

 const WeatherExtraInfo = ({ humidity, wind, minTemp, maxTemp }) => (
    <div className="WeatherExtraInfoCont">
        <div className="WeatherExtraInfoMinTempCont">
            <div className="WeatherExtraInfoItem">
                <WeatherIcons className="weatherIcon" name="thermometer-exterior" size="2x" />
                <div className="WeatherExtraInfoItemRigth">
                    <p className="WeatherExtraInfoItemLabel">Min Temperature</p>
                    {`${minTemp} C`}
                </div>
            </div>
        </div>
        <div className="WeatherExtraInfoWindCont">
            <div className="WeatherExtraInfoItem">
                <WeatherIcons className="weatherIcon" name="thermometer" size="2x" />
                <div className="WeatherExtraInfoItemRigth">
                    <p className="WeatherExtraInfoItemLabel">Max Temperature</p>
                    {`${maxTemp} C`}
                </div>
            </div>
        </div>
        <div className="WeatherExtraInfoHumidityCont">
            <div className="WeatherExtraInfoItem">
                <WeatherIcons className="weatherIcon" name="humidity" size="2x" />
                <div className="WeatherExtraInfoItemRigth">
                    <p className="WeatherExtraInfoItemLabel">Humidity</p>
                    {`${humidity} % `}
                </div>
            </div>
        </div>
        <div className="WeatherExtraInfoMaxTempCont">
            <div className="WeatherExtraInfoItem">
                <WeatherIcons className="weatherIcon" name="strong-wind" size="2x" />
                <div className="WeatherExtraInfoItemRigth">
                    <p className="WeatherExtraInfoItemLabel">Wind</p>
                    {`${wind}`}
                </div>
            </div>
        </div>
    </div>
 );

 WeatherExtraInfo.propTypes = {
     humidity: PropTypes.number.isRequired,
     wind: PropTypes.string.isRequired
 }

 export default WeatherExtraInfo;