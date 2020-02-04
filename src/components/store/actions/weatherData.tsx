export const getWeatherData = (data: any) => {
  return {
    type: "FETCH_WEATHER_DATA",
    payload: new Promise((resolve, reject) => {
      resolve(data);
    })
  };
};
