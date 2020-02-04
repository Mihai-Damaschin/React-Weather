export default interface ItemInterface {
  dt: number;
  dt_txt: string;
  main: {
    temp_max: number;
    temp_min: number;
  };
  weather: {
    [key: string]: {
      icon: string;
    };
  };
  wind: object;
  sys: object;
  (prevState: never[]): never[];
}

export interface UnknownJsonInterface {
  [key: string]: any;
}

export interface FiveDaysWeatherInterface {
  cod: number;
  message: number;
  cnt: number;
  list: ItemInterface;
  (prevState: never[]): never[];
}
