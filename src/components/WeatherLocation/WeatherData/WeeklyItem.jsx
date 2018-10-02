import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeeklyItem = ( {data : { date, tempMin, tempMax, description } }) => {
    return(
        <div className="WeaklyListItem">
            <WeatherIcons className="WeaklyWeatherIcon" name="day-cloudy" size="2x" /> 
            <div className="WeaklyListDayCont">
                <p className="WeaklyListDay">{`${date}`}</p>
            </div>
             <div className="WeaklyListTempCont">
                <p className="WeaklyListItemPharagraph">{`${tempMin}º / ${tempMax}º`}</p>
            </div>
            <div className="WeaklyListDescCont">
            <p className="WeaklyListDesc">{`${description}`}</p>
            </div>
        </div>
    )
};

export default WeeklyItem;