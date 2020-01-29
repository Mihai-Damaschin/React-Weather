import React from 'react';
import './weather.scss';
import SingleDay from "./SingleDay/singleDay";

interface weatherInterface {
    content: any
}

const Weather = (props: weatherInterface) => {
    let count = 0;
    let maxTemp = 0;
    let minTemp = 0;
    let curentDate = 0;
    let dayIcon: string;

    const fiveDayContent = props.content.map((item: any, key: number) => {
        const newDate = new Date(item.dt_txt);
        const newCurentDate = newDate.getDate();

        count++;
        maxTemp += item.main.temp_max;
        minTemp += item.main.temp_min;

        // get icon from middle hour of the day
        if (newDate.getHours() === 12) {
            dayIcon = item.weather[0].icon
        }

        if (curentDate !== newCurentDate) {
            let getMaxTemp = (maxTemp / count);
            let getMinTemp = (minTemp / count);
            maxTemp = 0;
            minTemp = 0;
            count = 0;

            curentDate = newCurentDate;
            return (
                <SingleDay date={item.dt_txt}
                           icon={dayIcon ? dayIcon : item.weather[0].icon}
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