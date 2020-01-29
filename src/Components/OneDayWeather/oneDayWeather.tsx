import React from 'react';
import {
    useParams
} from 'react-router-dom';
import SingleDay from "../Weather/SingleDay/singleDay";
import './oneDayWeather.scss';

interface oneDayWeatherInterface {
    content: any
}

const OneDayWeather = (props: oneDayWeatherInterface) => {
    const {date}: any = useParams();

    const oneDayContent = props.content.map((item: any, key: number) => {
        let newDate = new Date(item.dt_txt);

        if (parseInt(date) === newDate.getDate()) {

            return (
                <SingleDay date={item.dt_txt}
                           icon={item.weather[0].icon}
                           maxTemp={item.main.temp_max}
                           minTemp={item.main.temp_min}
                           hours={true}
                           key={key}
                />
            );
        }
    });

    return (
        <div>
            <div>
                <a className={'back-btn-link'} href={'/'}>
                    <div className="back-btn">Go back</div>
                </a>
            </div>
            <div className="weather-container">
                <div className="weather-holder">
                    {
                        oneDayContent
                    }
                </div>
            </div>
        </div>
    );
};

export default OneDayWeather
