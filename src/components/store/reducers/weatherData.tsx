import { UnknownJsonInterface} from "../../interfaces";

interface WeatherDataInterface {
  type: string;
  payload: UnknownJsonInterface
}

export default function weatherData(
  state: [] = [],
  action: WeatherDataInterface
) {
  switch (action.type) {
    case "FETCH_WEATHER_DATA_FULFILLED":
      return action.payload;
    default:
      return state;
  }
}
