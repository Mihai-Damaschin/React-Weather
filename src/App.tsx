import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

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

const Weather: React.FC = () => {
  return (
      <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              here1
            </Route>
            <Route path="/users">
              here2
            </Route>
            <Route path="/">
              here3
            </Route>
          </Switch>
        </div>
      </Router>
      <div className="weather-container">
        <div className="weather-holder">
          {
            weatherArray.map((item:string[], key:number) => {
              return (
                  <div className="one-day-weather">
                    <div className="day-name">{item[0]}</div>
                    <div className="icon-holder">
                      <div className={item[1] + '-icon'}/>
                    </div>
                    <div className="temperature-holder">
                      <div className="temperature-max">{item[2]}&#176;</div>
                      <div className="temperature-min">{item[3]}&#176;</div>
                    </div>
                  </div>);
            })
          }
        </div>
      </div>
      </div>
  );
}

export default Weather;
