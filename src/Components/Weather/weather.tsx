import React, {useState, useEffect} from 'react';
import './weather.css';
import SingleDay from "./SingleDay/singleDay";

const ApiKey = '1ef678cad04af1eefc2495f3c0f97cf0';
const weatherArray = [
    [
        'Mon',
        'sunny',
        '50',
        '45'
    ],
    [
        'Tue',
        'cloudy',
        '52',
        '41'
    ],
    [
        'Wed',
        'rainy',
        '37',
        '34'
    ],
    [
        'Thu',
        'cloudy',
        '43',
        '40'
    ],
    [
        'Fri',
        'snowy',
        '234',
        '32'
    ],
    [
        'Sat',
        'cloudy',
        '43',
        '23'
    ],
    [
        'Sun',
        'sunny',
        '43',
        '34'
    ]
];

const Weather = () => {
    const [fiveDaysWeather, setFiveDaysWeather] = useState([]);
    const [curentDate, setCurentDate] = useState(0);

    useEffect(() => {
        const queryParams = 'q=Chisinau,md&units=metric&APPID=' + ApiKey;

        fetch('https://api.openweathermap.org/data/2.5/forecast?' + queryParams)
            .then((response:any) => response.json())
            .then((data:any) => setFiveDaysWeather(data.list))
    }, [1]);


    return (
        <div className="weather-container">
            <div className="weather-holder">
                {
                    fiveDaysWeather.map((item:any, key:number) => {
                        const newDate = new Date(item.dt_txt).getDate();
                        console.log(curentDate, newDate);

                        if (curentDate !== newDate) {
                            setCurentDate(newDate);

                            return (
                                <SingleDay item={item} key={key}/>
                            );
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Weather;