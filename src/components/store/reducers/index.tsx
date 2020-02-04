import { combineReducers } from "redux";
import Counter from "./counter";
import weatherData from "./weatherData";

const allReducers = combineReducers({
  counter: Counter,
  weatherData: weatherData
});

export default allReducers;
