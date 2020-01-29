import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Weather from "./Components/Weather/weather";
import OneDayWeather from "./Components/OneDayWeather/oneDayWeather";

const App = () => {
  const ApiKey = '1ef678cad04af1eefc2495f3c0f97cf0';
  const [fiveDaysWeather, setFiveDaysWeather] = useState([]);

  useEffect(() => {
    const queryParams = 'q=Chisinau,md&units=metric&APPID=' + ApiKey;

    fetch('https://api.openweathermap.org/data/2.5/forecast?' + queryParams)
        .then((response:any) => response.json())
        .then((data:any) => setFiveDaysWeather(data.list))
  }, [1]);

  return (
      <Router>
        <div>
          <Switch>
            <Route path="/day/:date" children={<OneDayWeather content={fiveDaysWeather} />} />
            <Route path="/">
              <Weather content={fiveDaysWeather} />
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App;