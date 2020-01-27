import React from "react";
import './singleDay.css';



const SingleDay = (props:any) => {
    return (
        <a href={'/day'} className="one-day-weather">
            <div className="day-name">{}</div>
            <div className="icon-holder">
                <div className={'icon'} style={{backgroundImage: 'url(../../images/' + props.item.weather[0].icon + '.svg)'}}/>
            </div>
            <div className="temperature-holder">
                <div className="temperature-max">{props.item.main.temp_max}&#176;</div>
                <div className="temperature-min">{props.item.main.temp_min}&#176;</div>
            </div>
        </a>
    );
};

export default SingleDay