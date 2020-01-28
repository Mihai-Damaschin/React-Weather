import React, {useState, useEffect} from 'react';
import './weather.css';
import SingleDay from "./SingleDay/singleDay";

interface weatherInterface {
    content: any
}

const Weather = (props: weatherInterface) => {
    let count = 0;
    let maxTemp = 0;
    let minTemp = 0;
    let curentDate = 0;

    const fiveDayContent = props.content.map((item:any, key:number) => {
        const newDate = new Date(item.dt_txt);

        count++;
        maxTemp += item.main.temp_max;
        minTemp += item.main.temp_min;

        if (curentDate !== newDate.getDate()) {
            let getMaxTemp = (maxTemp / count);
            let getMinTemp = (minTemp / count);
            maxTemp = 0;
            minTemp = 0;
            count = 0;

            curentDate = newDate.getDate();
            return (
                <SingleDay date={item.dt_txt}
                           icon={item.weather[0].icon}
                           maxTemp={getMaxTemp}
                           minTemp={getMinTemp}
                           key={key}
                />
            );
        }
    });

    return (
        <div className="weather-container">
            <div className="weather-holder">
                {
                    fiveDayContent
                }
            </div>
        </div>
    );
};

export default Weather;