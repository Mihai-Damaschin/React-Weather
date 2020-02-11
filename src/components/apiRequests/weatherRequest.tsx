import { UnknownJsonInterface, FiveDaysWeatherInterface } from "../interfaces";
import { getWeatherData } from "../store/actions/weatherData";
import { loading, wasLoaded } from "../store/actions/dataLoading";

interface AsyncGetdata {
  apiUri: string;
}

export const asyncGetData = (state: AsyncGetdata) => {
  return (dispatch: any) =>
  {
    dispatch(loading());

    fetch(state.apiUri)
        .then((response: UnknownJsonInterface) => response.json())
        .then((data: FiveDaysWeatherInterface) =>
            dispatch(getWeatherData(data.list))
        )
        .then(dispatch(wasLoaded()))
        .catch(error => console.log(error));
  };
};
