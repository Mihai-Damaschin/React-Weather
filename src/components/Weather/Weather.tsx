import React from "react";
import "./Weather.scss";
import SingleDay from "../SingleDay/SingleDay";
import ItemInterface, { UnknownJsonInterface } from "../interfaces";
import { useSelector } from "react-redux";

const Weather: React.FC<UnknownJsonInterface> = props => {
  const counter = useSelector((state: { counter: number }) => state.counter);
  let count = 0;
  let maxTemp = 0;
  let minTemp = 0;
  let curentDate = 0;
  let dayIcon: string;

  const fiveDayContent = props.content.map(
    (item: ItemInterface, key: number) => {
      const newDate = new Date(item.dt_txt);
      const newCurentDate = newDate.getDate();

      count++;
      maxTemp += item.main.temp_max;
      minTemp += item.main.temp_min;

      // get icon from middle hour of the day
      if (newDate.getHours() === 12) {
        dayIcon = item.weather[0].icon;
      }

      if (curentDate !== newCurentDate) {
        let getMaxTemp = maxTemp / count;
        let getMinTemp = minTemp / count;
        maxTemp = 0;
        minTemp = 0;
        count = 0;

        curentDate = newCurentDate;
        return (
          <SingleDay
            date={item.dt_txt}
            icon={dayIcon ? dayIcon : item.weather[0].icon}
            maxTemp={getMaxTemp}
            minTemp={getMinTemp}
            key={key}
          />
        );
      }
      return null;
    }
  );

  return (
    <div className="weather-container">
      {counter}
      <div className="weather-holder">{fiveDayContent}</div>
    </div>
  );
};

export default Weather;
