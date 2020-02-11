import React from "react";
import { Link } from "react-router-dom";
import "./SingleDay.scss";

interface SingleDayInterface {
  date: string;
  icon: string;
  maxTemp: number;
  minTemp: number;
  hours?: boolean;
}

const SingleDay: React.FC<SingleDayInterface> = props => {
  const curentDate = new Date(props.date);
  let dayName;

  // get day name from day number
  switch (curentDate.getDay()) {
    case 0:
      dayName = "Mon";
      break;
    case 1:
      dayName = "Tue";
      break;
    case 2:
      dayName = "Wed";
      break;
    case 3:
      dayName = "Thu";
      break;
    case 4:
      dayName = "Fri";
      break;
    case 5:
      dayName = "Sat";
      break;
    case 6:
      dayName = "Sun";
      break;
    default:
      break;
  }

  return (
    <Link
      to={props.hours ? "#" : "/day/" + curentDate.getDate()}
      className="one-day-weather"
    >
      <div className="day-name">
        {props.hours ? curentDate.getHours() + ":00" : dayName}
      </div>
      <div className="icon-holder">
        <div
          className={"icon"}
          style={{ backgroundImage: "url(/images/" + props.icon + ".svg)" }}
        />
      </div>
      <div className="temperature-holder">
        <div className="temperature-max">{props.maxTemp.toFixed()}&#176;</div>
        <div className="temperature-min">{props.minTemp.toFixed()}&#176;</div>
      </div>
    </Link>
  );
};

export default SingleDay;
