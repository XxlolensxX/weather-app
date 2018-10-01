import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import './styles.css';

 const WeatherExtraInfo = ({ humidity, wind, tempMin, tempMax }) => (
    <div className="WeatherExtraInfoCont">
        <div className="WeatherExtraInfoMinTempCont">
            <div className="WeatherExtraInfoItem">
                <WeatherIcons className="WeatherIcon" name="thermometer-exterior" size="2x" />
                <div className="WeatherExtraInfoItemRigth">
                    <p className="WeatherExtraInfoItemLabel">Min Temp</p>
                    <span className="WeatherExtraInfoItemInfo">{`${tempMin}C`}</span>
                </div>
            </div>
        </div>
        <div className="WeatherExtraInfoWindCont">
            <div className="WeatherExtraInfoItem">
                <WeatherIcons className="WeatherIcon" name="thermometer" size="2x" />
                <div className="WeatherExtraInfoItemRigth">
                    <p className="WeatherExtraInfoItemLabel">Max Temp</p>
                    <span className="WeatherExtraInfoItemInfo">{`${tempMax}C`}</span>
                </div>
            </div>
        </div>
        <div className="WeatherExtraInfoHumidityCont">
            <div className="WeatherExtraInfoItem">
                <WeatherIcons className="WeatherIcon" name="humidity" size="2x" />
                <div className="WeatherExtraInfoItemRigth">
                    <p className="WeatherExtraInfoItemLabel">Humidity</p>
                    <span className="WeatherExtraInfoItemInfo">{`${humidity}% `}</span>
                </div>
            </div>
        </div>
        <div className="WeatherExtraInfoMaxTempCont">
            <div className="WeatherExtraInfoItem">
                <WeatherIcons className="WeatherIcon" name="strong-wind" size="2x" />
                <div className="WeatherExtraInfoItemRigth">
                    <p className="WeatherExtraInfoItemLabel">Wind</p>
                    <span className="WeatherExtraInfoItemInfo">{`${wind}`}</span>
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