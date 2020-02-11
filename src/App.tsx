import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from "./components/Weather/Weather";
import OneDayWeather from "./components/OneDayWeather/OneDayWeather";
import Loading from "./components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetData } from "./components/apiRequests/weatherRequest";
import { UnknownJsonInterface } from "./components/interfaces";

const App: React.FC = () => {
  const weatherData = useSelector(
    (state: { weatherData: UnknownJsonInterface }) => state.weatherData
  );
  const dataLoading = useSelector(
      (state: { dataLoading: boolean }) => state.dataLoading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const queryParams = "?q=Chisinau,md&units=metric&APPID=" + process.env.REACT_APP_API_KEY;
    const apiUri = "https://api.openweathermap.org/data/2.5/forecast" + queryParams;

    dispatch(asyncGetData({apiUri}));
  }, [dispatch]);

  return (
    <Router>
      <div>
        {dataLoading ? <Loading /> : null}
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
