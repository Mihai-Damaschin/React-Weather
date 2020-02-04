import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from "./components/Weather/Weather";
import OneDayWeather from "./components/OneDayWeather/OneDayWeather";
import Loading from "./components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetData } from "./components/apiRequests/weatherRequest";

const App: React.FC = () => {
  const weatherData = useSelector(
    (state: { weatherData: any }) => state.weatherData
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const queryParams = "?q=Chisinau,md&units=metric&APPID=" + process.env.REACT_APP_API_KEY;
    const apiUri = "https://api.openweathermap.org/data/2.5/forecast" + queryParams;

    dispatch(asyncGetData({apiUri, setLoading}));
  }, [dispatch]);

  return (
    <Router>
      <div>
        {loading ? <Loading /> : null}
        <Switch>
          <Route
            path="/day/:date"
            children={<OneDayWeather content={weatherData} />}
          />
          <Route path="/">
            <Weather content={weatherData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
