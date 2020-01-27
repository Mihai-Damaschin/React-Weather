import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Weather from "./Components/Weather/weather";

const App = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Weather />
            </Route>
            <Route path="/page2">
              here2
            </Route>
            <Route path="/about">
              here3
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App;