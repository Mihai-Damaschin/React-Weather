import React from "react";
import { useParams, Link } from "react-router-dom";
import SingleDay from "../singleDay/SingleDay";
import "./OneDayWeather.scss";

interface OneDayWeatherInterface {
  content: any;
}

const OneDayWeather: React.FC<OneDayWeatherInterface> = props => {
  const { date }: any = useParams();

  const oneDayContent = props.content.map((item: any, key: number) => {
    let newDate = new Date(item.dt_txt);

    if (parseInt(date) === newDate.getDate()) {
      return (
        <SingleDay
          date={item.dt_txt}
          icon={item.weather[0].icon}
          maxTemp={item.main.temp_max}
          minTemp={item.main.temp_min}
          hours={true}
          key={key}
        />
      );
    }
    return null;
  });

  return (
    <div>
      <div>
        <Link className={"back-btn-link"} to={"/"}>
          <div className="back-btn">Go back</div>
        </Link>
      </div>
      <div className="weather-container">
        <div className="weather-holder">{oneDayContent}</div>
      </div>
    </div>
  );
};

export default OneDayWeather;
