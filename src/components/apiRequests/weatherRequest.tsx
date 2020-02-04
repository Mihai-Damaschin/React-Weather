import { UnknownJsonInterface, FiveDaysWeatherInterface } from "../interfaces";
import { getWeatherData } from "../store/actions/weatherData";

interface AsyncGetdata {
  apiUri: string;
  setLoading: any;
}

export const asyncGetData = (state: AsyncGetdata) => (dispatch: any) => {
  state.setLoading(true);

  fetch(state.apiUri)
    .then((response: UnknownJsonInterface) => response.json())
    .then((data: FiveDaysWeatherInterface) =>
      dispatch(getWeatherData(data.list))
    )
    .catch(error => console.log(error));

  state.setLoading(false);
};
