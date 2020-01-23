import React from 'react';
import './App.css';

const weatherArray = [
  [
    'Mon',
    'sun',
    '50',
    '49'
  ],
  [
    'Tue',
    'sun',
    '50',
    '49'
  ],
  [
    'Wed',
    'sun',
    '50',
    '49'
  ],
  [
    'Thu',
    'sun',
    '50',
    '49'
  ],
  [
    'Fri',
    'sun',
    '50',
    '49'
  ],
  [
    'Sat',
    'sun',
    '50',
    '49'
  ],
  [
    'Sun',
    'sun',
    '50',
    '49'
  ]
];

const Weather: React.FC = () => {
  return (
      <div className="weather-container">
        <div className="weather-holder">
          <div className="one-day-weather">
            <div className="day-name">Day name</div>
            <div className="icon-holder">
              <div className="clodly-icon"></div>
            </div>
            <div className="temperature-holder">
              <div className="temperature-max">50&#176;</div>
              <div className="temperature-min">50&#176;</div>
            </div>
          </div>
          <div className="one-day-weather">
            <div className="day-name">Day name</div>
            <div className="icon-holder">
              <div className="snowy-icon"></div>
            </div>
            <div className="temperature-holder">
              <div className="temperature-max">50&#176;</div>
              <div className="temperature-min">50&#176;</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Weather;
