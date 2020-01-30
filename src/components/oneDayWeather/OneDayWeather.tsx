import React from "react";
import { useParams, Link } from "react-router-dom";
import SingleDay from "../singleDay/SingleDay";
import "./OneDayWeather.scss";
import ItemInterface, {
  UnknownJsonInterface
} from "../interfaces_helper/Interfaces";

interface DateInterface {
  [key: string]: string;
}

const OneDayWeather: React.FC<UnknownJsonInterface> = props => {
  const { date }: DateInterface = useParams();

  const oneDayContent = props.content.map(
    (item: ItemInterface, key: number) => {
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
    }
  );

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
