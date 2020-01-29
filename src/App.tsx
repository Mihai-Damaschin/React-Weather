import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from "./components/weather/Weather";
import OneDayWeather from "./components/oneDayWeather/OneDayWeather";
import Loading from "./components/loading/Loading";

const App: React.FC = () => {
  const [fiveDaysWeather, setFiveDaysWeather] = useState([]);
  const [wasLoaded, setWasLoaded] = useState();

  useEffect(() => {
    const queryParams =
      "q=Chisinau,md&units=metric&APPID=" + process.env.REACT_APP_API_KEY;

    function fiveDaysWeatherChange(data: any) {
      setFiveDaysWeather(data.list);
    }

    function wasLoadedChange() {
      setWasLoaded("hide-loader");
    }

    fetch("https://api.openweathermap.org/data/2.5/forecast?" + queryParams)
      .then((response: any) => response.json())
      .then((data: any) => fiveDaysWeatherChange(data))
      .then(wasLoadedChange);
  }, []);

  return (
    <Router>
      <div>
        <Loading hide={wasLoaded} />
        <Switch>
          <Route
            path="/day/:date"
            children={<OneDayWeather content={fiveDaysWeather} />}
          />
          <Route path="/">
            <Weather content={fiveDaysWeather} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
