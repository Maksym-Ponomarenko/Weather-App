// current weather
export interface CurrentWeatherResponse {
    coord: {
        lon: number;
        lat: number;
    };
    weather: WeatherDescription[];
    base: string;
    main: MainWeatherData;
    visibility: number;
    wind: WindData;
    clouds: {
        all: number;
    };
    dt: number;
    sys: SysData;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface WeatherDescription {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MainWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export interface WindData {
    speed: number;
    deg: number;
    gust?: number;
}

export interface SysData {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
}

//forecast
export interface WeatherForecastResponse {
    cod: string;
    message: number;
    cnt: number;
    list: Forecast[];
}

export interface Forecast {
    dt: number;
    main: MainWeatherData;
    weather: WeatherDescription[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust?: number;
    };
    visibility: number;
    pop: number;
    sys: {
        pod: "d" | "n";
    };
    dt_txt: string;
}

export interface MainWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface WeatherDescription {
    id: number;
    main: string;
    description: string;
    icon: string;
}
