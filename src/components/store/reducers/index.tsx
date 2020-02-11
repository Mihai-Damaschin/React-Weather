import { combineReducers } from "redux";
import weatherData from "./weatherData";
import dataLoading from "./dataLoading";

const allReducers = combineReducers({
  weatherData: weatherData,
  dataLoading: dataLoading
});

export default allReducers;
